/**
 * @author WMXPY
 * @namespace Repository
 * @description Login
 */

export const login = async (username: string, password: string, applicationKey: string): Promise<string> => {

    const payload: string = JSON.stringify({
        username,
        password,
        applicationKey,
    });

    console.log(payload);

    const data = await fetch('http://localhost:8080/retrieve', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: "cors",
        body: payload,
    });

    console.log(1, await data.text());
    return '';
};
