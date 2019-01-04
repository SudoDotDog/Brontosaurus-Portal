/**
 * @author WMXPY
 * @namespace Page
 * @description Index
 */

import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { NeonPaper } from "@sudoo/neon/paper";
import { NeonSpinner } from "@sudoo/neon/spinner";
import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
import * as StyleLogin from "../../style/page/login.sass";
import { login } from "../repository/login";
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";
import { ITarget } from "../state/info/type";
import { startLoading } from "../state/status/status";

type LoginProp = {

    readonly username: string;
    readonly password: string;
    readonly isLoading: boolean;

    readonly setUsername: (username: string) => void;
    readonly setPassword: (password: string) => void;
    readonly startLoading: (message: string) => void;

    readonly target: ITarget;
};

const mapStates = ({ form, info, status }: IStore): Partial<LoginProp> => ({

    username: form.username,
    password: form.password,

    isLoading: Boolean(status.loading),

    target: info.target,
});

const mapDispatches: Partial<LoginProp> = {

    setUsername,
    setPassword,

    startLoading,
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
                {
                    this.props.isLoading ?
                        <div style={{
                            margin: 'auto',
                            width: '6rem',
                            marginTop: '2rem',
                            marginBottom: '2rem',
                        }}><NeonSpinner loading /></div> :
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
                }
            </NeonPaper>
        </div>);
    }

    private async _login() {

        this.props.startLoading('test');

        try {
            await login(this.props.username, this.props.password, 'BRONTOSAURUS_RED');
        } catch (err) {
            console.log(err, 2);
        }
    }
}

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
