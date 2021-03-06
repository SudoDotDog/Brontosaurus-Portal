/**
 * @author WMXPY
 * @namespace Components
 * @description Flag
 */

import { MARGIN, SIGNAL, SIZE } from "@sudoo/neon/declare";
import { NeonFlag } from "@sudoo/neon/flag";
import * as React from "react";
import StyleForm from "../../style/page/form.sass";

type ErrorFlagProp = {

    readonly show: boolean;
    readonly info?: string;
    readonly message?: string;
};

export const ErrorFlag: React.FC<ErrorFlagProp> = (props: ErrorFlagProp) => {

    if (props.show) {

        return (<NeonFlag
            margin={MARGIN.SMALL}
            info={props.info}
            maxSize={SIZE.FULL}
            className={StyleForm["margin-override"]}
            infoClassName={StyleForm["overflow-hidden-override"]}
            message={props.message}
            type={SIGNAL.ERROR}
        />);
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

        return (<NeonFlag
            margin={MARGIN.SMALL}
            info={props.info}
            className={StyleForm["margin-override"]}
            infoClassName={StyleForm["overflow-hidden-override"]}
            message={props.message}
            type={SIGNAL.SUCCEED}>
        </NeonFlag>);
    }

    return null;
};
