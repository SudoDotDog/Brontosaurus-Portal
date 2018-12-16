/**
 * @author WMXPY
 * @namespace Portal
 * @description Hello
 */

import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
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

    console.log(props);

    return (<div>{props.password}
        <button onClick={() => props.setPassword('1')} />
    </div>);
};

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
