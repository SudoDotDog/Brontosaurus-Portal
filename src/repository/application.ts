/**
 * @author WMXPY
 * @namespace Repository
 * @description Application
 */

import { Portal } from "../portal/portal";
import { ITarget } from "../state/info/type";

export const application = async (): Promise<ITarget> => {

    const portal: Portal = Portal.instance;

    const payload: string = JSON.stringify({
        applicationKey: portal.applicationKey,
    });

    const response: Response = await fetch('/application', {
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
            logo: data.avatar,
            image: data.background,
            application: data.name,
            help: data.help,
            privacy: data.privacy,
        };
    }

    throw new Error(data);
};
