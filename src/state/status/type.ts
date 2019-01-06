/**
 * @author WMXPY
 * @namespace Portal_State_Status
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export type ErrorInfo = {

    short: string;
    long: string;
};

export interface IStatusStore {

    readonly loading: string | null;
    readonly error: ErrorInfo | null;
}

export interface ISetLoadingReducerAction extends Action<ACTIONS.SET_LOADING> {

    readonly loading: string | null;
}

export interface ISetErrorReducerAction extends Action<ACTIONS.SET_ERROR> {

    readonly error: ErrorInfo | null;
}
