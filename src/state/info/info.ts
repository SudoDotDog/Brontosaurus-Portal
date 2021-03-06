/**
 * @author WMXPY
 * @namespace Portal_State_Info
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { IInfoStore, ISetTargetReducerAction, TargetInfo } from './type';

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

export const setTarget = (target: TargetInfo): ISetTargetReducerAction => ({

    type: ACTIONS.SET_TARGET,
    target,
});

export const getDefaultInfoStore = (): IInfoStore => ({

    target: {
        timeout: false,
        applicationIssue: false,
        name: '',
        redirections: [],
        iFrameProtocol: false,
        postProtocol: false,
        alertProtocol: false,
        noneProtocol: false,
    },
});
