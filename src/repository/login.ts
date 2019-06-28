/**
 * @author WMXPY
 * @namespace Repository
 * @description Login
 */

import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";

export type LoginResponse = {

    readonly next: "limbo" | "twoFA" | "redirect";
    readonly token: string | null;
};

export const login = async (username: string, password: string): Promise<LoginResponse> => {

    const portal: Portal = Portal.instance;

    const payload: string = JSON.stringify({
        username,
        password,
        applicationKey: portal.applicationKey,
    });

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
