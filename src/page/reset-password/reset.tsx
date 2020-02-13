/**
 * @author WMXPY
 * @namespace Page_Reset_Password
 * @description Reset
 */

import { SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../../style/page/form.sass";
import { FormStructure } from "../../components/form";
import { Subtitle } from "../../components/subtitle";
import { intl } from "../../i18n/intl";
import { PROFILE } from "../../i18n/profile";
import { wrapMap } from "../../portal/error";
import { resetFinishRepository } from "../../repository/reset/finish";
import { IStore } from "../../state/declare";
import { TargetInfo } from "../../state/info/type";
import { setPage } from "../../state/page/page";
import { PAGE } from "../../state/page/type";
import { clearError, clearLoading, startError, startLoading } from "../../state/status/status";
import { ErrorInfo } from "../../state/status/type";
import { FOCUS_DELAY } from "../../util/magic";
import { combineClasses } from "../../util/style";

type ConnectedResetPasswordResetStates = {

    readonly username: string;
    readonly resetToken: string;
    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type ResetPasswordResetStates = {

    readonly password: string;
};

type ConnectedResetPasswordResetActions = {

    readonly setPage: (page: PAGE) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;
};

type ConnectedProps = ConnectedResetPasswordResetStates & ConnectedResetPasswordResetActions;

const connector = Connector.create<IStore, ConnectedResetPasswordResetStates, ConnectedResetPasswordResetActions>()
    .connectStates(({ info, preference, form }: IStore) => ({

        username: form.username,
        resetToken: form.resetToken,
        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
        startLoading,
        clearLoading,
        startError,
        clearError,
    });

export class ResetPasswordResetBase extends React.Component<ConnectedProps, ResetPasswordResetStates> {

    public readonly state: ResetPasswordResetStates = {

        password: '',
    };

    private _passwordRef: HTMLInputElement | null = null;

    public constructor(props: ConnectedProps) {

        super(props);

        this._resetPassword = this._resetPassword.bind(this);
    }

    public componentDidMount() {

        this.props.clearError();
        setTimeout(() => {

            if (!this._passwordRef) {
                return;
            }
            this._passwordRef.focus();
        }, FOCUS_DELAY);
    }

    public render(): JSX.Element {

        return (
            <FormStructure>
                <Subtitle
                    text={this.props.language.get(PROFILE.RESET_DESCRIPTION)}
                />
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    inputRef={(ref: HTMLInputElement) => this._passwordRef = ref}
                    type={INPUT_TYPE.PASSWORD}
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    label={this.props.language.get(PROFILE.NEW_PASSWORD)}
                    margin={MARGIN.SMALL}
                    value={this.state.password}
                    onEnter={this._resetPassword}
                    onChange={(value: string) => this.setState({ password: value })}
                />
                <NeonButton
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    size={SIZE.MEDIUM}
                    width={WIDTH.FULL}
                    margin={MARGIN.SMALL}
                    onClick={this._resetPassword}
                >
                    {this.props.language.get(PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN)}
                </NeonButton>
            </FormStructure>
        );
    }

    private async _resetPassword() {

        try {

            this.props.startLoading('Reset Login');
            await resetFinishRepository(this.props.username, this.props.resetToken, this.state.password);
            this.props.clearLoading();
            this.props.setPage(PAGE.RESET_PASSWORD_RESET);
        } catch (err) {

            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
        return;
    }
}

export const ConnectedResetPasswordReset: React.ComponentType<{}> = connector.connect(ResetPasswordResetBase);
