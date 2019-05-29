/**
 * @author WMXPY
 * @namespace Portal_State_Info
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export interface ITarget {

    readonly application: string;
    readonly logo?: string;
    readonly image?: string;
    readonly help?: string;
}

export interface IInfoStore {

    readonly target: ITarget;
}

export interface ISetTargetReducerAction extends Action<ACTIONS.SET_TARGET> {

    readonly target: ITarget;
}
