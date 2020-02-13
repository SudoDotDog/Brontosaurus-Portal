/**
 * @author WMXPY
 * @namespace Portal
 * @description Error
 */

import { PROFILE } from "../i18n/profile";
import { ErrorInfo } from "../state/status/type";

export const emptyUsernameInfo: ErrorInfo = {
    short: PROFILE.EMPTY_USERNAME,
    long: PROFILE.EMPTY_USERNAME_DESCRIPTION,
};

export const emptyEmailInfo: ErrorInfo = {
    short: PROFILE.EMPTY_EMAIL,
    long: PROFILE.EMPTY_EMAIL_DESCRIPTION,
};

export const emptyPasswordInfo: ErrorInfo = {

    short: PROFILE.EMPTY_PASSWORD,
    long: PROFILE.EMPTY_PASSWORD_DESCRIPTION,
};

export const emptyResetTokenInfo: ErrorInfo = {
    short: PROFILE.EMPTY_RESET_TOKEN,
    long: PROFILE.EMPTY_RESET_TOKEN_DESCRIPTION,
};

export const wrongTwoFAInfo: ErrorInfo = {

    short: PROFILE.WRONG_TWO_FA_PATTERN,
    long: PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION,
};

export const resetPasswordSucceedInfo: ErrorInfo = {

    short: PROFILE.RESET_PASSWORD_SUCCEED,
    long: PROFILE.RESET_PASSWORD_SUCCEED_DESCRIPTION,
};

const errorMap: Record<string, ErrorInfo> = {

    "Failed to fetch": {
        short: PROFILE.FAILED_TO_FETCH,
        long: PROFILE.FAILED_TO_FETCH_DESCRIPTION,
    },
    "4000": {
        short: PROFILE.INACTIVE_ACCOUNT,
        long: PROFILE.INACTIVE_ACCOUNT_DESCRIPTION,
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
    "4108": {
        short: PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS,
        long: PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION,
    },
    "4109": {
        short: PROFILE.USERNAME_TOKEN_NOT_MATCH,
        long: PROFILE.USERNAME_TOKEN_NOT_MATCH_DESCRIPTION,
    },
    "4111": {
        short: PROFILE.UNSAFE_PASSWORD,
        long: PROFILE.UNSAFE_PASSWORD_DESCRIPTION,
    },
    "4113": {
        short: PROFILE.WIRED_PASSWORD,
        long: PROFILE.WIRED_PASSWORD_DESCRIPTION,
    },
    "4120": {
        short: PROFILE.INTERNAL_ERROR,
        long: PROFILE.INTERNAL_ERROR_DESCRIPTION,
    },
    "4121": {
        short: PROFILE.APPLICATION_GROUP_NOT_FULFILLED,
        long: PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION,
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
