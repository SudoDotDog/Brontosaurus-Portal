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
    "4001": {
        short: 'Username - Password not matched',
        long: 'Connect service',
    },
    "4120": {
        short: 'Internal Error',
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
