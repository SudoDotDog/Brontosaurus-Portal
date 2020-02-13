/**
 * @author WMXPY
 * @namespace Portal_State_Form
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export interface IFormStore {

    readonly username: string;
    readonly resetToken: string;
    readonly password: string;
}

export interface ISetFormUsernameReducerAction extends Action<ACTIONS.SET_USERNAME> {

    readonly username: string;
}

export interface ISetFormPasswordReducerAction extends Action<ACTIONS.SET_PASSWORD> {

    readonly password: string;
}

export interface ISetFormResetTokenReducerAction extends Action<ACTIONS.SET_RESET_TOKEN> {

    readonly resetToken: string;
}
