/**
 * @author WMXPY
 * @namespace Repository
 * @description Application
 */

import { Portal } from "../portal/portal";
import { TargetInfo, ApplicationRedirection } from "../state/info/type";
import { joinRoute } from "../util/route";
import { Fetch } from "@sudoo/fetch";

export type ApplicationRepositoryResponse = {

    readonly avatar?: string;
    readonly background?: string;
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

export const applicationRepository = async (): Promise<TargetInfo> => {

    const portal: Portal = Portal.instance;

    const data: ApplicationRepositoryResponse = await Fetch
        .post
        .json(joinRoute('/application'))
        .add('applicationKey', portal.applicationKey)
        .fetch();

    return {
        timeout: false,
        avatar: data.avatar,
        background: data.background,
        name: data.name,
        help: data.help,
        privacy: data.privacy,
        favicon: data.favicon,

        redirections: data.redirections,
        iFrameProtocol: data.iFrameProtocol,
        postProtocol: data.postProtocol,
        alertProtocol: data.alertProtocol,
        noneProtocol: data.noneProtocol,

        systemName: data.systemName,
        accountName: data.accountName,

        indexPage: data.indexPage,
        entryPage: data.entryPage,
    };
};
