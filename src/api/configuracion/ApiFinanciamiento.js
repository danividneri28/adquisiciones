import { isAxiosError } from "axios";
import api from "../../lib/axios";


export async function getFinanciamientos() {
    try {
        const url = '/fuentes_financiamiento';
        const { data } = await api.get(url);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function createFuenteFinanciamiento(formData) {
    try {
        const url = '/fuentes_financiamiento';
        const { data } = await api.post(url, formData);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function getFuenteFinanciamiento(id) {
    try {
        const url = `/fuentes_financiamiento/${id}`;
        const { data } = await api.get(url);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}

export async function editarFinanciamiento(formData) {
    try {
        const url = `/fuentes_financiamiento/${formData.id}`;
        const { data } = await api.put(url, formData);
        
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}