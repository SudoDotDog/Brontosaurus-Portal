/**
 * @author WMXPY
 * @namespace State_Preference
 * @description Reducer
 */

import { LOCALE } from '@sudoo/internationalization';
import { Reducer } from '@sudoo/redux';
import { logSecurityContent } from '../../i18n/log';
import { ACTIONS, IStore } from '../declare';
import { defaultLanguage, ISetLanguageReducerAction, ISetSaveUsernameReducerAction, PreferenceStore } from './type';

const PREFERENCE_STORAGE_KEY: string = 'Brontosaurus_Preference';

const reduceLanguage: Reducer<IStore, ISetLanguageReducerAction> = (state: IStore | undefined, action: ISetLanguageReducerAction): IStore => {

    const newPreference: PreferenceStore = {
        ...(state as IStore).preference,
        language: action.language,
    };

    localStorage.setItem(PREFERENCE_STORAGE_KEY, JSON.stringify(newPreference));
    logSecurityContent(action.language);

    return {
        ...state as IStore,
        preference: newPreference,
    };
};

const reduceSaveUsername: Reducer<IStore, ISetSaveUsernameReducerAction> = (state: IStore | undefined, action: ISetSaveUsernameReducerAction): IStore => {

    const newPreference: PreferenceStore = {
        ...(state as IStore).preference,
        saveUsername: action.saveUsername,
    };

    localStorage.setItem(PREFERENCE_STORAGE_KEY, JSON.stringify(newPreference));
    return {
        ...state as IStore,
        preference: newPreference,
    };
};

export const preferenceReducers = {

    [ACTIONS.SET_LANGUAGE]: reduceLanguage,
    [ACTIONS.SET_SAVE_USERNAME]: reduceSaveUsername,
};

export const setLanguage = (language: LOCALE): ISetLanguageReducerAction => ({

    type: ACTIONS.SET_LANGUAGE,
    language,
});

export const setSaveUsername = (saveUsername: boolean): ISetSaveUsernameReducerAction => ({

    type: ACTIONS.SET_SAVE_USERNAME,
    saveUsername,
});

export const getDefaultPreference = (): PreferenceStore => {

    const item: string | null = localStorage.getItem(PREFERENCE_STORAGE_KEY);

    if (!item) {

        logSecurityContent(defaultLanguage);
        return {
            language: defaultLanguage,
            saveUsername: false,
        };
    }

    const parsed: any = JSON.parse(item);

    const preference: PreferenceStore = {
        language: parsed.language || defaultLanguage,
        saveUsername: parsed.saveUsername || false,
    };
    logSecurityContent(preference.language);

    return preference;
};
