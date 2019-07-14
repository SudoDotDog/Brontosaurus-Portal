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
import { clearUsername, readUsername } from "../portal/save";
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

export class FormBase extends React.Component<ConnectProps> {

    private _usernameRef: HTMLInputElement | null = null;
    private _passwordRef: HTMLInputElement | null = null;

    public constructor(props: ConnectProps) {

        super(props);

        this._login = this._login.bind(this);
    }

    public componentDidMount() {

        setTimeout(() => {

            if (!this._passwordRef || !this._usernameRef) {
                return;
            }

            if (this.props.saveUsername) {
                const username: string | null = readUsername();
                if (username) {
                    this.props.setUsername(username);
                    this._passwordRef.focus();
                    return;
                }
            }

            clearUsername();
            this._usernameRef.focus();
        }, 100);
    }

    public render() {

        return (<React.Fragment>
            <NeonInput
                autoCapitalize={false}
                autoComplete={false}
                autoCorrect={false}
                inputRef={(ref: HTMLInputElement) => this._usernameRef = ref}
                className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                label={this.props.language.get(PROFILE.USERNAME)}
                margin={MARGIN.SMALL}
                value={this.props.username}
                onEnter={this._login}
                onChange={(value) => this.props.setUsername(value)} />
            <NeonInput
                autoCapitalize={false}
                autoComplete={false}
                autoCorrect={false}
                inputRef={(ref: HTMLInputElement) => this._passwordRef = ref}
                className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                type={INPUT_TYPE.PASSWORD}
                label={this.props.language.get(PROFILE.PASSWORD)}
                margin={MARGIN.SMALL}
                value={this.props.password}
                onEnter={this._login}
                onChange={(value) => this.props.setPassword(value)} />
            <NeonCheckbox
                value={this.props.saveUsername}
                onChange={(next: boolean) => this.props.setSaveUsername(next)}
            >
                {this.props.language.get(PROFILE.SAVE_USERNAME)}
            </NeonCheckbox>
            <NeonButton
                className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                size={SIZE.MEDIUM}
                width={WIDTH.FULL}
                margin={MARGIN.SMALL}
                onClick={this._login}>
                {this.props.language.get(PROFILE.SIGN_IN)}
            </NeonButton>
        </React.Fragment>);
    }

    private _login() {

        this.props.login(this.props.username, this.props.password);
    }
}

export const ConnectedForm: React.ComponentType<Pick<FormProp, 'login'>> = connector.connect(FormBase);
