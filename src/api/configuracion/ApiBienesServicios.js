import { isAxiosError } from "axios";
import api from "../../lib/axios";


export async function getBienesServicios() {
    try {
        const url = '/bienes_servicios';
        const { data } = await api.get(url);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function createBienServicio(formData) {
    try {
        console.log(formData)
        const url = '/bienes_servicios';
        const { data } = await api.post(url, formData);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function getBienServicio(id) {
    try {
        const url = `/bienes_servicios/${id}`;
        const { data } = await api.get(url);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function editarBienServicio(formData) {
    try {
        const url = `/bienes_servicios/${formData.id}`;
        const { data } = await api.put(url, formData);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function Capitulos() {
    try {
        const url = '/capitulos';
        const {data} = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function SubCapitulos(id_capitulo) {
    try {
        const url = `/subcapitulos/${id_capitulo}`;
        const {data} = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function generica(id_subcapitulo) {
    try {
        const url = `/genericas/${id_subcapitulo}`;
        const {data} = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function especifica(id_partida_g) {
    try {
        const url = `/especificas/${id_partida_g}`;
        const {data} = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}