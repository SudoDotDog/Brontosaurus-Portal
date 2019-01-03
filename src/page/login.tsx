/**
 * @author WMXPY
 * @namespace Page
 * @description Index
 */

import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
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
    </div>);
};

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
