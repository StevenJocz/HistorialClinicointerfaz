const baseUrl = 'http://localhost:5214/api/';
const characterUrl = baseUrl + 'Login/login';

export const getIniciar = (userEmail: string, userPassword: string) => {
    const url = characterUrl;
    const body = JSON.stringify({ userEmail, userPassword });

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    }).then(res => res.json());
};