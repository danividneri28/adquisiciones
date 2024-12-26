import { useQuery } from "@tanstack/react-query";
import { Capitulos } from "../../api/configuracion/ApiBienesServicios";

export const useCapitulo = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["Capitulos"],
        queryFn: Capitulos,
    });
    
    return { data, isError, isLoading };
}

