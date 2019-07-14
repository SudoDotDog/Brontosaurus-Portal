/**
 * @author WMXPY
 * @namespace State_Preference
 * @description Type
 */

import { LOCALE } from "@sudoo/internationalization";
import { Action } from "@sudoo/redux";
import { ACTIONS } from "../declare";

export const defaultLanguage: LOCALE = LOCALE.ENGLISH_UNITED_STATES;

export type PreferenceStore = {

    readonly language: LOCALE;
    readonly saveUsername: boolean;
};

export interface ISetLanguageReducerAction extends Action<ACTIONS.SET_LANGUAGE> {

    readonly language: LOCALE;
}

export interface ISetSaveUsernameReducerAction extends Action<ACTIONS.SET_SAVE_USERNAME> {

    readonly saveUsername: boolean;
}
