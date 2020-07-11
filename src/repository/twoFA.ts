/**
 * @author WMXPY
 * @namespace Repository
 * @description TwoFA
 */

import { Fetch } from "@sudoo/fetch";
import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";
import { BaseAttemptBody, extendAttemptBody } from "./declare";

export type TwoFABody = {

    readonly username: string;
    readonly namespace: string;
    readonly password: string;
    readonly code: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export type TwoFARepositoryResponse = {

    readonly limbo: boolean;
    readonly needTwoFA: boolean;
    readonly token: string | null;
};

export const twoFARepository = async (
    username: string,
    namespace: string,
    password: string,
    code: string,
): Promise<string> => {

    const portal: Portal = Portal.instance;

    const body: TwoFABody = extendAttemptBody(portal, {
        username,
        namespace,
        password,
        code,
        applicationKey: portal.applicationKey,
    });

    const data: TwoFARepositoryResponse = await Fetch
        .post
        .withJson(joinRoute('/twoFA'))
        .migrate(body)
        .fetchJson();

    if (data.token && !data.limbo) {
        return data.token;
    }

    throw new Error(data as any);
};
