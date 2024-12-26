import React, { useMemo } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import { Link, Navigate } from 'react-router-dom'
import Titulo from '../../../../../components/Titulo'
import imgNuevoProyecto from '../../../../../assets/images/configuracion/programaticos/nuevoproyecto.png'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'
import { obtenerProyectos } from '../../../../../api/configuracion/catalogos/programaticos/ProyectoApi'
import Spinner from '../../../../../components/Spinner'
import { useQuery } from '@tanstack/react-query'

const IndiceProyecto = () => {
    const  { data, isLoading, isError } = useQuery({
        queryKey: ['obtenerProyectos'],
        queryFn: obtenerProyectos,
    });

    const columns = useMemo(() => [
        {
            accessorKey: "nombre",
            label: "Nombre",
            filterFn: "equalsString",
        },
        {
            accessorKey: "codigo",
            label: "Código",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "id_programa",
            label: "Programa",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "id_subprograma",
            label: "Subprograma",
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
                            : "bg-gray-500"
                    }`}
                >
                    { info.row.original.estado }
                </span>
            ),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "acciones",
            label: "Acciones",
            cell: (info) => (
                <div>
                    <Link
                        to={`/configuracion/catalogos/programaticos/editar/proyecto/${info.getValue()}`}
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
                    codigo: item.codigo_completo,
                    id_subprograma: item.subprograma.nombre,
                    id_programa: item.subprograma.programa_presupuestario.nombre_presupuestario,
                    estado: item.estado,
                    acciones: item.id,
                };
            });
        }
        return [];
    }, [data]);

    if (isLoading) return <Spinner />;
    if (isError) return <Navigate to="/404" />;
    
    return (
        <>  
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { href: "/home", text: "PROGRAMATICOS" },
                    { text: "REGISTRO DE PROYECTOS" },
                ]}
            />

            <Regresar enlace='/configuracion/menu/catalogos/programaticos'/>
    
            <Titulo text="REGISTRO DE PROYECTOS" />

            <Link to="/configuracion/catalogos/programaticos/nueva/proyecto" className="inline-block mt-2">
                <img
                    src={imgNuevoProyecto}
                    alt="nueva finalidad"
                    className="w-52 object-contain"
                />
            </Link>

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">REGISTRO DE PROYECTOS</h3>
                </div>

                <CustomTable columns={columns} data={dataTable} />
            </div>
        </>
    )
}

export default IndiceProyecto