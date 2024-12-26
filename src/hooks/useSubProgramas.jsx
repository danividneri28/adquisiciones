import { useQuery } from '@tanstack/react-query';
import { getSubProgramas } from '../api/configuracion/ApiSubProgramaPresupuestario';

export const useSubProgramas = () => {
    const  { data, isLoading, isError } = useQuery({
        queryKey: ['getSubProgramas'],
        queryFn: getSubProgramas,
    });

    return { data, isError, isLoading };
};