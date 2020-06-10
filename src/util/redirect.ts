/**
 * @author WMXPY
 * @namespace Util
 * @description Redirect
 */

export const replaceRedirectPath = (path?: string | null): void => {

    console.log(path);

    if (typeof path !== 'string') {
        return;
    }

    if (window.location.replace
        && typeof window.location.replace === 'function') {
        window.location.replace(path);
    }

    window.location.href = path;
    return;
}
