/**
 * @author WMXPY
 * @namespace Page
 * @description Help
 */

import { SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { FormStructure } from "../components/form";
import { Subtitle } from "../components/subtitle";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { emptyEmailInfo, emptyUsernameInfo, wrapMap } from "../portal/error";
import { resetTemporaryRepository } from "../repository/reset/temporary";
import { IStore } from "../state/declare";
import { setUsernameAndNamespace } from "../state/form/form";
import { BRONTOSAURUS_NAMESPACE } from "../state/form/type";
import { TargetInfo } from "../state/info/type";
import { setPage } from "../state/page/page";
import { PAGE } from "../state/page/type";
import { clearError, clearLoading, clearSucceed, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { combineClasses } from "../util/style";

type ConnectedHelpStates = {

    readonly username: string;
    readonly namespace: string;
    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type HelpStates = {

    readonly email: string;
};

type ConnectedHelpActions = {

    readonly setPage: (page: PAGE) => void;
    readonly setUsernameAndNamespace: (combined: string) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;
    readonly clearSucceed: () => void;
};

type ConnectedProps = ConnectedHelpStates & ConnectedHelpActions;

const connector = Connector.create<IStore, ConnectedHelpStates, ConnectedHelpActions>()
    .connectStates(({ info, preference, form }: IStore) => ({

        username: form.username,
        namespace: form.namespace,
        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
        setUsernameAndNamespace,
        startLoading,
        clearLoading,
        startError,
        clearError,
        clearSucceed,
    });

export class HelpBase extends React.Component<ConnectedProps, HelpStates> {

    public readonly state: HelpStates = {

        email: '',
    };

    public constructor(props: ConnectedProps) {

        super(props);

        this._sendResetEmail = this._sendResetEmail.bind(this);
    }

    public componentDidMount() {

        this.props.clearError();
        this.props.clearSucceed();
    }

    public render(): JSX.Element {

        return (
            <FormStructure showBackToLogin>
                <Subtitle
                    text={this.props.language.get(PROFILE.HELP_DESCRIPTION)}
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
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    label={this.props.language.get(PROFILE.USERNAME)}
                    margin={MARGIN.SMALL}
                    value={this._getCombined()}
                    onChange={(value: string) => this.props.setUsernameAndNamespace(value)}
                />
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    type={INPUT_TYPE.EMAIL}
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    label={this.props.language.get(PROFILE.EMAIL)}
                    margin={MARGIN.SMALL}
                    value={this.state.email}
                    onEnter={this._sendResetEmail}
                    onChange={(value: string) => this.setState({ email: value })}
                />
                <NeonButton
                    className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                    size={SIZE.MEDIUM}
                    width={WIDTH.FULL}
                    margin={MARGIN.SMALL}
                    onClick={this._sendResetEmail}
                >
                    {this.props.language.get(PROFILE.SEND_RESET_PASSWORD_EMAIL)}
                </NeonButton>
            </FormStructure>
        );
    }

    private _getCombined() {

        if (this.props.namespace === BRONTOSAURUS_NAMESPACE.DEFAULT) {
            return this.props.username;
        }

        return this.props.namespace + '/' + this.props.username;
    }

    private async _sendResetEmail() {

        this.props.clearError();
        this.props.startLoading('Reset Temporary');

        if (this.props.username.length === 0) {
            this.props.clearLoading();
            this.props.startError(emptyUsernameInfo);
            return;
        }

        if (this.state.email.length === 0) {
            this.props.clearLoading();
            this.props.startError(emptyEmailInfo);
            return;
        }

        try {

            await resetTemporaryRepository(this.props.username, this.props.namespace, this.state.email);
            this.props.clearLoading();
            this.props.setPage(PAGE.RESET_PASSWORD_TEMPORARY);
        } catch (err) {

            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
        return;
    }
}

export const ConnectedHelp: React.ComponentType<{}> = connector.connect(HelpBase);
