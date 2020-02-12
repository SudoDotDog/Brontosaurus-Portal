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

type ConnectedResetPasswordTemporaryStates = {

    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type ResetPasswordTemporaryStates = {

    readonly password: string;
};

type ConnectedResetPasswordTemporaryActions = {

    readonly setPage: (page: PAGE) => void;
};

type ConnectedProps = ConnectedResetPasswordTemporaryStates & ConnectedResetPasswordTemporaryActions;

const connector = Connector.create<IStore, ConnectedResetPasswordTemporaryStates, ConnectedResetPasswordTemporaryActions>()
    .connectStates(({ info, preference }: IStore) => ({

        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
    });

export class ResetPasswordTemporaryBase extends React.Component<ConnectedProps, ResetPasswordTemporaryStates> {

    public readonly state: ResetPasswordTemporaryStates = {

        password: '',
    };

    private _passwordRef: HTMLInputElement | null = null;

    public constructor(props: ConnectedProps) {

        super(props);

        this._verifyTemporaryPassword = this._verifyTemporaryPassword.bind(this);
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
            <FormStructure showHelpCenter>
                <Subtitle
                    text={this.props.language.get(PROFILE.RESET_PASSWORD_TEMPORARY_DESCRIPTION)}
                >
                    <div className={StyleForm.help}>
                        <a
                            className={StyleForm.link}
                            onClick={() => {
                                window.location.href = this.props.target.help as any;
                            }}
                        >
                            {this.props.language.get(PROFILE.GO_TO_HELP_CENTER)}
                        </a>
                    </div>
                </Subtitle>
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    inputRef={(ref: HTMLInputElement) => this._passwordRef = ref}
                    type={INPUT_TYPE.PASSWORD}
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    label={this.props.language.get(PROFILE.TEMPORARY_PASSWORD)}
                    margin={MARGIN.SMALL}
                    value={this.state.password}
                    onEnter={this._verifyTemporaryPassword}
                    onChange={(value: string) => this.setState({ password: value })}
                />
                <NeonButton
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    size={SIZE.MEDIUM}
                    width={WIDTH.FULL}
                    margin={MARGIN.SMALL}
                    onClick={this._verifyTemporaryPassword}
                >
                    {this.props.language.get(PROFILE.RESET_PASSWORD_TEMPORARY_BUTTON)}
                </NeonButton>
            </FormStructure>
        );
    }

    private _verifyTemporaryPassword() {

        return;
    }
}

export const ConnectedResetPasswordTemporary: React.ComponentType<{}> = connector.connect(ResetPasswordTemporaryBase);
