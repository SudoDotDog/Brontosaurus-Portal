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
}

export interface IPageStore {

    readonly page: PAGE;
}

export interface ISetPageReducerAction extends Action<ACTIONS.SET_PAGE> {

    readonly page: PAGE;
}
