/**
 * @author WMXPY
 * @namespace Portal
 * @description Util
 */

export enum PORTAL_MODE {
    REDIRECT = "REDIRECT",
    IFRAME = "IFRAME",
    NONE = "NONE",
    POST = "POST",
    ERROR = "ERROR",
}

export enum STATUS {

    SUCCEED = "SUCCEED",
    FAILED = "FAILED",
}

export const applicationMessageName: string = 'BRONTOSAURUS';

export const postCurrentMessage = (token: string): boolean => {

    if (window.postMessage) {

        window.postMessage(JSON.stringify({
            type: applicationMessageName,
            status: STATUS.SUCCEED,
            token,
        }), '*');

        return true;
    }

    return false;
};

export const postParentMessage = (token: string): boolean => {

    if (window.parent && window.parent.postMessage) {

        window.parent.postMessage(JSON.stringify({
            type: applicationMessageName,
            status: STATUS.SUCCEED,
            token,
        }), '*');

        return true;
    }

    return false;
};
