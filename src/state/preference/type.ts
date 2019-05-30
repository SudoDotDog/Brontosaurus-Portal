/**
 * @author WMXPY
 * @namespace State_Preference
 * @description Type
 */

import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export enum LANGUAGE {

    SIMPLIFY_CHINESE = "ZH_CN",
    UNITED_STATES_ENGLISH = "EN_US",
    SPANISH_MEXICO = "ES_MX",
}

export type PreferenceStore = {

    readonly language: LANGUAGE;
};

export interface ISetLanguageReducerAction extends Action<ACTIONS.SET_LANGUAGE> {

    readonly language: LANGUAGE;
}
