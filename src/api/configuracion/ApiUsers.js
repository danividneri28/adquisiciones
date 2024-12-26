import { isAxiosError } from "axios";
import api from "../../lib/axios";


export async function obtenerUsuarios() {
    try {
        const url = '/configuracion/usuarios';
        const { data } = await api.get(url);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function obtenerUsuario(id) {
    try {
        const url = `/configuracion/usuario/${id}`;
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function crearUsuario(formData) {
    try {
        const url = '/configuracion/usuario';
        const { data } = await api.post(url, formData);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function editarUsuario(formData) {
    try {
        const url = `/configuracion/usuario/${formData.id}`;
        const { data } = await api.put(url, formData);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}