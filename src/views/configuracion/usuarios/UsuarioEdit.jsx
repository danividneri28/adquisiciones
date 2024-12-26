import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { obtenerUsuario } from "../../../api/configuracion/ApiUsers";
import NoEncontrado from "../../HttpError/NoEncontrado";
import Spinner from "../../../components/Spinner";
import EditUserForm from "../../../components/configuracion/usuarios/EditUserForm";

const UsuarioEdit = () => {
  const params = useParams();
  const userId = params.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['editUser', userId],
    queryFn: () => obtenerUsuario(userId),
    retry: false
  });

  if (isLoading) return <Spinner />
  if (isError) return <Navigate to="/404" />

  if(data) return <EditUserForm data={data} projectId={userId} />
};

export default UsuarioEdit;
