/**
 * @author WMXPY
 * @namespace Page
 * @description TwoFA
 */

import { SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { FormStructure } from "../components/form";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { wrapMap, wrongTwoFAInfo } from "../portal/error";
import { Portal } from "../portal/portal";
import { twoFARepository } from "../repository/twoFA";
import { IStore } from "../state/declare";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { combineClasses } from "../util/style";

type TwoFAStates = {

    readonly code: string;
};

type ConnectedTwoFAStates = {

    readonly username: string;
    readonly password: string;
    readonly language: SudooFormat;
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
        password: form.password,
        language: intl.format(preference.language),
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

    public render(): JSX.Element {

        const login: () => void = () => this._twoFA(this.state.code);

        return (
            <FormStructure>
                <div className={StyleForm.title}>
                    {this.props.language.get(PROFILE.TWO_FA_DESCRIPTION)}
                </div>
                <NeonInput
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    label={this.props.language.get(PROFILE.AUTH_CODE)}
                    margin={MARGIN.SMALL}
                    value={this.state.code}
                    onEnter={login}
                    onChange={(value) => this.setState({ code: value })} />
                <NeonButton
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
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

        this.props.startLoading('Login');

        if (!/^[0-9]{6}$/.test(code)) {
            this.props.clearLoading();
            this.props.startError(wrongTwoFAInfo);
            return;
        }

        try {

            const token: string = await twoFARepository(this.props.username, this.props.password, code);
            Portal.flush(token);
        } catch (err) {


            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedTwoFA: React.ComponentType<{}> = connector.connect(TwoFABase);
