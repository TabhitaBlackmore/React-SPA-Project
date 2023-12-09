import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, password, username, imageUrl, description) => request.post(`${baseUrl}/register`, {
    email,
    password,
    username,
    imageUrl,
    description,
});

export const logout = () => request.get(`${baseUrl}/logout`);

export const getOneProfile = () => {
    const result = request.get(`${baseUrl}/me`)

    return result
}