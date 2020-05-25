/**
 * @author WMXPY
 * @namespace Repository
 * @description Limbo
 */

import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";
import { BaseAttemptBody, extendAttemptBody } from "./declare";

export type LimboRouteBody = {

    readonly username: string;
    readonly namespace: string;
    readonly oldPassword: string;
    readonly newPassword: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export const limboRepository = async (
    username: string,
    namespace: string,
    oldPassword: string,
    newPassword: string,
): Promise<string> => {

    const portal: Portal = Portal.instance;
    const body: LimboRouteBody = extendAttemptBody(portal, {
        username,
        namespace,
        oldPassword,
        newPassword,
        applicationKey: portal.applicationKey,
    });

    const payload: string = JSON.stringify(body);

    const response: Response = await fetch(joinRoute('/limbo'), {
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
