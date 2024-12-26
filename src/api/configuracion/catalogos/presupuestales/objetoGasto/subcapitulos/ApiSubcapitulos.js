import { isAxiosError } from "axios";
import api from "../../../../../../lib/axios";

export async function getSubcapitulos() {
    try {
        const { data } = await api("/subcapitulos");
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export async function getSubcapitulo(queryKey) {
    try {
        const { data } = await api(`/subcapitulos/${queryKey}`);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export async function postSubcapitulo(formData) {
    try {
        const { data } = await api.post(`/subcapitulos`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function putSubcapitulo(formData) {
    try {
        const { data } = await api.put(`/subcapitulos/${formData.id}`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}