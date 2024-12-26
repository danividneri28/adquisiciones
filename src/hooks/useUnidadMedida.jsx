import { useQuery } from "@tanstack/react-query";
import { getUnidadesMedida } from "../api/catalogosApi";

export const useUnidadMedida = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getUnidadesMedida"],
        queryFn: getUnidadesMedida,
    });
    
    return { data, isError, isLoading };
}