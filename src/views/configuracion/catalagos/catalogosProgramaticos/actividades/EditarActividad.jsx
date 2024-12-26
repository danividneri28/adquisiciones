import { Navigate, useParams } from 'react-router-dom'
import FormActividad from '../../../../../components/configuracion/catalogosProgramaticos/FormActividad'
import { useQuery } from '@tanstack/react-query'
import { getActividad } from '../../../../../api/configuracion/catalogos/programaticos/ActividadesApi'
import Spinner from '../../../../../components/Spinner'
import EditActividadForm from '../../../../../components/configuracion/catalogosProgramaticos/EditActividadForm'

const EditarActividad = () => {
    const params = useParams();
    const actividadId = params.id;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['editProyecto', actividadId],
        queryFn: () => getActividad(actividadId),
        retry: false
    });

    if (isLoading) return <Spinner />
    if (isError) return <Navigate to="/404" />

    if(data) return <EditActividadForm data={data} actividadId={actividadId} />
}

export default EditarActividad