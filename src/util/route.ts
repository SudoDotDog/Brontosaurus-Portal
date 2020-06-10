/**
 * @author WMXPY
 * @namespace Util
 * @description Route
 */

export const joinRoute = (route: string) => {

    if (process.env.TEST_SERVER_PATH) {
        const path: string = process.env.TEST_SERVER_PATH;
        return path + route;
    }

    return route;
};
