/**
 * @author WMXPY
 * @namespace Page
 * @description Login
 */

import { SudooFormat } from "@sudoo/internationalization";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import { FormStructure } from "../components/form";
import { intl } from "../i18n/intl";
import { emptyPasswordInfo, emptyUsernameInfo, wrapMap } from "../portal/error";
import { Portal } from "../portal/portal";
import { saveUsername } from "../portal/save";
import { login, LoginResponse } from "../repository/login";
import { IStore } from "../state/declare";
import { TargetInfo } from "../state/info/type";
import { setPage } from "../state/page/page";
import { PAGE } from "../state/page/type";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { ConnectedForm } from "./form";

type ConnectedLoginStates = {

    readonly saveUsername: boolean;
    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type ConnectedLoginActions = {

    readonly setPage: (page: PAGE) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;
};

type ConnectedProps = ConnectedLoginStates & ConnectedLoginActions;

const connector = Connector.create<IStore, ConnectedLoginStates, ConnectedLoginActions>()
    .connectStates(({ info, preference }: IStore) => ({

        saveUsername: preference.saveUsername,
        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
        startLoading,
        clearLoading,
        startError,
        clearError,
    });

export class LoginBase extends React.Component<ConnectedProps> {

    public constructor(props: ConnectedProps) {

        super(props);

        this._login = this._login.bind(this);
    }

    public render(): JSX.Element {

        return (
            <FormStructure>
                {this._renderForm()}
            </FormStructure>
        );
    }
    private _renderForm(): React.ReactNode {

        if (!this.props.target.name) {
            return null;
        }

        return (<ConnectedForm login={this._login} />);
    }

    private async _login(username: string, password: string): Promise<void> {

        this.props.startLoading('Login');

        if (username.length === 0) {
            this.props.clearLoading();
            this.props.startError(emptyUsernameInfo);
            return;
        }

        if (password.length === 0) {
            this.props.clearLoading();
            this.props.startError(emptyPasswordInfo);
            return;
        }

        try {

            const action: LoginResponse = await login(username, password);
            if (action.next === 'redirect') {
                if (this.props.saveUsername) {
                    saveUsername(username);
                }
                Portal.flush(action.token as string);
            }
            if (action.next === 'limbo') {
                this.props.setPage(PAGE.LIMBO);
            }
            if (action.next === 'twoFA') {
                this.props.setPage(PAGE.TWOFA);
            }

            this.props.clearLoading();
            this.props.clearError();
        } catch (err) {


            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedLogin: React.ComponentType<{}> = connector.connect(LoginBase);
