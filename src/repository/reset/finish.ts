/**
 * @author WMXPY
 * @namespace Repository_Reset
 * @description Finish
 */

import { Fetch } from "@sudoo/fetch";
import { joinRoute } from "../../util/route";

export type ResetFinishRepositoryBody = {

    readonly username: string;
    readonly namespace: string;
    readonly resetToken: string;
    readonly newPassword: string;
};

export type ResetFinishRepositoryResponse = {

    readonly succeed: boolean;
};

export const resetFinishRepository = async (
    username: string,
    namespace: string,
    resetToken: string,
    newPassword: string,
): Promise<boolean> => {

    const body: ResetFinishRepositoryBody = {
        username,
        namespace,
        resetToken,
        newPassword,
    };

    const data: ResetFinishRepositoryResponse = await Fetch
        .post
        .json(joinRoute('/reset/finish'))
        .migrate(body)
        .fetch();

    return data.succeed;
};
