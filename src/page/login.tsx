/**
 * @author WMXPY
 * @namespace Page
 * @description Index
 */

import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { NeonPaper } from "@sudoo/neon/paper";
import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
import * as StyleLogin from "../../style/page/login.sass";
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";
import { ITarget } from "../state/info/type";

type LoginProp = {

    readonly username: string;
    readonly password: string;

    readonly setUsername: (username: string) => void;
    readonly setPassword: (password: string) => void;

    readonly target: ITarget;
};

const mapStates = ({ form, info }: IStore): Partial<LoginProp> => ({

    username: form.username,
    password: form.password,

    target: info.target,
});

const mapDispatches: Partial<LoginProp> = {

    setUsername,
    setPassword,
};

export const LoginBase: React.SFC<LoginProp> = (props: LoginProp) => {

    console.log(StyleLogin);

    return (<div className={StyleLogin.login}>
        <NeonPaper>
            <img src={props.target.logo} className={StyleLogin.logoImage} />
            <div>{props.target.application}</div>
            <NeonInput
                label="Username"
                margin={MARGIN.SMALL}
                onChange={(value) => props.setUsername(value)} />
            <NeonInput
                type={INPUT_TYPE.PASSWORD}
                label="Password"
                margin={MARGIN.SMALL}
                onChange={(value) => props.setPassword(value)} />
            <NeonButton
                size={SIZE.FULL}
                margin={MARGIN.SMALL}
                onClick={() => {
                    console.log(props);
                    props.setPassword('1');
                }}>
                Login
            </NeonButton>
        </NeonPaper>
    </div>);
};

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
