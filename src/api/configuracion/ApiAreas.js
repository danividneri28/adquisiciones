import { isAxiosError } from "axios";
import api from "../../lib/axios";

export async function getAreas() {
  try {
    const { data } = await api("/areas");
    return data;
  } catch (error) {
    return error.response.data;
  }
}
export async function getArea({queryKey}) {
  try {
    const { data } = await api(`/areas/${queryKey[1]}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
}
export async function getAreaUsers({queryKey}) {
  try {
    const { data } = await api(`/areas/users/${queryKey[1]}`);
    return data;
  } catch (error) {
    return error.response.data;
  }
}
export async function postAreas(formData) {
  try {
    const { data } = await api.post("/areas", formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
}
export async function putAreas(formData) {
  try {
    const { data } = await api.put(`/areas/${formData.id}`, formData);
    return data;
  } catch (error) {
    throw error.response.data;
  }
}
