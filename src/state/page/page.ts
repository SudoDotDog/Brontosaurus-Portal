/**
 * @author WMXPY
 * @namespace Portal_State_Page
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { IPageStore, ISetPageReducerAction, PAGE } from "./type";

const reducePage: Reducer<IStore, ISetPageReducerAction> = (state: IStore | undefined, action: ISetPageReducerAction): IStore => ({

    ...state as IStore,
    page: {

        ...(state as IStore).status,
        page: action.page,
    },
});

export const pageReducers = {

    [ACTIONS.SET_PAGE]: reducePage,
};

export const setPage = (page: PAGE): ISetPageReducerAction => ({

    type: ACTIONS.SET_PAGE,
    page,
});

export const getDefaultPageStore = (): IPageStore => ({

    page: PAGE.LOGIN,
});
