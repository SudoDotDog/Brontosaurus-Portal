/**
 * @author WMXPY
 * @namespace Util
 * @description Route
 */

export const joinRoute = (route: string) => {

    if (process && process.env && process.env.TEST_SERVER_PATH) {
        const path: string = process.env.TEST_SERVER_PATH as string;
        return path + route;
    }

    return route;
};
