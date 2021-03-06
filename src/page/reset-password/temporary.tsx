/**
 * @author WMXPY
 * @namespace Page_Reset_Password
 * @description Temporary
 */

import { SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import StyleForm from "../../../style/page/form.sass";
import { FormStructure } from "../../components/form";
import { HelperDescription } from "../../components/helper-description";
import { intl } from "../../i18n/intl";
import { PROFILE } from "../../i18n/profile";
import { emptyResetTokenInfo, wrapMap } from "../../portal/error";
import { resetResetRepository } from "../../repository/reset/reset";
import { IStore } from "../../state/declare";
import { setResetToken } from "../../state/form/form";
import { TargetInfo } from "../../state/info/type";
import { setPage } from "../../state/page/page";
import { PAGE } from "../../state/page/type";
import { clearError, clearLoading, clearSucceed, startError, startLoading } from "../../state/status/status";
import { ErrorInfo } from "../../state/status/type";
import { FOCUS_DELAY } from "../../util/magic";
import { combineClasses } from "../../util/style";

type ConnectedResetPasswordTemporaryStates = {

    readonly username: string;
    readonly namespace: string;
    readonly resetToken: string;
    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type ConnectedResetPasswordTemporaryActions = {

    readonly setPage: (page: PAGE) => void;
    readonly setResetToken: (resetToken: string) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;
    readonly clearSucceed: () => void;
};

type ConnectedProps = ConnectedResetPasswordTemporaryStates & ConnectedResetPasswordTemporaryActions;

const connector = Connector.create<IStore, ConnectedResetPasswordTemporaryStates, ConnectedResetPasswordTemporaryActions>()
    .connectStates(({ info, preference, form }: IStore) => ({

        username: form.username,
        namespace: form.namespace,
        resetToken: form.resetToken,
        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
        setResetToken,
        startLoading,
        clearLoading,
        startError,
        clearError,
        clearSucceed,
    });

export class ResetPasswordTemporaryBase extends React.Component<ConnectedProps> {

    private _passwordRef: HTMLInputElement | null = null;

    public componentDidMount() {

        this.props.clearError();
        this.props.clearSucceed();
        setTimeout(() => {

            if (!this._passwordRef) {
                return;
            }
            this._passwordRef.focus();
        }, FOCUS_DELAY);
    }

    public render(): JSX.Element {

        return (
            <FormStructure showBackToLogin>
                <HelperDescription
                    withHelpProfile={PROFILE.RESET_PASSWORD_TEMPORARY_DESCRIPTION}
                    noHelpProfile={PROFILE.RESET_PASSWORD_TEMPORARY_DESCRIPTION_NO_LINK}
                />
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    inputRef={(ref: HTMLInputElement) => this._passwordRef = ref}
                    type={INPUT_TYPE.PASSWORD}
                    className={combineClasses(
                        StyleForm["select-override"],
                        StyleForm["margin-override"],
                    )}
                    label={this.props.language.get(PROFILE.TEMPORARY_PASSWORD)}
                    margin={MARGIN.SMALL}
                    value={this.props.resetToken}
                    onEnter={this._verifyTemporaryPassword.bind(this)}
                    onChange={(value: string) => this.props.setResetToken(value)}
                />
                <NeonButton
                    className={combineClasses(
                        StyleForm["select-override"],
                        StyleForm["margin-override"],
                    )}
                    size={SIZE.MEDIUM}
                    width={WIDTH.FULL}
                    margin={MARGIN.SMALL}
                    onClick={this._verifyTemporaryPassword.bind(this)}
                >
                    {this.props.language.get(PROFILE.RESET_PASSWORD_TEMPORARY_BUTTON)}
                </NeonButton>
            </FormStructure>
        );
    }

    private async _verifyTemporaryPassword() {

        this.props.clearError();
        this.props.startLoading('Reset Reset');

        if (this.props.resetToken.length === 0) {
            this.props.clearLoading();
            this.props.startError(emptyResetTokenInfo);
            return;
        }

        try {

            await resetResetRepository(this.props.username, this.props.namespace, this.props.resetToken);
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

export const ConnectedResetPasswordTemporary: React.ComponentType<unknown> = connector.connect(ResetPasswordTemporaryBase);
