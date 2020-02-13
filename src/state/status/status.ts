/**
 * @author WMXPY
 * @namespace Portal_State_Status
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { ErrorInfo, ISetErrorReducerAction, ISetLoadingReducerAction, ISetSucceedReducerAction, IStatusStore } from './type';

const reduceLoadingStatus: Reducer<IStore, ISetLoadingReducerAction> = (state: IStore | undefined, action: ISetLoadingReducerAction): IStore => ({

    ...state as IStore,
    status: {

        ...(state as IStore).status,
        loading: action.loading,
    },
});

const reduceErrorStatus: Reducer<IStore, ISetErrorReducerAction> = (state: IStore | undefined, action: ISetErrorReducerAction): IStore => ({

    ...state as IStore,
    status: {

        ...(state as IStore).status,
        error: action.error,
    },
});

const reduceSucceedStatus: Reducer<IStore, ISetSucceedReducerAction> = (state: IStore | undefined, action: ISetSucceedReducerAction): IStore => ({

    ...state as IStore,
    status: {

        ...(state as IStore).status,
        succeed: action.succeed,
    },
});

export const statusReducers = {

    [ACTIONS.SET_ERROR]: reduceErrorStatus,
    [ACTIONS.SET_LOADING]: reduceLoadingStatus,
    [ACTIONS.SET_SUCCEED]: reduceSucceedStatus,
};

export const startLoading = (message: string): ISetLoadingReducerAction => ({

    type: ACTIONS.SET_LOADING,
    loading: message,
});

export const clearLoading = (): ISetLoadingReducerAction => ({

    type: ACTIONS.SET_LOADING,
    loading: null,
});

export const startError = (info: ErrorInfo): ISetErrorReducerAction => ({

    type: ACTIONS.SET_ERROR,
    error: info,
});

export const clearError = (): ISetErrorReducerAction => ({

    type: ACTIONS.SET_ERROR,
    error: null,
});

export const startSucceed = (info: ErrorInfo): ISetSucceedReducerAction => ({

    type: ACTIONS.SET_SUCCEED,
    succeed: info,
});

export const clearSucceed = (): ISetSucceedReducerAction => ({

    type: ACTIONS.SET_SUCCEED,
    succeed: null,
});

export const getDefaultStatusStore = (): IStatusStore => ({

    loading: null,
    error: null,
    succeed: null,
});
