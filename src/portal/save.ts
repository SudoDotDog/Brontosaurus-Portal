/**
 * @author WMXPY
 * @namespace Portal
 * @description Save
 */

export const saveUsername = (username: string): void => {

    localStorage.setItem('Brontosaurus_Saved_Username', username);
    return;
};

export const readUsername = (): string | null => {

    return localStorage.getItem('Brontosaurus_Saved_Username');
};

export const clearUsername = (): void => {

    localStorage.removeItem('Brontosaurus_Saved_Username');
    return;
};
