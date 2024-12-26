import { isAxiosError } from "axios";
import api from "../../../lib/axios";

export async function getCapitulos(){
    try {
        const { data } = await api("/capitulos");
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export async function getCapitulo(queryKey){
    console.log(queryKey);
    try {
        const { data } = await api(`/capitulos/${queryKey}`);
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export async function postCapitulo(formData){
    try {
        const { data } = await api.post(`/capitulos`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function putCapitulo(formData){
    try {
        const { data } = await api.put(`/capitulos/${formData.id}`, formData);
        return data;
    } catch (error) {
        console.error(error);
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}