/**
 * @author WMXPY
 * @namespace Repository
 * @description Limbo
 */

import { Portal } from "../portal/portal";

export const limboRepository = async (username: string, oldPassword: string, newPassword: string): Promise<string> => {

    const portal: Portal = Portal.instance;

    const payload: string = JSON.stringify({
        username,
        oldPassword,
        newPassword,
        applicationKey: portal.applicationKey,
    });

    const response: Response = await fetch('/limbo', {
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
