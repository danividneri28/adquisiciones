import { isAxiosError } from "axios";
import api from "../../lib/axios";

export async function getSubfunciones({ queryKey }) {
  try {
    const { data } = await api(`/subfuncion/index${queryKey[1] ? '/'+queryKey[1]:''}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function getSubfuncion({ queryKey }) {
  try {
    const { data } = await api(`/subfuncion/${queryKey[1]}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function postSubfuncion(formData) {
  try {
    const { data } = await api.post("/subfuncion", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function putSubfuncion(formData) {
  try {
    const { data } = await api.put(
      `/subfuncion/${formData.id_subfuncion}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
