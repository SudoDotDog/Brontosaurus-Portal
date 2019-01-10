/**
 * @author WMXPY
 * @namespace Portal_State
 * @description Store
 */

import { Store, SudooRedux } from '@sudoo/redux';
import { ACTIONS, IStore } from './declare';
import { formReducers, getDefaultFormStore } from './form/form';
import { getDefaultInfoStore, infoReducers } from './info/info';
import { getDefaultStatusStore, statusReducers } from './status/status';

export const PortalStore: IStore = {

    form: getDefaultFormStore(),
    status: getDefaultStatusStore(),
    info: getDefaultInfoStore(),
};

export const getStore = (): Store<IStore> =>
    SudooRedux.create<IStore, ACTIONS>(PortalStore)
        .reducers(formReducers)
        .reducers(statusReducers)
        .reducers(infoReducers)
        .createStore();