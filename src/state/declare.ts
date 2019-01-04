/**
 * @author WMXPY
 * @namespace Portal_State
 * @description Declare
 */

import { IFormStore } from "./form/type";
import { IInfoStore } from "./info/type";
import { IStatusStore } from "./status/type";

export interface IStore {

    readonly form: IFormStore;
    readonly status: IStatusStore;
    readonly info: IInfoStore;
}

export enum ACTIONS {

    // form
    SET_USERNAME = 'SET_USERNAME',
    SET_PASSWORD = 'SET_PASSWORD',

    // status
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',

    // info
    SET_TARGET = 'SET_TARGET',
}
