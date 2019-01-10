/**
 * @author WMXPY
 * @namespace Portal_State_Form
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { IFormStore, ISetFormPasswordReducerAction, ISetFormUsernameReducerAction } from './type';

const reduceUsername: Reducer<IStore, ISetFormUsernameReducerAction> = (state: IStore | undefined, action: ISetFormUsernameReducerAction): IStore => ({

    ...state as IStore,
    form: {

        ...(state as IStore).form,
        username: action.username,
    },
});

const reducePassword: Reducer<IStore, ISetFormPasswordReducerAction> = (state: IStore | undefined, action: ISetFormPasswordReducerAction): IStore => ({

    ...state as IStore,
    form: {

        ...(state as IStore).form,
        password: action.password,
    },
});

export const formReducers = {

    [ACTIONS.SET_USERNAME]: reduceUsername,
    [ACTIONS.SET_PASSWORD]: reducePassword,
};

export const setUsername = (username: string): ISetFormUsernameReducerAction => ({

    type: ACTIONS.SET_USERNAME,
    username,
});

export const setPassword = (password: string): ISetFormPasswordReducerAction => ({

    type: ACTIONS.SET_PASSWORD,
    password,
});

export const getDefaultFormStore = (): IFormStore => ({

    username: 'hello',
    password: 'world',
});