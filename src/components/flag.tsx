/**
 * @author WMXPY
 * @namespace Components
 * @description Flag
 */

import { MARGIN, SIGNAL } from "@sudoo/neon/declare";
import { NeonFlag } from "@sudoo/neon/flag";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";

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

type SucceedFlagProp = {

    readonly show: boolean;
    readonly info?: string;
    readonly message?: string;
};

export const SucceedFlag: React.FC<SucceedFlagProp> = (props: SucceedFlagProp) => {

    if (props.show) {

        return (
            <NeonFlag
                margin={MARGIN.SMALL}
                info={props.info}
                className={StyleForm.marginOverride}
                message={props.message}
                type={SIGNAL.SUCCEED}>
            </NeonFlag>
        );
    }

    return null;
};
