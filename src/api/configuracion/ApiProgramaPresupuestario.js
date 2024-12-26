import { isAxiosError } from "axios";
import api from "../../lib/axios";

export async function obtenerProgramasPresupuestarios() {
    try {
        const url = '/configuracion/presupuestario';
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function crearProgramaPresupuestario(formData) {
    try {
        const url = '/configuracion/presupuestario';
        const { data } = await api.post(url, formData);

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}
export async function ObtenerPresupuestario(id) {
    try {
        const url = `/configuracion/presupuestario/${id}`;
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function editarProgramaPresupuestario(formData) {
    try {
        const url = `/configuracion/presupuestario/${formData.id}`;
        const { data } = await api.put(url, formData);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}
