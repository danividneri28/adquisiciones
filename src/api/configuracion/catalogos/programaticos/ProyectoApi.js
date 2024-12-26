import { isAxiosError } from "axios";
import api from "../../../../lib/axios";

export async function obtenerProyectos() {
    try {
        const url = '/catalogos/programaticos/proyectos';
        const { data } = await api.get(url);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function crearProyecto(formData) {
    try {
        const url = '/catalogos/programaticos/proyectos';
        const { data } = await api.post(url, formData);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function obtenerProyecto(id) {
    try {
        const url = `/catalogos/programaticos/proyectos/${id}`;
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function editarProyecto(formData) {
    try {
        const url = `/catalogos/programaticos/proyectos/${formData.id}`;
        const { data } = await api.put(url, formData);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}