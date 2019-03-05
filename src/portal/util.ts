/**
 * @author WMXPY
 * @namespace Portal
 * @description Util
 */

export enum PORTAL_MODE {
    REDIRECT = "REDIRECT",
    IFRAME = "IFRAME",
    ERROR = "ERROR",
}

export enum STATUS {

    SUCCEED = "SUCCEED",
    FAILED = "FAILED",
}

export const applicationMessageName: string = 'BRONTOSAURUS';

export const postParentMessage = (token: string): boolean => {

    if (window.parent && window.parent.postMessage) {

        window.parent.postMessage({
            type: applicationMessageName,
            status: STATUS.SUCCEED,
            token,
        }, '*');

        return true;
    }

    return false;
};
