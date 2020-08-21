/**
 * @author WMXPY
 * @namespace Util
 * @description Redirect
 */

import { PORTAL_MODE } from "../portal/util";

export const parseCallbackMode = (callbackPath: string): PORTAL_MODE => {

    const upperPath: string = callbackPath.toUpperCase();
    if (upperPath.startsWith('IFRAME')) {
        return PORTAL_MODE.IFRAME;
    }
    if (upperPath.startsWith('POST')) {
        return PORTAL_MODE.POST;
    }
    if (upperPath.startsWith('ALERT')) {
        return PORTAL_MODE.ALERT;
    }
    if (upperPath.startsWith('NONE')) {
        return PORTAL_MODE.NONE;
    }

    return PORTAL_MODE.REDIRECT;
};

export const replaceRedirectPath = (path?: string | null): void => {

    if (typeof path !== 'string') {
        return;
    }

    if (window.location.replace
        && typeof window.location.replace === 'function') {
        window.location.replace(path);
    }

    window.location.href = path;
    return;
};
