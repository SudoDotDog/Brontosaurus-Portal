/**
 * @author WMXPY
 * @namespace Portal_State_Form
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export interface IFormStore {

    readonly username: string;
    readonly password: string;
}

export interface ISetFormUserPassReducerAction extends Action<ACTIONS.SET_USERNAME_AND_PASSWORD> {

    readonly username: string;
    readonly password: string;
}
