import { useQuery } from "@tanstack/react-query";
import { getTipoActividad } from "../api/catalogosApi";

export const useTipoActividad = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getTipoActividad"],
        queryFn: getTipoActividad,
    });
    
    return { data, isError, isLoading };
}