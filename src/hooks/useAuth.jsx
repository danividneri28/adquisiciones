import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/auth/AuthApi";

export const useAuth = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: false,
        refetchOnWindowFocus: false,
    });
    
    return { data, isError, isLoading };
}