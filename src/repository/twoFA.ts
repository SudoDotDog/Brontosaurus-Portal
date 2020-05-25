/**
 * @author WMXPY
 * @namespace Repository
 * @description TwoFA
 */

import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";
import { BaseAttemptBody, extendAttemptBody } from "./declare";

export type TwoFABody = {

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
    const body: TwoFABody = extendAttemptBody(portal, {
        username,
        namespace,
        password,
        code,
        applicationKey: portal.applicationKey,
    });

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
