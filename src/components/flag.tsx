/**
 * @author WMXPY
 * @namespace Components
 * @description Flag
 */

import { MARGIN } from "@sudoo/neon/declare";
import { FLAG_TYPE, NeonFlag } from "@sudoo/neon/flag";
import * as React from "react";
import { ErrorInfo } from "../state/status/type";

type ErrorFlagProp = {

    readonly error?: ErrorInfo | null;
};

export const ErrorFlag: React.SFC<ErrorFlagProp> = (props: ErrorFlagProp) => {

    if (props.error) {

        return (
            <NeonFlag
                margin={MARGIN.SMALL}
                info={props.error.long}

                type={FLAG_TYPE.ERROR}>
                {props.error.short}
            </NeonFlag>
        );
    }

    return null;
};
