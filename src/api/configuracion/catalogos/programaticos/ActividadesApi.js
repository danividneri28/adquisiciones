import { isAxiosError } from "axios";
import api from "../../../../lib/axios";


export async function getActividades() {
    try {
        const url = '/catalogos/programaticos/actividades';
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function getActividad(id) {
    try {
        const url = `/catalogos/programaticos/actividades/${id}`;
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function crearActividad(data) {
    try {
        const url = '/catalogos/programaticos/actividades';
        const response = await api.post(url, data);

        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function getProyectosDisponibles(id_proyecto) {
    try {
        const url = `/catalogos/programaticos/actividades/proyectos/disponibles/${id_proyecto}`;
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function editarActividad(data) {
    try {
        const url = `/catalogos/programaticos/actividades/${data.id}`;
        const response = await api.put(url, data);

        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}