/**
 * @author WMXPY
 * @namespace Page
 * @description Target
 */

import * as React from "react";
import { connect, ConnectedComponentClass } from "react-redux";
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

const mapStates = ({ info }: IStore): Partial<TargetProp> => ({
    target: info.target,
});

const mapDispatches: Partial<TargetProp> = {
    setTarget,

    startLoading,
    clearLoading,
    startError,
    clearError,
};

export class TargetBase extends React.Component<TargetProp, {}> {

    public componentDidMount() {

        this._application();
    }

    public render(): JSX.Element {

        return this.props.children;
    }

    private async _application() {

        this.props.startLoading('test');

        try {

            const info: ApplicationRepositoryResponse = await application();
            this.props.setTarget({
                logo: info.avatar,
                image: this.props.target.image,
                application: info.name,
            });
            document.body.style.backgroundImage = `url('${this.props.target.image}')`;
            this.props.clearLoading();

        } catch (err) {

            const error: string = err.message;
            this.props.clearLoading();

            const info: ErrorInfo = wrapMap(error);
            this.props.startError(info);
        }
    }
}

export const ConnectedTarget: ConnectedComponentClass<typeof TargetBase, any> = connect(mapStates, mapDispatches as any)(TargetBase);
