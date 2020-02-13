/**
 * @author WMXPY
 * @namespace Portal_State_Form
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { IFormStore, ISetFormPasswordReducerAction, ISetFormResetTokenReducerAction, ISetFormUsernameReducerAction } from './type';

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

const reduceResetToken: Reducer<IStore, ISetFormResetTokenReducerAction> = (state: IStore | undefined, action: ISetFormResetTokenReducerAction): IStore => ({

    ...state as IStore,
    form: {

        ...(state as IStore).form,
        resetToken: action.resetToken,
    },
});

export const formReducers = {

    [ACTIONS.SET_USERNAME]: reduceUsername,
    [ACTIONS.SET_PASSWORD]: reducePassword,
    [ACTIONS.SET_RESET_TOKEN]: reduceResetToken,
};

export const setUsername = (username: string): ISetFormUsernameReducerAction => ({

    type: ACTIONS.SET_USERNAME,
    username,
});

export const setPassword = (password: string): ISetFormPasswordReducerAction => ({

    type: ACTIONS.SET_PASSWORD,
    password,
});

export const setResetToken = (resetToken: string): ISetFormResetTokenReducerAction => ({

    type: ACTIONS.SET_RESET_TOKEN,
    resetToken,
});

export const getDefaultFormStore = (): IFormStore => ({

    username: '',
    password: '',
    resetToken: '',
});
