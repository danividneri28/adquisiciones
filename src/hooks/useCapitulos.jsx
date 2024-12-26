import { useQuery } from '@tanstack/react-query';
import { getCapitulos } from '../api/configuracion/capitulos/ApiCapitulos';

export const useCapitulos = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["getCapitulos"],
        queryFn: getCapitulos,
    });
    return { data, isError, isLoading };
}
