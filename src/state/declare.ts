/**
 * @author WMXPY
 * @namespace Portal_State
 * @description Declare
 */

import { IFormStore } from "./form/type";
import { IStatusStore } from "./status/type";

export interface IStore {

    readonly form: IFormStore;
    readonly status: IStatusStore;
}

export enum ACTIONS {

    // form
    SET_USERNAME = 'SET_USERNAME',
    SET_PASSWORD = 'SET_PASSWORD',

    // status
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
}
