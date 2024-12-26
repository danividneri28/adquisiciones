import axios from "axios";
import api from "../../lib/axios";
// import { isAxiosError } from "axios";



//---------------- obtener partidas--------------------------------
export async function obtenerPartidasEspecificas() {
  try {
    const { data } = await api.get("configuracion/partidas_especificas");
    return data;
  } catch (error) {
    console.error("Error al obtener partidas genéricas:", error);
    throw new Error("No se pudo cargar las partidas genéricas.");
  }
}


export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Si usas autenticación
    },
  });
  
