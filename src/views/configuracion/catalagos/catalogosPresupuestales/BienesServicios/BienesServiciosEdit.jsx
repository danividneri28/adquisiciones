import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../components/Spinner";
import { Navigate, useParams } from "react-router-dom";
import { getBienServicio } from "../../../../../api/configuracion/ApiBienesServicios";
import { EditBienServicioForm } from "../../../../../components/configuracion/bienServicio/EditBienServicioForm";


const BienesServicisoEdit = () => {
  const params = useParams();
  const bienServicioId = params.id;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["editBienServicio", bienServicioId],
    queryFn: () => getBienServicio(bienServicioId),
    retry: false,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <Navigate to="/404" />;

  if (data) return <EditBienServicioForm data={data}  projectId={bienServicioId} />;
};

export default BienesServicisoEdit;
