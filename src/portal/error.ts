/**
 * @author WMXPY
 * @namespace Portal
 * @description Error
 */

import { PROFILE } from "../i18n/profile";
import { ErrorInfo } from "../state/status/type";

const errorMap: Record<string, ErrorInfo> = {

    "Failed to fetch": {
        short: PROFILE.FAILED_TO_FETCH,
        long: PROFILE.FAILED_TO_FETCH_DESCRIPTION,
    },
    "4001": {
        short: PROFILE.USERNAME_PASSWORD_NOT_MATCH,
        long: PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION,
    },
    "4002": {
        short: PROFILE.TWO_FA_NOT_MATCH,
        long: PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION,
    },
    "4003": {
        short: PROFILE.TOO_MANY_ATTEMPT,
        long: PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION,
    },
    "4120": {
        short: PROFILE.INTERNAL_ERROR,
        long: PROFILE.INTERNAL_ERROR_DESCRIPTION,
    },
};

export const wrapMap = (message: string): ErrorInfo => {

    const instance: ErrorInfo | undefined = errorMap[message.toString()];

    if (instance) {

        return instance;
    }

    return {
        short: PROFILE.UNKNOWN_ERROR,
        long: PROFILE.CONNECT_SERVICE,
    };
};
