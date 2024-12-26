import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function getTipoActividad() {
    try {
        const url = '/tipo-actividad';
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function getUnidadesMedida() {
    try {
        const url = '/unidades-de-medida';
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}