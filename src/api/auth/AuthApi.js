import { isAxiosError } from "axios";
import api from "../../lib/axios";

export async function authenticateUser(formData) {
    try {
        const url = '/auth/login';
        const { data } = await api.post(url, formData);
        localStorage.setItem('AUTH_TOKEN', data.data.token);   
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUser() {
    try {
        const url = '/auth/user';
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}