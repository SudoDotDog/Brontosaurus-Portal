/**
 * @author WMXPY
 * @namespace Repository
 * @description Application
 */

import { Portal } from "../portal/portal";

export type ApplicationRepositoryResponse = {
    readonly avatar: string;
    readonly background: string;
    readonly name: string;
};

export const application = async (): Promise<ApplicationRepositoryResponse> => {

    const portal: Portal = Portal.instance;

    const payload: string = JSON.stringify({
        applicationKey: portal.applicationKey,
    });

    const response: Response = await fetch('https://auth.rpngo.com/application', {
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
        return {
            avatar: data.avatar,
            background: data.background,
            name: data.name,
        };
    }

    throw new Error(data);
};
