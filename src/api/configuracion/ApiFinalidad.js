import { isAxiosError } from "axios";
import api from "../../lib/axios";

export async function getFinalidades({ queryKey }) {
  try {
    const { data } = await api(`/finalidad/index${queryKey[1] ? '/'+queryKey[1]:''}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function getFinalidad({ queryKey }) {
  try {
    const { data } = await api(`/finalidad/${queryKey[1]}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function postFinalidad(formData) {
  try {
    const { data } = await api.post("/finalidad", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
export async function putFinalidad(formData) {
  try {
    const { data } = await api.put(
      `/finalidad/${formData.id_finalidad}`,
      formData
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) throw error.response.data;
  }
}
