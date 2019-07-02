/**
 * @author WMXPY
 * @namespace Portal_State_Info
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export type TargetInfo = {

    readonly name: string;
    readonly avatar?: string;
    readonly background?: string;
    readonly help?: string;
    readonly privacy?: string;

    readonly systemName?: string;
    readonly accountName?: string;
};

export interface IInfoStore {

    readonly target: TargetInfo;
}

export interface ISetTargetReducerAction extends Action<ACTIONS.SET_TARGET> {

    readonly target: TargetInfo;
}
