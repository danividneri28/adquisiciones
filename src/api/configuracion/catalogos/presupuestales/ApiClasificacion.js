import { isAxiosError } from "axios";
import api from "../../../../lib/axios";

export async function obtenerClasificaciones() {
    try {
        const { data } = await api('/clasificacion_funcional');
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export async function crearClasificacion(formData) {
    try {
        const { data } = await api.post('/clasificacion_funcional', formData);
        return data;
    } catch (error) {
        throw error.response.data;
    }
}

export async function obtenerClasificacion(id_c_funcional) {
    try {
        const { data } = await api.get(`/clasificacion_funcional/${id_c_funcional}`); 
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function editarClasificacion(formData) {
    try {
        const { data } = await api.put(`/clasificacion_funcional/${formData.id}`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}
