import { useQuery } from "@tanstack/react-query";
import { getProyectosDisponibles } from "../api/configuracion/catalogos/programaticos/ActividadesApi";

export const useProyectosDisponibles = (id_proyecto) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['proyectosDisponibles', id_proyecto],
        queryFn: () => getProyectosDisponibles(id_proyecto),
    });
    
    return { data, isError, isLoading };
}