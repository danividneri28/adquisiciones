import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { obtenerProyecto } from '../../../../../api/configuracion/catalogos/programaticos/ProyectoApi';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../../components/Spinner';
import EditProyectForm from '../../../../../components/configuracion/catalogosProgramaticos/EditProyectForm';

const EditarProyecto = () => {
    const params = useParams();
    const projectId = params.id;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProyecto', projectId],
        queryFn: () => obtenerProyecto(projectId),
        retry: false
    });

    if (isLoading) return <Spinner />
    if (isError) return <Navigate to="/404" />

    if(data) return <EditProyectForm data={data} projectId={projectId} />
}

export default EditarProyecto