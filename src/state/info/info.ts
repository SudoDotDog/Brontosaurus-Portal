/**
 * @author WMXPY
 * @namespace Portal_State_Info
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { IInfoStore, ISetTargetReducerAction, ITarget } from './type';

const reduceTarget: Reducer<IStore, ISetTargetReducerAction> = (state: IStore | undefined, action: ISetTargetReducerAction): IStore => ({

    ...state as IStore,
    info: {

        ...(state as IStore).info,
        target: action.target,
    },
});

export const infoReducers = {

    [ACTIONS.SET_TARGET]: reduceTarget,
};

export const setTarget = (target: ITarget): ISetTargetReducerAction => ({

    type: ACTIONS.SET_TARGET,
    target,
});

export const getDefaultInfoStore = (): IInfoStore => ({

    target: {
        image: '',
        logo: '',
        application: '',
    },
});
