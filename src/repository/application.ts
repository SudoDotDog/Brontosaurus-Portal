/**
 * @author WMXPY
 * @namespace Repository
 * @description Application
 */

import { Portal } from "../portal/portal";
import { TargetInfo } from "../state/info/type";

export const application = async (): Promise<TargetInfo> => {

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
            avatar: data.avatar,
            background: data.background,
            name: data.name,
            help: data.help,
            privacy: data.privacy,
        };
    }

    throw new Error(data);
};
