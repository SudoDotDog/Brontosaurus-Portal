/**
 * @author WMXPY
 * @namespace Repository
 * @description Login
 */

import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";
import { BaseAttemptBody, extendAttemptBody } from "./declare";

export type LoginBody = {

    readonly username: string;
    readonly namespace: string;
    readonly password: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export type LoginResponse = {

    readonly next: "limbo" | "twoFA" | "redirect";
    readonly token: string | null;
};

export const login = async (
    username: string,
    namespace: string,
    password: string,
): Promise<LoginResponse> => {

    const portal: Portal = Portal.instance;
    const body: LoginBody = extendAttemptBody(portal, {
        username,
        namespace,
        password,
        applicationKey: portal.applicationKey,
    });

    const payload: string = JSON.stringify(body);

    const response: Response = await fetch(joinRoute('/retrieve'), {
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

        if (data.limbo) {
            return {
                next: 'limbo',
                token: null,
            };
        }
        if (data.needTwoFA) {
            return {
                next: 'twoFA',
                token: null,
            };
        }
        if (data.token) {
            return {
                next: 'redirect',
                token: data.token,
            };
        }
    }

    throw new Error(data as any);
};
