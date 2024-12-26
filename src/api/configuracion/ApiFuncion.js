import { isAxiosError } from "axios";
import api from "../../lib/axios";

export async function getFunciones({ queryKey }) {
  try {
    const { data } = await api(`/funcion/index${queryKey[1] ? '/'+queryKey[1]:''}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function getFuncion({ queryKey }) {
  try {
    const { data } = await api(`/funcion/${queryKey[1]}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function postFuncion(formData) {
  try {
    const { data } = await api.post("/funcion", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function putFuncion(formData) {
  try {
    const { data } = await api.put(`/funcion/${formData.id_funcion}`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
