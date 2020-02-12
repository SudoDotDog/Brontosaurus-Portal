/**
 * @author WMXPY
 * @namespace Portal_State_Page
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export enum PAGE {

    LOGIN = "LOGIN",
    LIMBO = "LIMBO",
    TWOFA = "TWOFA",
    HELP = "HELP",
    RESET_PASSWORD_TEMPORARY = "RESET_PASSWORD_TEMPORARY",
    RESET_PASSWORD_RESET = "RESET_PASSWORD_RESET",
}

export interface IPageStore {

    readonly page: PAGE;
}

export interface ISetPageReducerAction extends Action<ACTIONS.SET_PAGE> {

    readonly page: PAGE;
}
