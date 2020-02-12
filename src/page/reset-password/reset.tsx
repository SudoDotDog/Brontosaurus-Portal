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
import { IStore } from "../../state/declare";
import { TargetInfo } from "../../state/info/type";
import { setPage } from "../../state/page/page";
import { PAGE } from "../../state/page/type";
import { FOCUS_DELAY } from "../../util/magic";
import { combineClasses } from "../../util/style";

type ConnectedResetPasswordResetStates = {

    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type ResetPasswordResetStates = {

    readonly password: string;
};

type ConnectedResetPasswordResetActions = {

    readonly setPage: (page: PAGE) => void;
};

type ConnectedProps = ConnectedResetPasswordResetStates & ConnectedResetPasswordResetActions;

const connector = Connector.create<IStore, ConnectedResetPasswordResetStates, ConnectedResetPasswordResetActions>()
    .connectStates(({ info, preference }: IStore) => ({

        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
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

    private _resetPassword() {

        return;
    }
}

export const ConnectedResetPasswordReset: React.ComponentType<{}> = connector.connect(ResetPasswordResetBase);
