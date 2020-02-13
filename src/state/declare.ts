/**
 * @author WMXPY
 * @namespace Portal_State
 * @description Declare
 */

import { IFormStore } from "./form/type";
import { IInfoStore } from "./info/type";
import { IPageStore } from "./page/type";
import { PreferenceStore } from "./preference/type";
import { IStatusStore } from "./status/type";

export interface IStore {

    readonly form: IFormStore;
    readonly page: IPageStore;
    readonly status: IStatusStore;
    readonly preference: PreferenceStore;
    readonly info: IInfoStore;
}

export enum ACTIONS {

    // form
    SET_USERNAME = 'SET_USERNAME',
    SET_PASSWORD = 'SET_PASSWORD',
    SET_RESET_TOKEN = 'SET_RESET_TOKEN',

    // status
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',

    // info
    SET_TARGET = 'SET_TARGET',

    // preference
    SET_LANGUAGE = 'SET_LANGUAGE',
    SET_SAVE_USERNAME = 'SET_SAVE_USERNAME',

    // page
    SET_PAGE = 'SET_PAGE',
}
