import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../components/Spinner";
import { EditFinanciamientoForm } from "../../../../../components/configuracion/fuenteFinanciamiento/EditFinanciamientoForm";
import { getFuenteFinanciamiento } from "../../../../../api/configuracion/ApiFinanciamiento";

const FuenteFinanciamientoEdit = () => {
    const params = useParams();
    const financimientoId = params.id;
    const { data, isLoading , isError } = useQuery({
        queryKey: ["editFuenteFinanciamiento", financimientoId],
        queryFn: () => getFuenteFinanciamiento(financimientoId),
        retry: false,
    });
    if (isLoading) return <Spinner />;
    if (isError) return <Navigate to="/404" />;

    if(data) return <EditFinanciamientoForm data={data} projectId={financimientoId} />
};

export default FuenteFinanciamientoEdit;
