/**
 * @author WMXPY
 * @namespace Repository_Reset
 * @description Temporary
 */

import { Fetch } from "@sudoo/fetch";
import { Portal } from "../../portal/portal";
import { joinRoute } from "../../util/route";
import { BaseAttemptBody, extendAttemptBody } from "../declare";

export type TemporaryBody = {

    readonly username: string;
    readonly namespace: string;
    readonly email: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export type ResetTemporaryRepositoryResponse = {
};

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

    const data: ResetTemporaryRepositoryResponse = await Fetch
        .post
        .json(joinRoute('/reset/temporary'))
        .migrate(body)
        .fetch();

    return data;
};
