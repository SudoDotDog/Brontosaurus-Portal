/**
 * @author WMXPY
 * @namespace Component
 * @description Timeout
 */

import { SudooFormat } from "@sudoo/internationalization";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { IStore } from "../state/declare";
import { setTarget } from "../state/info/info";
import { TargetInfo } from "../state/info/type";
import { clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { replaceRedirectPath } from "../util/redirect";

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

        return (
            <div className={StyleForm.timeoutContainer}>
                <div className={StyleForm.timeoutTitle}>{this.props.language.get(PROFILE.INSECURE_REDIRECTION_TITLE)}</div>
                <div>{this.props.language.get(PROFILE.INSECURE_REDIRECTION_DESCRIPTION)}</div>
                {this._renderEntryPage()}
                {this._renderIndexPage()}
                {this._renderHelpCenter()}
            </div>
        );
    }

    private _renderEntryPage() {

        if (!this.props.target.entryPage) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <span>
                {this.props.language.get(PROFILE.YOU_CAN)} -&nbsp;
                <a
                    className={StyleForm.link}
                    onClick={() => replaceRedirectPath(this.props.target.entryPage)}
                >
                    {this.props.language.get(PROFILE.GO_TO_ENTRY_PAGE)}
                </a>
            </span>
        </div>);
    }

    private _renderIndexPage() {

        if (!this.props.target.indexPage) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <span>
                {this.props.language.get(PROFILE.YOU_CAN)} -&nbsp;
                <a
                    className={StyleForm.link}
                    onClick={() => replaceRedirectPath(this.props.target.indexPage)}
                >
                    {this.props.language.get(PROFILE.GO_TO_INDEX_PAGE)}
                </a>
            </span>
        </div>);
    }

    private _renderHelpCenter() {

        if (!this.props.target.help) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <span>
                {this.props.language.get(PROFILE.YOU_CAN_ALSO)} -&nbsp;
                <a
                    className={StyleForm.link}
                    onClick={() => replaceRedirectPath(this.props.target.help)}
                >
                    {this.props.language.get(PROFILE.GO_TO_HELP_CENTER)}
                </a>
            </span>
        </div>);
    }
}

export const InsecureRedirection: React.ComponentType<InsecureRedirectionProps> = connector.connect(InsecureRedirectionBase);
