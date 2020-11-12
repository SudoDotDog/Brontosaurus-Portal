/**
 * @author WMXPY
 * @namespace Page
 * @description TwoFA
 */

import { LOCALE, SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import StyleForm from "../../style/page/form.sass";
import { FormStructure } from "../components/form";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { wrapMap, wrongTwoFAInfo } from "../portal/error";
import { Portal } from "../portal/portal";
import { twoFARepository } from "../repository/twoFA";
import { IStore } from "../state/declare";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { FOCUS_DELAY } from "../util/magic";
import { combineClasses } from "../util/style";

type TwoFAStates = {

    readonly code: string;
};

type ConnectedTwoFAStates = {

    readonly username: string;
    readonly namespace: string;
    readonly password: string;
    readonly language: SudooFormat;
    readonly locale: LOCALE;
};

type ConnectedTwoFAActions = {

    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;
};

type ConnectedProps = ConnectedTwoFAStates & ConnectedTwoFAActions;

const connector = Connector.create<IStore, ConnectedTwoFAStates, ConnectedTwoFAActions>()
    .connectStates(({ preference, form }: IStore) => ({

        username: form.username,
        namespace: form.namespace,
        password: form.password,
        language: intl.format(preference.language),
        locale: preference.language,
    })).connectActions({

        startLoading,
        clearLoading,
        startError,
        clearError,
    });

export class TwoFABase extends React.Component<ConnectedProps, TwoFAStates> {

    public readonly state: TwoFAStates = {

        code: '',
    };

    private _twoFARef: HTMLInputElement | null = null;

    public componentDidMount() {

        setTimeout(() => {

            if (!this._twoFARef) {
                return;
            }
            this._twoFARef.focus();
        }, FOCUS_DELAY);
    }

    public render(): JSX.Element {

        const login: () => void = () => this._twoFA(this.state.code);

        return (
            <FormStructure>
                <div className={StyleForm.title}>
                    {this.props.language.get(PROFILE.TWO_FA_DESCRIPTION)}
                </div>
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    inputRef={(ref: HTMLInputElement) => this._twoFARef = ref}
                    type={INPUT_TYPE.NUMBER}
                    className={combineClasses(
                        StyleForm["select-override"],
                        StyleForm["margin-override"],
                    )}
                    label={this.props.language.get(PROFILE.AUTH_CODE)}
                    margin={MARGIN.SMALL}
                    value={this.state.code}
                    onEnter={login}
                    onChange={(value) => this.setState({ code: value })} />
                <NeonButton
                    className={combineClasses(
                        StyleForm["select-override"],
                        StyleForm["margin-override"],
                    )}
                    size={SIZE.MEDIUM}
                    width={WIDTH.FULL}
                    margin={MARGIN.SMALL}
                    onClick={login}>
                    {this.props.language.get(PROFILE.AUTH_AND_SIGN_IN)}
                </NeonButton>
            </FormStructure>
        );
    }

    private async _twoFA(code: string): Promise<void> {

        this.props.clearError();
        this.props.startLoading('Login');

        if (!/^[0-9]{6}$/.test(code)) {

            this.props.clearLoading();
            this.props.startError(wrongTwoFAInfo);
            return;
        }

        try {

            const token: string = await twoFARepository(this.props.username, this.props.namespace, this.props.password, code);
            Portal.flush(token, this.props.locale);
        } catch (err) {

            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedTwoFA: React.ComponentType<unknown> = connector.connect(TwoFABase);
