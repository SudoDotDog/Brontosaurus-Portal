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
import { HelperLinks } from "./helper-links";

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

        return (<div className={StyleForm["timeout-container"]}>
            <div className={StyleForm["timeout-title"]}>
                {this.props.language.get(PROFILE.TIMEOUT_TITLE)}
            </div>
            <div>
                {this.props.language.get(PROFILE.TIMEOUT_DESCRIPTION)}
            </div>
            <HelperLinks />
        </div>);
    }

    private async _simple() {

        this.props.startLoading('Fetch');

        try {

            const info: TargetInfo = await simpleRepository({
                timeout: this.props.target.timeout,
                applicationIssue: this.props.target.applicationIssue,
            });
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
