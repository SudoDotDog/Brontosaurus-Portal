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
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";

type FormProp = {

    readonly username: string;
    readonly password: string;

    readonly setUsername: (username: string) => void;
    readonly setPassword: (password: string) => void;

    readonly login: (username: string, password: string) => void;
};

const connector = Connector.create<IStore, FormProp>()
    .connectStates(({ form }: IStore): Partial<FormProp> => ({

        username: form.username,
        password: form.password,
    })).connectActions({

        setUsername,
        setPassword,
    });

export const FormBase = (props: FormProp) =>
    (<React.Fragment>
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
            size={SIZE.MEDIUM}
            width={WIDTH.FULL}
            margin={MARGIN.SMALL}
            onClick={() => props.login(props.username, props.password)}>
            SignIn
        </NeonButton>
    </React.Fragment>);

export const ConnectedForm: React.ComponentType<Pick<FormProp, 'login'>> = connector.connect(FormBase);
