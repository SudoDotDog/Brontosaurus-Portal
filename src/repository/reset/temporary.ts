/**
 * @author WMXPY
 * @namespace Repository_Reset
 * @description Temporary
 */

import { joinRoute } from "../../util/route";
import { BaseAttemptBody, extendAttemptBody } from "../declare";
import { Portal } from "../../portal/portal";

export type TemporaryBody = {

    readonly username: string;
    readonly namespace: string;
    readonly email: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export const resetTemporaryRepository = async (
    username: string,
    namespace: string,
    email: string,
): Promise<any> => {

    const portal: Portal = Portal.instance;
    const body: TemporaryBody = extendAttemptBody(portal, {
        username,
        namespace,
        email,
        applicationKey: portal.applicationKey,
    });

    const payload: string = JSON.stringify(body);

    const response: Response = await fetch(joinRoute('/reset/temporary'), {
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
        return data;
    }

    throw new Error(data);
};
