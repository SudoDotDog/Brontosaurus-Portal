/**
 * @author WMXPY
 * @namespace Repository
 * @description TwoFA
 */

import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";
import { BaseAttemptBody } from "./declare";

export type TwoFARouteBody = {

    readonly username: string;
    readonly namespace: string;
    readonly password: string;
    readonly code: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export const twoFARepository = async (
    username: string,
    namespace: string,
    password: string,
    code: string,
): Promise<string> => {

    const portal: Portal = Portal.instance;
    const body: TwoFARouteBody = {
        username,
        namespace,
        password,
        code,
        applicationKey: portal.applicationKey,
        platform: 'WEB',
        target: portal.callbackPath,
    };

    const payload: string = JSON.stringify(body);

    const response: Response = await fetch(joinRoute('/twoFA'), {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: "cors",
        body: payload,
    });

    const data: {
        readonly limbo: boolean;
        readonly needTwoFA: boolean;
        readonly token: string | null;
    } = await response.json();

    if (response.ok) {

        if (data.token && !data.limbo) {
            return data.token;
        }
    }

    throw new Error(data as any);
};
