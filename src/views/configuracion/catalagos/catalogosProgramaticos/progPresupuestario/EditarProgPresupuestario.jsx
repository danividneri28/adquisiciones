import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import EditFormPresupuestario from '../../../../../components/configuracion/catalogosProgramaticos/EditFormPresupuestario';
import {ObtenerPresupuestario} from '../../../../../api/configuracion/ApiProgramaPresupuestario'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../../components/Spinner';
import { getPilares } from '../../../../../api/configuracion/catalogosApi';
import { getSubfunciones } from '../../../../../api/configuracion/ApiSubfuncion';

const EditarProgPresupuestario = () => {
    const params = useParams();
    const presupuestarioId = params.id;
    
    // LLAMADO A LA API
    const { data, isLoading, isError, fetchStatus } = useQuery({
        queryKey: ['editObtenerPresupuestario', presupuestarioId],
        queryFn: () => ObtenerPresupuestario(presupuestarioId),
        retry: false
    });
    
    const { data:dataP, isLoading:isLoadingP, isError:isErrorP } = useQuery({
        queryKey: ['getPilares'],
        queryFn: getPilares,
        retry: false
    });
    
    const { data:datasub, isLoading:isLoadingsub, isError:isErrorsub } = useQuery({
        queryKey: ['getSubfunciones','Activo'],
        queryFn: getSubfunciones,
        retry: false
    });
    if (isLoading || isLoadingP || isLoadingsub || fetchStatus=='fetching') return <Spinner />
    if (isError ||isErrorP ||isErrorsub) return <Navigate to="/404" />

    if(data) return <EditFormPresupuestario 
                        data={data} 
                        dataP={dataP} 
                        datasub={datasub}  
                        projectId={presupuestarioId} />
}

export default EditarProgPresupuestario