/**
 * @author WMXPY
 * @namespace Page
 * @description Login
 */

import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";
import { combineClasses } from "../util/style";

type FormProp = {

    readonly login: (username: string, password: string) => void;
};

type FormConnectedState = {

    readonly username: string;
    readonly password: string;
};

type FormConnectedAction = {

    readonly setUsername: (username: string) => void;
    readonly setPassword: (password: string) => void;
};

type ConnectProps = FormProp & FormConnectedState & FormConnectedAction;

const connector = Connector.create<IStore, FormConnectedState, FormConnectedAction>()
    .connectStates(({ form }: IStore) => ({

        username: form.username,
        password: form.password,
    })).connectActions({

        setUsername,
        setPassword,
    });

export const FormBase: React.FC<ConnectProps> = (props: ConnectProps) => {

    const login: () => void = () =>
        props.login(props.username, props.password);

    return (<React.Fragment>
        <NeonInput
            className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
            label="Username"
            margin={MARGIN.SMALL}
            value={props.username}
            onEnter={login}
            onChange={(value) => props.setUsername(value)} />
        <NeonInput
            className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
            type={INPUT_TYPE.PASSWORD}
            label="Password"
            margin={MARGIN.SMALL}
            value={props.password}
            onEnter={login}
            onChange={(value) => props.setPassword(value)} />
        <NeonButton
            className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
            size={SIZE.MEDIUM}
            width={WIDTH.FULL}
            margin={MARGIN.SMALL}
            onClick={login}>
            SignIn
        </NeonButton>
    </React.Fragment>);
};

export const ConnectedForm: React.ComponentType<Pick<FormProp, 'login'>> = connector.connect(FormBase);
