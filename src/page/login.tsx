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

export const LoginBase: React.SFC<LoginProp> = (props: LoginProp) => {

    document.body.style.backgroundImage = `url('${props.target.image}')`;

    return (<div className={StyleLogin.login}>
        <NeonPaper style={{
            marginTop: '10rem',
        }}>

            <img src={props.target.logo} className={StyleLogin.logoImage} />
            <div>{props.target.application}</div>
            {
                props.isLoading ?
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
                            value={props.username}
                            onChange={(value) => props.setUsername(value)} />
                        <NeonInput
                            type={INPUT_TYPE.PASSWORD}
                            label="Password"
                            margin={MARGIN.SMALL}
                            value={props.password}
                            onChange={(value) => props.setPassword(value)} />
                        <NeonButton
                            size={SIZE.FULL}
                            margin={MARGIN.SMALL}
                            onClick={() => props.startLoading('test')}>
                            Login
                        </NeonButton>
                    </div>
            }
        </NeonPaper>
    </div>);
};

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
