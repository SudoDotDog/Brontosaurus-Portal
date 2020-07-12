/**
 * @author WMXPY
 * @namespace Portal_State_Info
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export type ApplicationRedirection = {

    name: string;
    regexp: string;
};

export type PartialTargetInfo = {

    readonly externals: boolean;
    readonly timeout: boolean;
    readonly applicationIssue: boolean;
};

export type TargetInfo = {

    readonly name: string;
    readonly avatar?: string;
    readonly background?: string;
    readonly help?: string;
    readonly privacy?: string;
    readonly favicon?: string;

    readonly redirections: ApplicationRedirection[];
    readonly iFrameProtocol: boolean;
    readonly postProtocol: boolean;
    readonly alertProtocol: boolean;
    readonly noneProtocol: boolean;

    readonly systemName?: string;
    readonly accountName?: string;

    readonly indexPage?: string;
    readonly entryPage?: string;
} & PartialTargetInfo;

export interface IInfoStore {

    readonly target: TargetInfo;
}

export interface ISetTargetReducerAction extends Action<ACTIONS.SET_TARGET> {

    readonly target: TargetInfo;
}
