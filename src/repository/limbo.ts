/**
 * @author WMXPY
 * @namespace Repository
 * @description Limbo
 */

import { Fetch } from "@sudoo/fetch";
import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";
import { BaseAttemptBody, extendAttemptBody } from "./declare";

export type LimboRouteBody = {

    readonly username: string;
    readonly namespace: string;
    readonly oldPassword: string;
    readonly newPassword: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export type LimboRepositoryResponse = {

    readonly limbo: boolean;
    readonly needTwoFA: boolean;
    readonly token: string | null;
};

export const limboRepository = async (
    username: string,
    namespace: string,
    oldPassword: string,
    newPassword: string,
): Promise<string> => {

    const portal: Portal = Portal.instance;
    const body: LimboRouteBody = extendAttemptBody(portal, {
        username,
        namespace,
        oldPassword,
        newPassword,
        applicationKey: portal.applicationKey,
    });

    const data: LimboRepositoryResponse = await Fetch
        .post
        .withJson(joinRoute('/limbo'))
        .migrate(body)
        .fetchJson();

    if (data.token && !data.limbo) {
        return data.token;
    }

    throw new Error(data as any);
};
