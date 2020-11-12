/**
 * @author WMXPY
 * @namespace Component
 * @description Timeout
 */

import { SudooFormat } from "@sudoo/internationalization";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import StyleForm from "../../style/page/form.sass";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { Portal } from "../portal/portal";
import { IStore } from "../state/declare";
import { setTarget } from "../state/info/info";
import { TargetInfo } from "../state/info/type";
import { clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { HelperLinks } from "./helper-links";

type ConnectedInsecureRedirectionStates = {

    readonly language: SudooFormat;
    readonly isLoading: boolean;
    readonly error: ErrorInfo | null;
    readonly succeed: ErrorInfo | null;
    readonly target: TargetInfo;
};

type ConnectedInsecureRedirectionActions = {

    readonly setTarget: (target: TargetInfo) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
};

export type InsecureRedirectionProps = {
};

type ConnectedProps = ConnectedInsecureRedirectionStates & ConnectedInsecureRedirectionActions & InsecureRedirectionProps;

const connector = Connector.create<IStore, ConnectedInsecureRedirectionStates, ConnectedInsecureRedirectionActions>()
    .connectStates(({ info, preference, status }: IStore) => ({

        language: intl.format(preference.language),
        isLoading: Boolean(status.loading),
        error: status.error,
        succeed: status.succeed,
        target: info.target,
    })).connectActions({

        setTarget,
        startLoading,
        clearLoading,
        startError,
    });

export class InsecureRedirectionBase extends React.Component<ConnectedProps> {

    public render() {

        return (<div className={StyleForm["timeout-container"]}>
            <div className={StyleForm["timeout-title"]}>
                {this._getTitle()}
            </div>
            <div>
                {this._getDescription()}
            </div>
            <HelperLinks />
        </div>);
    }

    private _getTitle() {

        const portal: Portal = Portal.instance;
        if (portal.isRedirect) {
            return this.props.language.get(PROFILE.INSECURE_REDIRECTION_TITLE);
        }
        return this.props.language.get(PROFILE.INSECURE_PROTOCOL_TITLE);
    }

    private _getDescription() {

        const portal: Portal = Portal.instance;
        if (portal.isRedirect) {
            return this.props.language.get(PROFILE.INSECURE_REDIRECTION_DESCRIPTION);
        }
        return this.props.language.get(PROFILE.INSECURE_PROTOCOL_CONTENT);
    }
}

export const InsecureRedirection: React.ComponentType<InsecureRedirectionProps> = connector.connect(InsecureRedirectionBase);
