import React, { useMemo } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import { Link, Navigate } from 'react-router-dom'
import Titulo from '../../../../../components/Titulo'
import imgNuevActividad from '../../../../../assets/images/configuracion/programaticos/nuevaActividad.png'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'
import { useQuery } from '@tanstack/react-query'
import { getActividades } from '../../../../../api/configuracion/catalogos/programaticos/ActividadesApi'
import Spinner from '../../../../../components/Spinner'

const IndiceActividades = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['obtenerActividades'],
        queryFn: getActividades,
    })

    const columns = useMemo(() => [
        {
            accessorKey: "nombre",
            label: "Nombre de la actividad",
            filterFn: "equalsString",
        },
        {
            accessorKey: "descripcion",
            label: "Descripción de la actividad",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "codigo",
            label: "Código",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "tipo_actividad",
            label: "Tipo de actividad",
            cell: (info) => (
                <span
                    className={`px-1 py-1 rounded text-white text-xs ${
                        info.row.original.tipo_actividad === "Plan de desarrollo"
                            ? "bg-customBlue"
                            : info.row.original.tipo_actividad === "Compromiso"
                            ? "bg-customGreen"
                            : "bg-gray-500"
                    }`}
                >
                    {info.row.original.tipo_actividad}
                </span>
            ),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "anio",
            label: "Año",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "estado",
            label: "Estado",
            cell: (info) => (
                <span
                    className={`px-1 py-1 rounded text-white text-xs ${
                        info.row.original.estado === "Activo"
                            ? "bg-customGreen"
                            : "bg-customRed"
                    }`}
                >
                    {info.row.original.estado}
                </span>
            ),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "acciones",
            label: "Acción",
            cell: (info) => (
                <div>
                    <Link
                        to={`/configuracion/catalogos/programaticos/editar/actividad/${info.getValue()}`}
                        className="bg-customRed text-white px-2 py-1 rounded text-xs"
                    >
                        Ver/Editar
                    </Link>
                </div>
              ),
            filterFn: "includesStringSensitive",
        }
    ],[] );

    const dataTable = useMemo(() => {
            if (data) {
                return data.map((item) => {
                    return {
                        nombre: item.nombre,
                        descripcion: item.descripcion,
                        codigo: item.codigo_completo,
                        tipo_actividad: item?.tipo_actividad?.nombre,
                        anio: item.anio,
                        estado: item.estado,
                        acciones: item.id,
                    };
                });
            }
            return [];
        }, [data]);

    if (isLoading) return <Spinner />
    if (isError) return <Navigate to="/404" />

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { text: "REGISTRO DE ACTIVIDADES" },
                ]}
            />

            <Regresar enlace='/configuracion/menu/catalogos/programaticos'/>
            
            <Titulo text="REGISTRO DE ACTIVIDADES" />

            <Link to="/configuracion/catalogos/programaticos/nueva/actividad" className="inline-block mt-2">
                <img
                    src={imgNuevActividad}
                    alt="nueva finalidad"
                    className="w-52 object-contain"
                />
            </Link>

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">REGISTRO DE ACTIVIDADES</h3>
                </div>

                <CustomTable columns={columns} data={dataTable} />
            </div>
        </>
    )
}

export default IndiceActividades