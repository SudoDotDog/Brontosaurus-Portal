/**
 * @author WMXPY
 * @namespace Page
 * @description Login
 */

import { NeonPaper } from "@sudoo/neon/paper";
import { NeonIndicator } from "@sudoo/neon/spinner";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import * as StyleLogin from "../../style/page/login.sass";
import { ErrorFlag } from "../components/flag";
import { Title } from "../components/title";
import { wrapMap } from "../portal/error";
import { Portal } from "../portal/portal";
import { login } from "../repository/login";
import { IStore } from "../state/declare";
import { ITarget } from "../state/info/type";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { ConnectedForm } from "./form";

type ConnectedLoginStates = {

    readonly isLoading: boolean;
    readonly error: ErrorInfo | null;
    readonly target: ITarget;
};

type ConnectedLoginActions = {

    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;
};

type ConnectedProps = ConnectedLoginStates & ConnectedLoginActions;

const connector = Connector.create<IStore, ConnectedLoginStates, ConnectedLoginActions>()
    .connectStates(({ info, status }: IStore) => ({

        isLoading: Boolean(status.loading),
        error: status.error,

        target: info.target,
    })).connectActions({

        startLoading,
        clearLoading,
        startError,
        clearError,
    });

export class LoginBase extends React.Component<ConnectedProps> {

    public constructor(props: ConnectedProps) {

        super(props);

        this._login = this._login.bind(this);
    }

    public render(): JSX.Element {

        return (<div className={StyleLogin.page}>
            <div className={StyleLogin.wrapper}>
                <div className={StyleLogin.inner}>
                    <NeonPaper className={[StyleLogin.login, StyleForm.borderOverride].join(' ')}>
                        {this._renderLogo()}
                        {this._renderTitle()}
                        <NeonIndicator loading={this.props.isLoading}>
                            <ErrorFlag error={this.props.error} />
                            {this._renderForm()}
                        </NeonIndicator>
                        {this._renderHelp()}
                    </NeonPaper>
                </div>
            </div>
            {this._renderPrivacy()}
        </div>);
    }

    private _renderPrivacy(): React.ReactNode {

        if (!this.props.target.privacy) {
            return null;
        }

        return (<div className={StyleLogin.privacy}>
            <div className={StyleLogin.privacyText}>
                <a
                    className={StyleForm.link}
                    href={this.props.target.privacy}
                >
                    Privacy Policy
            </a>
            </div>
        </div>);
    }

    private _renderHelp(): React.ReactNode {

        if (!this.props.target.help) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <a
                className={StyleForm.link}
                href={this.props.target.help}
            >
                Need help signing in?
            </a>
        </div>);
    }

    private _renderLogo(): React.ReactNode {

        if (!this.props.target.logo) {
            return null;
        }

        return (<div
            style={{
                backgroundImage: `url('${this.props.target.logo}')`,
            }}
            className={StyleLogin.logoImage}
        />);
    }

    private _renderTitle(): React.ReactNode {

        if (!this.props.target.application) {
            return null;
        }

        return (<Title applicationName={this.props.target.application} />);
    }

    private _renderForm(): React.ReactNode {

        if (!this.props.target.application) {
            return null;
        }

        return (<ConnectedForm login={this._login} />);
    }

    private async _login(username: string, password: string): Promise<void> {

        this.props.startLoading('Login');

        try {

            const token: string = await login(username, password);
            Portal.flush(token);
        } catch (err) {

            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedLogin: React.ComponentType<{}> = connector.connect(LoginBase);
