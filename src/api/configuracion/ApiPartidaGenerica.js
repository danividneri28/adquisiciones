import axios from "axios";
import api from "../../lib/axios";
import { isAxiosError } from "axios";



//---------------- obtener partidas--------------------------------
export async function obtenerPartidasGenericas() {
  try {
    const { data } = await api.get("configuracion/partidas_genericas");
    return data;
  } catch (error) {
    console.error("Error al obtener partidas genéricas:", error);
    throw new Error("No se pudo cargar las partidas genéricas.");
  }
}

// ---------------- crear partidas--------------------------------
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Si usas autenticación
  },
});


// -------------------------------editar partidas--------------------------------
  export async function getGenerica(id){
    try {
      const url = `configuracion/partida_generica/${id}`;
      const { data } = await api.get(url);    
      return data;  
    } catch (error) {
      if (isAxiosError(error) && error.response) {
          throw new Error(error.response.data.error);
      }
  }
  }

  export async function editarGenerica(formData) {
    try {
      const url = `/configuracion/partida_generica/${formData.id}`;
      const { data } = await api.put(url, formData); // Enviar datos modificados
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        console.error("Error al editar partida genérica:", error.response.data);
        throw new Error(error.response.data.error);
      }
      throw new Error("Error desconocido al editar la partida genérica.");
    }
  }

// ----------------------------------------------------------------
// ----------------------------------------------------------------


