/**
 * @author WMXPY
 * @namespace Page
 * @description Target
 */

import { Connector } from "@sudoo/redux";
import * as React from "react";
import { wrapMap } from "../portal/error";
import { application, ApplicationRepositoryResponse } from "../repository/application";
import { IStore } from "../state/declare";
import { setTarget } from "../state/info/info";
import { ITarget } from "../state/info/type";
import { clearError, clearLoading, startError, startLoading } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";

type TargetProp = {

    readonly setTarget: (target: ITarget) => void;
    readonly startLoading: (message: string) => void;
    readonly startError: (info: ErrorInfo) => void;
    readonly clearLoading: () => void;
    readonly clearError: () => void;

    readonly target: ITarget;
    readonly children: any;
};

const connector = Connector.create<IStore, TargetProp>()
    .connectStates(({ info }: IStore): Partial<TargetProp> => ({

        target: info.target,
    })).connectActions({

        setTarget,
        startLoading,
        clearLoading,
        startError,
        clearError,
    });

export class TargetBase extends React.Component<TargetProp, {}> {

    public componentDidMount() {

        this._application();
    }

    public render(): JSX.Element {

        return this.props.children;
    }

    private async _application() {

        this.props.startLoading('Fetch');

        try {

            const info: ApplicationRepositoryResponse = await application();
            this.props.setTarget({
                logo: info.avatar,
                image: info.background,
                application: info.name,
            });

            if (info.background) {
                document.body.style.backgroundImage = `url('${info.background}')`;
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
