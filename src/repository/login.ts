/**
 * @author WMXPY
 * @namespace Repository
 * @description Login
 */

import { Portal } from "../portal/portal";

export type LoginResponse = {
    token: string;
};

export const login = async (username: string, password: string): Promise<LoginResponse> => {

    const portal: Portal = Portal.instance;

    const payload: string = JSON.stringify({
        username,
        password,
        applicationKey: portal.applicationKey,
    });

    const data: LoginResponse = await fetch('http://localhost:8080/retrieve', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: "cors",
        body: payload,
    }).then((response: Response) => {

        return response.json();
    });

    return null as any;
};
