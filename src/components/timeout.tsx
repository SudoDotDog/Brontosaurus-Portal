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
import { serverMightOfflineInfo } from "../portal/error";
import { simpleRepository } from "../repository/simple";
import { IStore } from "../state/declare";
import { setTarget } from "../state/info/info";
import { TargetInfo } from "../state/info/type";
import { clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { setFavicon } from "../util/favicon";
import { replaceRedirectPath } from "../util/redirect";

type ConnectedTimeoutStates = {

    readonly language: SudooFormat;
    readonly isLoading: boolean;
    readonly error: ErrorInfo | null;
    readonly succeed: ErrorInfo | null;
    readonly target: TargetInfo;
};

type ConnectedTimeoutActions = {

    readonly setTarget: (target: TargetInfo) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
};

export type TimeOutProps = {
};

type ConnectedProps = ConnectedTimeoutStates & ConnectedTimeoutActions & TimeOutProps;

const connector = Connector.create<IStore, ConnectedTimeoutStates, ConnectedTimeoutActions>()
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

export class TimeoutBase extends React.Component<ConnectedProps> {

    public componentDidMount() {

        this._simple();
    }

    public render(): JSX.Element {

        return (
            <div className={StyleForm.timeoutContainer}>
                <div className={StyleForm.timeoutTitle}>{this.props.language.get(PROFILE.TIMEOUT_TITLE)}</div>
                <div>{this.props.language.get(PROFILE.TIMEOUT_DESCRIPTION)}</div>
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

    private async _simple() {

        this.props.startLoading('Fetch');

        try {

            const info: TargetInfo = await simpleRepository();
            this.props.setTarget(info);

            if (info.favicon) {
                setFavicon(info.favicon);
            }
            if (info.background) {
                document.body.style.backgroundImage = `url('${info.background}')`;
            }
            if (info.systemName) {
                document.title = info.systemName;
            }

            this.props.clearLoading();
        } catch (err) {

            this.props.clearLoading();
            this.props.startError(serverMightOfflineInfo);
        }
    }
}

export const Timeout: React.ComponentType<TimeOutProps> = connector.connect(TimeoutBase);
