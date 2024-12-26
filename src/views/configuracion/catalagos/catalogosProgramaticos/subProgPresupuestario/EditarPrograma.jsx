import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../../components/Spinner';
import EditFormSubPresupuestario from '../../../../../components/configuracion/catalogosProgramaticos/EditFormSubPresupuestario';
import {getProgramasPresupuestarios, ObtenerSubPresupuestario} from '../../../../../api/configuracion/ApiSubProgramaPresupuestario'

const EditarPrograma = () => {
    const params = useParams();
    const subPresupuestarioId = params.id;

    const { data, isLoading, isError, fetchStatus } = useQuery({
        queryKey: ['editObtenerPresupuestario', subPresupuestarioId],
        queryFn: () => ObtenerSubPresupuestario(subPresupuestarioId),
        retry: false
    });

    const { data:dataPP, isLoading:isLoadingPP, isError:isErrorPP } = useQuery({
            queryKey: ['getProgramasPresupuestarios'],
            queryFn: getProgramasPresupuestarios,
            retry: false
        });

    if (isLoading || isLoadingPP || fetchStatus=='fetching') return <Spinner />
    if (isError || isErrorPP) return <Navigate to="/404" />

    if(data) return <EditFormSubPresupuestario 
                        data={data} 
                        dataPP={dataPP} 
                        projectId={subPresupuestarioId} 
                    />

}

export default EditarPrograma