/**
 * @author WMXPY
 * @namespace Page
 * @description Login
 */

import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { NeonPaper } from "@sudoo/neon/paper";
import { NeonIndicator } from "@sudoo/neon/spinner";
import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
import * as StyleLogin from "../../style/page/login.sass";
import { ErrorFlag } from "../components/flag";
import { wrapMap } from "../portal/error";
import { Portal } from "../portal/portal";
import { login } from "../repository/login";
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";
import { ITarget } from "../state/info/type";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";

type LoginProp = {

    readonly username: string;
    readonly password: string;
    readonly isLoading: boolean;
    readonly error: ErrorInfo | null;

    readonly setUsername: (username: string) => void;
    readonly setPassword: (password: string) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;

    readonly target: ITarget;
};

const mapStates = ({ form, info, status }: IStore): Partial<LoginProp> => ({

    username: form.username,
    password: form.password,

    isLoading: Boolean(status.loading),
    error: status.error,

    target: info.target,
});

const mapDispatches: Partial<LoginProp> = {

    setUsername,
    setPassword,

    startLoading,
    clearLoading,
    startError,
    clearError,
};

export class LoginBase extends React.Component<LoginProp, {}> {

    public constructor(props: LoginProp) {

        super(props);

        this._login = this._login.bind(this);
    }

    public render(): JSX.Element {

        return (<div className={StyleLogin.login}>
            <NeonPaper style={{
                marginTop: '10rem',
            }}>
                <img src={this.props.target.logo} className={StyleLogin.logoImage} />
                <div>{this.props.target.application}</div>

                <NeonIndicator loading={this.props.isLoading}>

                    <ErrorFlag error={this.props.error} />
                    <NeonInput
                        label="Username"
                        margin={MARGIN.SMALL}
                        value={this.props.username}
                        onChange={(value) => this.props.setUsername(value)} />
                    <NeonInput
                        type={INPUT_TYPE.PASSWORD}
                        label="Password"
                        margin={MARGIN.SMALL}
                        value={this.props.password}
                        onChange={(value) => this.props.setPassword(value)} />
                    <NeonButton
                        size={SIZE.FULL}
                        margin={MARGIN.SMALL}
                        onClick={this._login}>
                        Login
                    </NeonButton>

                </NeonIndicator>
            </NeonPaper>
        </div>);
    }

    private async _login() {

        this.props.startLoading('test');

        try {

            const token: string = await login(this.props.username, this.props.password);
            const portal: Portal = Portal.instance;

            window.location.href = portal.callbackPath + '?token=' + token;
        } catch (err) {

            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
