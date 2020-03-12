/**
 * @author WMXPY
 * @namespace Repository_Reset
 * @description Reset
 */

import { joinRoute } from "../../util/route";

export const resetResetRepository = async (username: string, namespace: string, resetToken: string): Promise<string> => {

    const payload: string = JSON.stringify({
        username,
        namespace,
        resetToken,
    });

    const response: Response = await fetch(joinRoute('/reset/reset'), {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: "cors",
        body: payload,
    });

    const data: {
        readonly valid: boolean;
        readonly username: string;
    } = await response.json();

    if (response.ok) {
        return data.username;
    }

    throw new Error(data as any);
};
