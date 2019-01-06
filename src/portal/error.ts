/**
 * @author WMXPY
 * @namespace Portal
 * @description Error
 */

import { ErrorInfo } from "../state/status/type";

const errorMap: Record<string, ErrorInfo> = {


};

export const wrapMap = (message: string): ErrorInfo => {

    const instance: ErrorInfo | undefined = errorMap[message];

    if (instance) {

        return instance;
    }

    return {
        short: "Unknown Error",
        long: "",
    };
};
