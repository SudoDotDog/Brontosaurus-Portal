/**
 * @author WMXPY
 * @namespace Portal
 * @description Switch
 */

import { Connector } from "@sudoo/redux";
import * as React from "react";
import { ConnectedLimbo } from "./page/limbo";
import { ConnectedLogin } from "./page/login";
import { ConnectedTwoFA } from "./page/twoFA";
import { IStore } from "./state/declare";
import { PAGE } from "./state/page/type";

type ConnectedSwitchStates = {

    readonly page: PAGE;
};

type ConnectedSwitchProps = ConnectedSwitchStates;

const connector = Connector.create<IStore, ConnectedSwitchStates>()
    .connectStates(({ page }: IStore) => ({
        page: page.page,
    }));

export class Switch extends React.Component<ConnectedSwitchProps> {

    public render() {

        const page = this.props.page;

        switch (page) {
            case PAGE.LOGIN:
                return (<ConnectedLogin />);
            case PAGE.LIMBO:
                return (<ConnectedLimbo />);
            case PAGE.TWOFA:
                return (<ConnectedTwoFA />);
        }
        return null;
    }
}

export const ConnectedSwitch = connector.connect(Switch);
