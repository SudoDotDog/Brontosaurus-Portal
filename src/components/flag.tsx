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

    readonly error?: ErrorInfo | null;
};

export const ErrorFlag: React.FC<ErrorFlagProp> = (props: ErrorFlagProp) => {

    if (props.error) {

        return (
            <NeonFlag
                margin={MARGIN.SMALL}
                info={props.error.long}
                className={StyleForm.marginOverride}

                type={SIGNAL.ERROR}>
                {props.error.short}
            </NeonFlag>
        );
    }

    return null;
};
