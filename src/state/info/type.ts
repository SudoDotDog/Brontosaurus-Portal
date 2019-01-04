/**
 * @author WMXPY
 * @namespace Portal_State_Info
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export interface ITarget {

    readonly logo: string;
    readonly image: string;
    readonly application: string;
}

export interface IInfoStore {

    readonly target: ITarget;
}

export interface ISetTargetReducerAction extends Action<ACTIONS.SET_TARGET> {

    readonly target: ITarget;
}
