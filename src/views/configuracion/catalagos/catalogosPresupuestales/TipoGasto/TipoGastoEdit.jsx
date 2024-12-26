import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Spinner from "../../../../../components/Spinner";
import FormGastoEdit from "../../../../../components/configuracion/catalogosPresupuestales/tipoGasto/FormGastoEdit"
import { useQuery } from "@tanstack/react-query";
import { getTipoGasto } from "../../../../../api/configuracion/catalogos/presupuestales/ApiTipoGasto";


const TipoGastoEdit = () => {
  const params = useParams();
  const gastoId = params.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['editGasto', gastoId],
    queryFn: () => getTipoGasto(gastoId),
    retry: false
  });

  if (isLoading) return <Spinner />
  if (isError) return <Navigate to="/404" />

  if(data) return <FormGastoEdit data={data} gastoId={gastoId} />
};

export default TipoGastoEdit;
