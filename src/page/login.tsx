/**
 * @author WMXPY
 * @namespace Portal
 * @description Hello
 */

import { NeonButton } from "@sudoo/neon/button";
import { SIZE } from "@sudoo/neon/common/declare";
import { NeonInput } from "@sudoo/neon/input";
import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
import * as StyleLogin from "../../style/page/login.sass";
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";

type LoginProp = {

    username: string;
    password: string;

    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
};

const mapStates = ({ form }: IStore): Partial<LoginProp> => ({

    username: form.username,
    password: form.password,
});

const mapDispatches: Partial<LoginProp> = {

    setUsername,
    setPassword,
};

export const LoginBase: React.SFC<LoginProp> = (props: LoginProp) => {

    console.log(StyleLogin);

    return (<div>
        <NeonInput
            label="Username"
            onChange={(value) => props.setUsername(value)} />
        <NeonInput
            type="password"
            label="Password"
            onChange={(value) => props.setPassword(value)} />
        <NeonButton
            size={SIZE.FULL}
            onClick={() => {
                console.log(props);
                props.setPassword('1');
            }}>
            Login
        </NeonButton>
    </div>);
};

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
