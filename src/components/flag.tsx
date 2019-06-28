/**
 * @author WMXPY
 * @namespace Components
 * @description Flag
 */

import { MARGIN, SIGNAL } from "@sudoo/neon/declare";
import { NeonFlag } from "@sudoo/neon/flag";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { ErrorInfo } from "../state/status/type";

type ErrorFlagProp = {

    readonly show: boolean;
    readonly info?: string;
    readonly message?: string;
};

export const ErrorFlag: React.FC<ErrorFlagProp> = (props: ErrorFlagProp) => {

    if (props.show) {

        return (
            <NeonFlag
                margin={MARGIN.SMALL}
                info={props.info}
                className={StyleForm.marginOverride}
                message={props.message}
                type={SIGNAL.ERROR}>
            </NeonFlag>
        );
    }

    return null;
};
