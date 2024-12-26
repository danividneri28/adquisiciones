import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { obtenerClasificacion } from "../../../../../api/configuracion/catalogos/presupuestales/ApiClasificacion";
import Spinner from "../../../../../components/Spinner";
import FormClasificacionEdit from "../../../../../components/configuracion/catalogosPresupuestales/clasificacionFuncional/FormClasificacionEdit";


const ClasificacionFuncionalEdit = () => {
  const params = useParams();
  const clasificacionId = params.id;

  const { data, isLoading, isError} = useQuery({
    queryKey: ['editClasificacion', clasificacionId],
    queryFn: () => obtenerClasificacion(clasificacionId),
    retry: false
  });

  if (isLoading) return <Spinner />
  if (isError) return <Navigate to="/404" />

  if(data) return <FormClasificacionEdit  data={data} clasificacionId={clasificacionId} />
};

export default ClasificacionFuncionalEdit;