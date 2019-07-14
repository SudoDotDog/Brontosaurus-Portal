/**
 * @author WMXPY
 * @namespace Page
 * @description Login
 */

import { SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { NeonCheckbox } from "@sudoo/neon/radio";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { IStore } from "../state/declare";
import { setPassword, setUsername } from "../state/form/form";
import { setSaveUsername } from "../state/preference/preference";
import { combineClasses } from "../util/style";

type FormProp = {

    readonly login: (username: string, password: string) => void;
};

type FormConnectedState = {

    readonly language: SudooFormat;
    readonly saveUsername: boolean;
    readonly username: string;
    readonly password: string;
};

type FormConnectedAction = {

    readonly setSaveUsername: (saveUsername: boolean) => void;
    readonly setUsername: (username: string) => void;
    readonly setPassword: (password: string) => void;
};

type ConnectProps = FormProp & FormConnectedState & FormConnectedAction;

const connector = Connector.create<IStore, FormConnectedState, FormConnectedAction>()
    .connectStates(({ form, preference }: IStore) => ({

        language: intl.format(preference.language),
        saveUsername: preference.saveUsername,
        username: form.username,
        password: form.password,
    })).connectActions({

        setSaveUsername,
        setUsername,
        setPassword,
    });

export const FormBase: React.FC<ConnectProps> = (props: ConnectProps) => {

    const login: () => void = () =>
        props.login(props.username, props.password);

    return (<React.Fragment>
        <NeonInput
            autoCapitalize={false}
            autoComplete={false}
            autoCorrect={false}
            className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
            label={props.language.get(PROFILE.USERNAME)}
            margin={MARGIN.SMALL}
            value={props.username}
            onEnter={login}
            onChange={(value) => props.setUsername(value)} />
        <NeonInput
            autoCapitalize={false}
            autoComplete={false}
            autoCorrect={false}
            className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
            type={INPUT_TYPE.PASSWORD}
            label={props.language.get(PROFILE.PASSWORD)}
            margin={MARGIN.SMALL}
            value={props.password}
            onEnter={login}
            onChange={(value) => props.setPassword(value)} />
        <NeonCheckbox
            value={props.saveUsername}
            onChange={(next: boolean) => props.setSaveUsername(next)}
        >
            Save Username
        </NeonCheckbox>
        <NeonButton
            className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
            size={SIZE.MEDIUM}
            width={WIDTH.FULL}
            margin={MARGIN.SMALL}
            onClick={login}>
            {props.language.get(PROFILE.SIGN_IN)}
        </NeonButton>
    </React.Fragment>);
};

export const ConnectedForm: React.ComponentType<Pick<FormProp, 'login'>> = connector.connect(FormBase);
