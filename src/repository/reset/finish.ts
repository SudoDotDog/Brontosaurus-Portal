/**
 * @author WMXPY
 * @namespace Repository_Reset
 * @description Finish
 */

import { joinRoute } from "../../util/route";

export const resetFinishRepository = async (username: string, namespace: string, resetToken: string, newPassword: string): Promise<boolean> => {

    const payload: string = JSON.stringify({
        username,
        namespace,
        resetToken,
        newPassword,
    });

    const response: Response = await fetch(joinRoute('/reset/finish'), {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: "cors",
        body: payload,
    });

    const data: {
        readonly succeed: boolean;
    } = await response.json();

    if (response.ok) {

        return data.succeed;
    }

    throw new Error(data as any);
};
