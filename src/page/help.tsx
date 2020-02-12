/**
 * @author WMXPY
 * @namespace Page
 * @description Help
 */

import { SudooFormat } from "@sudoo/internationalization";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import { FormStructure } from "../components/form";
import { intl } from "../i18n/intl";
import { IStore } from "../state/declare";
import { TargetInfo } from "../state/info/type";
import { setPage } from "../state/page/page";
import { PAGE } from "../state/page/type";

type ConnectedHelpStates = {

    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type ConnectedHelpActions = {

    readonly setPage: (page: PAGE) => void;
};

type ConnectedProps = ConnectedHelpStates & ConnectedHelpActions;

const connector = Connector.create<IStore, ConnectedHelpStates, ConnectedHelpActions>()
    .connectStates(({ info, preference }: IStore) => ({

        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
    });

export class HelpBase extends React.PureComponent<ConnectedProps> {

    public render(): JSX.Element {

        return (<FormStructure>
            <div>123</div>
        </FormStructure>);
    }
}

export const ConnectedHelp: React.ComponentType<{}> = connector.connect(HelpBase);
