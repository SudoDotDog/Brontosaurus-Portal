/**
 * @author WMXPY
 * @namespace Portal_State
 * @description Store
 */

import { IStore } from './declare';
import { getDefaultFormStore } from './form/form';


export const PortalStore: IStore = {

    form: getDefaultFormStore(),
};

// export const getStore = (): Store<IStore> => SudooRedux.create<IStore, ACTIONS>(PortalStore);
