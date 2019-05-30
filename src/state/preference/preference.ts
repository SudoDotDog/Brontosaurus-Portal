/**
 * @author WMXPY
 * @namespace State_Preference
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { ISetLanguageReducerAction, LANGUAGE, PreferenceStore } from './type';

const reduceLanguage: Reducer<IStore, ISetLanguageReducerAction> = (state: IStore | undefined, action: ISetLanguageReducerAction): IStore => {

    const newPreference: PreferenceStore = {
        ...(state as IStore).preference,
        language: action.language,
    };

    localStorage.setItem('Brontosaurus_Preference', JSON.stringify(newPreference));
    return {
        ...state as IStore,
        preference: newPreference,
    };
};

export const preferenceReducers = {

    [ACTIONS.SET_LANGUAGE]: reduceLanguage,
};

export const setLanguage = (language: LANGUAGE): ISetLanguageReducerAction => ({

    type: ACTIONS.SET_LANGUAGE,
    language,
});

export const getDefaultPreference = (): PreferenceStore => {

    const item: string | null = localStorage.getItem('Brontosaurus_Preference');

    if (!item) {
        return {
            language: LANGUAGE.UNITED_STATES_ENGLISH,
        };
    }

    const preference: PreferenceStore = JSON.parse(item);
    return preference;
};
