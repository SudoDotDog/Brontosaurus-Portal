/**
 * @author WMXPY
 * @namespace Portal
 * @description Index
 */

import { SudooProvider } from "@sudoo/redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import '../style/common/global.sass';
import Entry from "./entry";
import { Portal } from "./portal/portal";
import { redux } from "./state/store";

declare const module: any;
declare const require: any;

Portal.register();

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        (
            <AppContainer>
                <SudooProvider redux={redux}>
                    <App />
                </SudooProvider>
            </AppContainer>
        ),
        document.getElementById("container"));
};

render(Entry);
if (module.hot) {

    module.hot.accept("./entry", () => {
        render(require("./entry").default);
    });
}
