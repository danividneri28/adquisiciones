import api from "../../lib/axios";

export async function getEntidad_federativa() {
  try {
    const { data } = await api("/entidad_federativa");
    return data;
  } catch (error) {
    return error.response.data;
  }
}
