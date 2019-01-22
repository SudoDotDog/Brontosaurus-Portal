/**
 * @author WMXPY
 * @namespace Repository
 * @description Login
 */

import { Portal } from "../portal/portal";

export const login = async (username: string, password: string): Promise<string> => {

    const portal: Portal = Portal.instance;

    const payload: string = JSON.stringify({
        username,
        password,
        applicationKey: portal.applicationKey,
    });

    const response: Response = await fetch('/retrieve', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: "cors",
        body: payload,
    });

    const data = await response.json();

    if (response.ok) {
        return data.token;
    }

    throw new Error(data);
};
