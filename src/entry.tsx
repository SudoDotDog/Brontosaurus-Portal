/**
 * @author WMXPY
 * @namespace Portal
 * @description Provider
 */

import * as React from "react";
import { ConnectedLogin } from "./page/login";
import { ConnectedTarget } from "./page/target";

export class Entry extends React.Component {

    public render(): JSX.Element {

        return (
            <ConnectedTarget>
                <ConnectedLogin />
            </ConnectedTarget>
        );
    }
}

export default Entry;
