/**
 * @author WMXPY
 * @namespace Portal_State_Form
 * @description Reducer
 */

import { Reducer } from '@sudoo/redux';
import { ACTIONS, IStore } from '../declare';
import { BRONTOSAURUS_NAMESPACE, IFormStore, ISetFormNamespaceReducerAction, ISetFormPasswordReducerAction, ISetFormResetTokenReducerAction, ISetFormUsernameAndNamespaceReducerAction, ISetFormUsernameReducerAction } from './type';

const reduceUsername: Reducer<IStore, ISetFormUsernameReducerAction> = (state: IStore | undefined, action: ISetFormUsernameReducerAction): IStore => ({

    ...state as IStore,
    form: {

        ...(state as IStore).form,
        username: action.username,
    },
});

const reduceNamespace: Reducer<IStore, ISetFormNamespaceReducerAction> = (state: IStore | undefined, action: ISetFormNamespaceReducerAction): IStore => ({

    ...state as IStore,
    form: {

        ...(state as IStore).form,
        namespace: action.namespace,
    },
});

const reduceUsernameAndNamespace: Reducer<IStore, ISetFormUsernameAndNamespaceReducerAction> = (state: IStore | undefined, action: ISetFormUsernameAndNamespaceReducerAction): IStore => {

    if (!state) {
        return state as any as IStore;
    }

    const combined: string = action.combined;
    const splited: string[] = combined.split('/');

    if (splited.length === 1) {

        if (state.form.namespace === BRONTOSAURUS_NAMESPACE.DEFAULT) {
            return {
                ...state,
                form: {
                    ...(state).form,
                    username: combined,
                },
            };
        }
        return {
            ...state,
            form: {
                ...(state).form,
                namespace: BRONTOSAURUS_NAMESPACE.DEFAULT,
                username: combined,
            },
        };
    }

    if (splited.length !== 2) {
        return state;
    }
    return {
        ...state,
        form: {
            ...(state).form,
            namespace: splited[0],
            username: splited[1],
        },
    };
};

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
    [ACTIONS.SET_NAMESPACE]: reduceNamespace,
    [ACTIONS.SET_USERNAME_AND_NAMESPACE]: reduceUsernameAndNamespace,
    [ACTIONS.SET_PASSWORD]: reducePassword,
    [ACTIONS.SET_RESET_TOKEN]: reduceResetToken,
};

export const setUsername = (username: string): ISetFormUsernameReducerAction => ({

    type: ACTIONS.SET_USERNAME,
    username,
});

export const setNamespace = (namespace: string): ISetFormNamespaceReducerAction => ({

    type: ACTIONS.SET_NAMESPACE,
    namespace,
});

export const setUsernameAndNamespace = (combined: string): ISetFormUsernameAndNamespaceReducerAction => ({

    type: ACTIONS.SET_USERNAME_AND_NAMESPACE,
    combined,
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
    namespace: BRONTOSAURUS_NAMESPACE.DEFAULT,
    password: '',
    resetToken: '',
});
