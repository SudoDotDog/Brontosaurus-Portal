/**
 * @author WMXPY
 * @namespace Repository
 * @description Simple
 */

import { TargetInfo } from "../state/info/type";
import { joinRoute } from "../util/route";

export const simpleRepository = async (): Promise<TargetInfo> => {

    const response: Response = await fetch(joinRoute('/simple'), {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        },
        mode: "cors",
    });

    const data = await response.json();

    if (response.ok) {
        return {
            timeout: true,
            avatar: data.avatar,
            background: data.backgroundImage,
            name: data.name,
            help: data.help,
            privacy: data.privacy,
            favicon: data.favicon,

            systemName: data.systemName,
            accountName: data.accountName,

            indexPage: data.indexPage,
            entryPage: data.entryPage,
        };
    }

    throw new Error(data);
};
