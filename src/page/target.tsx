/**
 * @author WMXPY
 * @namespace Page
 * @description Target
 */

import { Connector } from "@sudoo/redux";
import * as React from "react";
import { applicationRepository } from "../repository/application";
import { IStore } from "../state/declare";
import { setTarget } from "../state/info/info";
import { TargetInfo } from "../state/info/type";
import { clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { setFavicon } from "../util/favicon";
import { Portal } from "../portal/portal";
import { wrapMap } from "../portal/error";

type TargetProp = {

    readonly children: any;
};

type ConnectedTargetStates = {

    readonly target: TargetInfo;
};

type ConnectedTargetActions = {

    readonly setTarget: (target: TargetInfo) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
};

type ConnectedTargetProps = TargetProp & ConnectedTargetStates & ConnectedTargetActions;

const connector = Connector.create<IStore, ConnectedTargetStates, ConnectedTargetActions>()
    .connectStates(({ info }: IStore) => ({
        target: info.target,
    })).connectActions({
        setTarget,
        startLoading,
        clearLoading,
        startError,
    });

export class TargetBase extends React.Component<ConnectedTargetProps> {

    public componentDidMount() {

        this._application();
    }

    public render(): JSX.Element {

        return this.props.children;
    }

    private async _application() {

        this.props.startLoading('Fetch');

        const portal: Portal = Portal.instance;

        if (!portal.hasApplicationKey) {

            this.props.clearLoading();

            this.props.setTarget({
                timeout: true,
                applicationIssue: false,
                name: '',
                redirections: [],
                iFrameProtocol: false,
                postProtocol: false,
                alertProtocol: false,
                noneProtocol: false,
            });
            return;
        }

        try {

            const info: TargetInfo = await applicationRepository(portal.applicationKey);
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

            const error: string = err.message;
            this.props.clearLoading();

            this.props.setTarget({
                timeout: false,
                applicationIssue: true,
                name: '',
                redirections: [],
                iFrameProtocol: false,
                postProtocol: false,
                alertProtocol: false,
                noneProtocol: false,
            });

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedTarget: React.ComponentType<unknown> = connector.connect(TargetBase);
