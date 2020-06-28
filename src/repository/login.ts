/**
 * @author WMXPY
 * @namespace Repository
 * @description Login
 */

import { Fetch } from "@sudoo/fetch";
import { Portal } from "../portal/portal";
import { joinRoute } from "../util/route";
import { BaseAttemptBody, extendAttemptBody } from "./declare";

export type LoginBody = {

    readonly username: string;
    readonly namespace: string;
    readonly password: string;
    readonly applicationKey: string;
} & BaseAttemptBody;

export type LoginRepositoryResponse = {

    readonly limbo: boolean;
    readonly needTwoFA: boolean;
    readonly token: string | null;
};

export type LoginResponse = {

    readonly next: "limbo" | "twoFA" | "redirect";
    readonly token: string | null;
};

export const login = async (
    username: string,
    namespace: string,
    password: string,
): Promise<LoginResponse> => {

    const portal: Portal = Portal.instance;
    const body: LoginBody = extendAttemptBody(portal, {
        username,
        namespace,
        password,
        applicationKey: portal.applicationKey,
    });

    const data: LoginRepositoryResponse = await Fetch
        .post
        .json(joinRoute('/retrieve'))
        .migrate(body)
        .fetch();

    if (data.limbo) {
        return {
            next: 'limbo',
            token: null,
        };
    }

    if (data.needTwoFA) {
        return {
            next: 'twoFA',
            token: null,
        };
    }

    if (data.token) {
        return {
            next: 'redirect',
            token: data.token,
        };
    }

    throw new Error(JSON.stringify(data));
};
