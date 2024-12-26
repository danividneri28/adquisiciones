import { isAxiosError } from "axios";
import api from "../../../../lib/axios";

export async function getTipoGastos() {
    try {
        const { data } = await api("/tipo_gasto");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response)
        return error.response.data.error;
    }
}
export async function postTipoGasto(formData) {
    try {
      const { data } = await api.post("/tipo_gasto", formData);
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }

  export async function getTipoGasto(id_tipo_gasto) {
    try {
        const { data } = await api.get(`/tipo_gasto/${id_tipo_gasto}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function editarGasto(formData) {
    try {
        const { data } = await api.put(`/tipo_gasto/${formData.id}`, formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw error.response.data;
        }
    }
}