/**
 * @author WMXPY
 * @namespace Page
 * @description Target
 */

import { Connector } from "@sudoo/redux";
import * as React from "react";
import { wrapMap } from "../portal/error";
import { application } from "../repository/application";
import { IStore } from "../state/declare";
import { setTarget } from "../state/info/info";
import { TargetInfo } from "../state/info/type";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";

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
    readonly clearError: () => void;
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
        clearError,
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

        try {

            const info: TargetInfo = await application();
            this.props.setTarget(info);

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

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedTarget: React.ComponentType<{}> = connector.connect(TargetBase);
