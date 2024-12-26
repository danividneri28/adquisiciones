import { useQuery } from "@tanstack/react-query";
import { getAreas } from "../api/configuracion/ApiAreas";

export const useAreas = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getAreas"],
        queryFn: getAreas,
    });
    
    return { data, isError, isLoading };
}