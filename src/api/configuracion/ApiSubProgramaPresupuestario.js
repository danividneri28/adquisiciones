import { isAxiosError } from "axios";
import api from "../../lib/axios";

export async function crearSubProgramaPresupuestario(formData) {
  try {
      const url = '/configuracion/subProgramaP';
      const { data } = await api.post(url, formData);

  } catch (error) {
      if (isAxiosError(error) && error.response) {
          throw error.response.data;
      }
  }
}
export async function getProgramasPresupuestarios() {
  try {
      const url = '/configuracion/programas_presupuestarios';
      const { data } = await api.get(url);
    return data
  } catch (error) {
      if (isAxiosError(error) && error.response) {
          throw error.response.data;
      }
  }
}

export async function ObtenerSubPresupuestario(id) {
  try {
      const url = `/configuracion/subProgramaP/${id}`;
      const { data } = await api.get(url);

      return data;
  } catch (error) {
      if (isAxiosError(error) && error.response) {
          throw error.response.data;
      }
  }
}

export async function getSubProgramas() {
  try {
      const url = '/configuracion/subProgramaP';
      const { data } = await api.get(url);
    return data
  } catch (error) {
      if (isAxiosError(error) && error.response) {
          throw error.response.data;
      }
  }
}


export async function editarSubProgramaPresupuestario(formData) {
  try {
      const url = `/configuracion/subProgramaP/${formData.id}`;
      const { data } = await api.put(url, formData);

      return data;
  } catch (error) {
      if (isAxiosError(error) && error.response) {
          throw error.response.data;
      }
  }
}