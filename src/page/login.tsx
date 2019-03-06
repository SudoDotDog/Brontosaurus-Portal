/**
 * @author WMXPY
 * @namespace Page
 * @description Login
 */

import { ALIGN, MARGIN } from "@sudoo/neon/declare";
import { NeonPaper } from "@sudoo/neon/paper";
import { NeonIndicator } from "@sudoo/neon/spinner";
import { NeonTitle } from "@sudoo/neon/typography";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleLogin from "../../style/page/login.sass";
import { ErrorFlag } from "../components/flag";
import { wrapMap } from "../portal/error";
import { Portal } from "../portal/portal";
import { login } from "../repository/login";
import { IStore } from "../state/declare";
import { ITarget } from "../state/info/type";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { ConnectedForm } from "./form";

type LoginProp = {

    readonly isLoading: boolean;
    readonly error: ErrorInfo | null;

    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;

    readonly target: ITarget;
};

const connector = Connector.create<IStore, LoginProp>()
    .connectStates(({ info, status }: IStore): Partial<LoginProp> => ({

        isLoading: Boolean(status.loading),
        error: status.error,

        target: info.target,
    })).connectActions({

        startLoading,
        clearLoading,
        startError,
        clearError,
    });

export class LoginBase extends React.Component<LoginProp, {}> {

    public constructor(props: LoginProp) {

        super(props);

        this._login = this._login.bind(this);
    }

    public render(): JSX.Element {

        return (<div className={StyleLogin.wrapper}>
            <NeonPaper className={StyleLogin.login}>
                {this._renderLogo()}
                {this._renderTitle()}
                <NeonIndicator loading={this.props.isLoading}>
                    <ErrorFlag error={this.props.error} />
                    {this._renderForm()}
                </NeonIndicator>
            </NeonPaper>
        </div>);
    }

    private _renderLogo(): React.ReactNode {

        if (!this.props.target.application) {
            return null;
        }

        return (<img
            src={this.props.target.logo}
            className={StyleLogin.logoImage}
        />);
    }

    private _renderTitle(): React.ReactNode {

        if (!this.props.target.application) {
            return null;
        }

        return (<NeonTitle
            align={ALIGN.LEFT}
            margin={MARGIN.SMALL}>
            SignIn: {this.props.target.application}
        </NeonTitle>);
    }

    private _renderForm(): React.ReactNode {

        if (!this.props.target.application) {
            return null;
        }

        return (<ConnectedForm login={this._login} />);
    }

    private async _login(username: string, password: string): Promise<void> {

        this.props.startLoading('test');

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
