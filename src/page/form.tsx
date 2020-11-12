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
import StyleForm from "../../style/page/form.sass";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { clearUsername, readUsername } from "../portal/save";
import { IStore } from "../state/declare";
import { setPassword, setUsernameAndNamespace } from "../state/form/form";
import { BRONTOSAURUS_NAMESPACE } from "../state/form/type";
import { setSaveUsername } from "../state/preference/preference";
import { FOCUS_DELAY } from "../util/magic";
import { combineClasses } from "../util/style";

type FormProp = {

    readonly login: (username: string, namespace: string, password: string) => void;

    readonly onChange: () => void;
    readonly changeRequired: boolean;
};

type FormConnectedState = {

    readonly language: SudooFormat;
    readonly saveUsername: boolean;
    readonly username: string;
    readonly namespace: string;
    readonly password: string;
};

type FormConnectedAction = {

    readonly setSaveUsername: (saveUsername: boolean) => void;
    readonly setUsernameAndNamespace: (combined: string) => void;
    readonly setPassword: (password: string) => void;
};

type ConnectProps = FormProp & FormConnectedState & FormConnectedAction;

const connector = Connector.create<IStore, FormConnectedState, FormConnectedAction>()
    .connectStates(({ form, preference }: IStore) => ({

        language: intl.format(preference.language),
        saveUsername: preference.saveUsername,
        username: form.username,
        namespace: form.namespace,
        password: form.password,
    })).connectActions({

        setSaveUsername,
        setUsernameAndNamespace,
        setPassword,
    });

export class FormBase extends React.Component<ConnectProps> {

    private _combinedRef: HTMLInputElement | null = null;
    private _passwordRef: HTMLInputElement | null = null;

    public componentDidMount() {

        setTimeout(() => {

            if (!this._passwordRef || !this._combinedRef) {
                return;
            }

            if (this.props.saveUsername) {
                const username: string | null = readUsername();
                if (username) {
                    this.props.setUsernameAndNamespace(username);
                    this._passwordRef.focus();
                    return;
                }
            }

            clearUsername();
            this._combinedRef.focus();
        }, FOCUS_DELAY);
    }

    public render() {

        return (
            <React.Fragment>
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    inputRef={(ref: HTMLInputElement) => this._combinedRef = ref}
                    className={combineClasses(
                        StyleForm["select-override"],
                        StyleForm["margin-override"],
                    )}
                    label={this.props.language.get(PROFILE.USERNAME)}
                    margin={MARGIN.SMALL}
                    value={this._getCombined()}
                    onEnter={this._login.bind(this)}
                    onChange={this._setCombined.bind(this)} />
                <NeonInput
                    autoCapitalize={false}
                    autoComplete={false}
                    autoCorrect={false}
                    inputRef={(ref: HTMLInputElement) => this._passwordRef = ref}
                    className={combineClasses(
                        StyleForm["select-override"],
                        StyleForm["margin-override"],
                    )}
                    type={INPUT_TYPE.PASSWORD}
                    label={this.props.language.get(PROFILE.PASSWORD)}
                    margin={MARGIN.SMALL}
                    value={this.props.password}
                    onEnter={this._login.bind(this)}
                    onChange={this._setPassword.bind(this)} />
                <NeonCheckbox
                    value={this.props.saveUsername}
                    onChange={(next: boolean) => this.props.setSaveUsername(next)}
                >
                    {this.props.language.get(PROFILE.SAVE_USERNAME)}
                </NeonCheckbox>
                <NeonButton
                    className={combineClasses(
                        StyleForm["select-override"],
                        StyleForm["margin-override"],
                    )}
                    buttonClassName={StyleForm["login-button"]}
                    disabled={this.props.changeRequired}
                    size={SIZE.MEDIUM}
                    width={WIDTH.FULL}
                    margin={MARGIN.SMALL}
                    onClick={this._login.bind(this)}>
                    {this.props.language.get(PROFILE.SIGN_IN)}
                </NeonButton>
            </React.Fragment>
        );
    }

    private _getCombined() {

        if (this.props.namespace === BRONTOSAURUS_NAMESPACE.DEFAULT) {
            return this.props.username;
        }

        return this.props.namespace + '/' + this.props.username;
    }

    private _setCombined(value: string) {

        this.props.setUsernameAndNamespace(value);
        this.props.onChange();
    }

    private _setPassword(value: string) {

        this.props.setPassword(value);
        this.props.onChange();
    }

    private _login() {

        this.props.login(this.props.username, this.props.namespace, this.props.password);
    }
}

export const ConnectedForm: React.ComponentType<FormProp> = connector.connect(FormBase);
