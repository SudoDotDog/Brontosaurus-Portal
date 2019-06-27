/**
 * @author WMXPY
 * @namespace Repository
 * @description TwoFA
 */

import { Portal } from "../portal/portal";

export const twoFARepository = async (username: string, password: string, code: string): Promise<string> => {

    const portal: Portal = Portal.instance;

    const payload: string = JSON.stringify({
        username,
        password,
        code,
        applicationKey: portal.applicationKey,
    });

    const response: Response = await fetch('/twoFA', {
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
