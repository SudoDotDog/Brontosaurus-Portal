/**
 * @author WMXPY
 * @namespace Repository
 * @description Login
 */

export const login = async (username: string, password: string, applicationKey: string): Promise<string> => {

    try {
        const data = await fetch('http://localhost:8080/retrieve', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "error", // manual, *follow, error
            referrer: "no-referrer",
            body: JSON.stringify({
                username,
                password,
                applicationKey,
            }),
        }).then((response) => response.json());

        console.log(data);
        return '';
    } catch (err) {
        console.log(err);
    }

    return '';
};
