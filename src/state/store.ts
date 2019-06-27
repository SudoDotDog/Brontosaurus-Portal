/**
 * @author WMXPY
 * @namespace Portal_State
 * @description Store
 */

import { Redux } from '@sudoo/redux';
import { ACTIONS, IStore } from './declare';
import { formReducers, getDefaultFormStore } from './form/form';
import { getDefaultInfoStore, infoReducers } from './info/info';
import { getDefaultPageStore, pageReducers } from './page/page';
import { getDefaultPreference, preferenceReducers } from './preference/preference';
import { getDefaultStatusStore, statusReducers } from './status/status';

export const PortalStore: IStore = {

    page: getDefaultPageStore(),
    form: getDefaultFormStore(),
    status: getDefaultStatusStore(),
    info: getDefaultInfoStore(),
    preference: getDefaultPreference(),
};


export const redux: Redux<IStore, ACTIONS> =
    Redux.create<IStore, ACTIONS>(PortalStore)
        .reducers(pageReducers)
        .reducers(formReducers)
        .reducers(statusReducers)
        .reducers(infoReducers)
        .reducers(preferenceReducers);
