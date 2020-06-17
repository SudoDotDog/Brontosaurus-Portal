/**
 * @author WMXPY
 * @namespace Page
 * @description Limbo
 */

import { LOCALE, SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { FormStructure } from "../components/form";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { wrapMap } from "../portal/error";
import { Portal } from "../portal/portal";
import { limboRepository } from "../repository/limbo";
import { IStore } from "../state/declare";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { FOCUS_DELAY } from "../util/magic";
import { combineClasses } from "../util/style";

type LimboStates = {

    readonly newPassword: string;
};

type ConnectedLimboStates = {

    readonly username: string;
    readonly namespace: string;
    readonly password: string;
    readonly language: SudooFormat;
    readonly locale: LOCALE;
};

type ConnectedLimboActions = {

    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;
};

type ConnectedProps = ConnectedLimboStates & ConnectedLimboActions;

const connector = Connector.create<IStore, ConnectedLimboStates, ConnectedLimboActions>()
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

export class LimboBase extends React.Component<ConnectedProps, LimboStates> {

    public readonly state: LimboStates = {

        newPassword: '',
    };

    private _passwordRef: HTMLInputElement | null = null;

    public componentDidMount() {

        setTimeout(() => {

            if (!this._passwordRef) {
                return;
            }
            this._passwordRef.focus();
        }, FOCUS_DELAY);
    }

    public render(): JSX.Element {

        const login: () => void = () => this._limbo(this.state.newPassword);

        return (
            <FormStructure>
                <div className={StyleForm.title}>
                    {this.props.language.get(PROFILE.LIMBO_DESCRIPTION)}
                </div>
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    inputRef={(ref: HTMLInputElement) => this._passwordRef = ref}
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    type={INPUT_TYPE.PASSWORD}
                    label={this.props.language.get(PROFILE.NEW_PASSWORD)}
                    margin={MARGIN.SMALL}
                    value={this.state.newPassword}
                    onEnter={login}
                    onChange={(value) => this.setState({ newPassword: value })} />
                <NeonButton
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    size={SIZE.MEDIUM}
                    width={WIDTH.FULL}
                    margin={MARGIN.SMALL}
                    onClick={login}>
                    {this.props.language.get(PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN)}
                </NeonButton>
            </FormStructure>
        );
    }

    private async _limbo(password: string): Promise<void> {

        this.props.clearError();
        this.props.startLoading('Login');

        try {

            const token: string = await limboRepository(this.props.username, this.props.namespace, this.props.password, password);
            Portal.flush(token, this.props.locale);
        } catch (err) {


            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedLimbo: React.ComponentType<unknown> = connector.connect(LimboBase);
