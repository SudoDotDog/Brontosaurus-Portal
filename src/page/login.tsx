/**
 * @author WMXPY
 * @namespace Page
 * @description Index
 */

import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { NeonPaper } from "@sudoo/neon/paper";
import { NeonIndicator } from "@sudoo/neon/spinner";
import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
import * as StyleLogin from "../../style/page/login.sass";
import { Portal } from "../portal/portal";
import { login, LoginResponse } from "../repository/login";
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";
import { ITarget } from "../state/info/type";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";

type LoginProp = {

    readonly username: string;
    readonly password: string;
    readonly isLoading: boolean;
    readonly error: string | null;

    readonly setUsername: (username: string) => void;
    readonly setPassword: (password: string) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (message: string) => void;
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

    public componentDidMount() {
        document.body.style.backgroundImage = `url('${this.props.target.image}')`;
    }

    public render(): JSX.Element {

        return (<div className={StyleLogin.login}>
            <NeonPaper style={{
                marginTop: '10rem',
            }}>
                <img src={this.props.target.logo} className={StyleLogin.logoImage} />
                <div>{this.props.target.application}</div>
                <NeonIndicator loading={this.props.isLoading}>
                    <div>
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
                    </div>
                </NeonIndicator>
            </NeonPaper>
        </div>);
    }

    private async _login() {

        this.props.startLoading('test');

        try {
            const response: LoginResponse = await login(this.props.username, this.props.password);
            const token: string = response.token;

            const portal: Portal = Portal.instance;

            window.location.href = portal.callbackPath + '?token=' + token;
        } catch (err) {

            this.props.clearLoading();
            throw err;
        }
    }
}

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
