/**
 * @author WMXPY
 * @namespace Repository
 * @description Simple
 */

import { Fetch } from "@sudoo/fetch";
import { ApplicationRedirection, TargetInfo, PartialTargetInfo } from "../state/info/type";
import { joinRoute } from "../util/route";

export type SimpleRepositoryResponse = {

    readonly avatar?: string;
    readonly backgroundImage?: string;
    readonly help?: string;
    readonly privacy?: string;
    readonly favicon?: string;

    readonly name: string;
    readonly redirections: ApplicationRedirection[];
    readonly iFrameProtocol: boolean;
    readonly postProtocol: boolean;
    readonly alertProtocol: boolean;
    readonly noneProtocol: boolean;

    readonly systemName?: string;
    readonly accountName?: string;

    readonly indexPage?: string;
    readonly entryPage?: string;
};

export const simpleRepository = async (
    partialInfo: PartialTargetInfo,
): Promise<TargetInfo> => {

    const data: SimpleRepositoryResponse = await Fetch
        .get
        .withJson(joinRoute('/simple'))
        .fetchJson();

    return {
        ...partialInfo,

        name: data.name,

        avatar: data.avatar,
        background: data.backgroundImage,
        help: data.help,
        privacy: data.privacy,
        favicon: data.favicon,

        redirections: [],
        iFrameProtocol: false,
        postProtocol: false,
        alertProtocol: false,
        noneProtocol: false,

        systemName: data.systemName,
        accountName: data.accountName,

        indexPage: data.indexPage,
        entryPage: data.entryPage,
    };
};
