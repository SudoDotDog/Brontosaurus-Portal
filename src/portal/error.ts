/**
 * @author WMXPY
 * @namespace Portal
 * @description Error
 */

import { ErrorInfo } from "../state/status/type";

const errorMap: Record<string, ErrorInfo> = {

    "Failed to fetch": {
        short: 'Cannot connect to the server',
    },
};

export const wrapMap = (message: string): ErrorInfo => {

    const instance: ErrorInfo | undefined = errorMap[message];

    if (instance) {

        return instance;
    }

    console.log(message);

    return {
        short: "Unknown Error",
        long: "",
    };
};
