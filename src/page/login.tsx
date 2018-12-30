/**
 * @author WMXPY
 * @namespace Portal
 * @description Hello
 */

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
        <div>
            <div></div>
            <input onChange={(event) => props.setUsername(event.target.value)} />
        </div>
        {props.password}
        <button onClick={() => {
            console.log(props);
            props.setPassword('1');
        }}>123</button>
    </div>);
};

export const ConnectedLogin: ConnectedComponentClass<typeof LoginBase, any> = connect(mapStates, mapDispatches as any)(LoginBase);
