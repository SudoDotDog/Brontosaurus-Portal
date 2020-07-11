/**
 * @author WMXPY
 * @namespace Repository_Reset
 * @description Reset
 */

import { Fetch } from "@sudoo/fetch";
import { joinRoute } from "../../util/route";

export type ResetResetRepositoryBody = {

    readonly username: string;
    readonly namespace: string;
    readonly resetToken: string;
};

export type ResetResetRepositoryResponse = {

    readonly valid: boolean;
    readonly username: string;
};

export const resetResetRepository = async (username: string, namespace: string, resetToken: string): Promise<string> => {

    const body: ResetResetRepositoryBody = {
        username,
        namespace,
        resetToken,
    };

    const data: ResetResetRepositoryResponse = await Fetch
        .post
        .withJson(joinRoute('/reset/reset'))
        .migrate(body)
        .fetchJson();

    return data.username;
};
