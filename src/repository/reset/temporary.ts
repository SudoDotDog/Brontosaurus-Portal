/**
 * @author WMXPY
 * @namespace Repository_Reset
 * @description Temporary
 */

import { joinRoute } from "../../util/route";

export const resetTemporaryRepository = async (username: string, email: string): Promise<any> => {

    const payload: string = JSON.stringify({
        username,
        email,
    });

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
