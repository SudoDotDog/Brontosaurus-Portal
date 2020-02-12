/**
 * @author WMXPY
 * @namespace Portal
 * @description Provider
 */

import * as React from "react";
import { ConnectedTarget } from "./page/target";
import { ConnectedSwitch } from "./switch";

export class Entry extends React.Component {

    public render(): JSX.Element {

        return (
            <ConnectedTarget>
                <ConnectedSwitch />
            </ConnectedTarget>
        );
    }
}

// tslint:disable-next-line: no-default-export
export default Entry;
