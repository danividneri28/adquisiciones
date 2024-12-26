import React, { useMemo, useState, useEffect } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import { Link, Navigate } from 'react-router-dom'
import Titulo from '../../../../../components/Titulo'
import nuevoSubProgPresupuestario from '../../../../../assets/images/configuracion/programaticos/subprogPresupuestario.png'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'
import {getSubProgramas,getProgramasPresupuestarios} from '../../../../../api/configuracion/ApiSubProgramaPresupuestario'
import Spinner from '../../../../../components/Spinner'
import { useQuery } from '@tanstack/react-query'

const IndexSubProgPresupuestario = () => {
    
    const { data: programasPresupuestariosData, isLoading: programasPresupuestariosLoading, isError: programasPresupuestariosError } = useQuery({
            queryKey: ['programasPresupuestarios'],
            queryFn: getProgramasPresupuestarios
        });
    
        const  { data, isLoading, isError } = useQuery({
        queryKey: ['getSubProgramas'],
        queryFn: getSubProgramas,
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
            accessorKey: "progrma",
            label: "Programa",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "estado",
            label: "Estado",
            cell: (info) => (
                <span
                    className={`p-2 rounded text-white text-xs ${
                        info.row.original.estado === "Activo" ? "bg-customGreen" : "bg-gray-400"
                    }`}
                >
                    {info.row.original.estado}
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
                        to={`/configuracion/catalogos/programaticos/editar/subprogPresupuestario/${info.getValue()}`}
                        className="bg-customRed text-white px-2 py-1 rounded text-xs"
                    >
                        Ver/Editar
                    </Link>
                </div>
              ),
            filterFn: "includesStringSensitive",
        }
    ],[] );

    const dataTables = useMemo(() => {
        if (data) {
            return data.map((item)=>{
               console.log(item);
                return{
                    nombre: item.nombre,
                    codigo: item.codigo_concatenado,
                    progrma: item.programa_presupuestario.nombre_presupuestario,
                    estado: item.estado == 'Activo' ? "Activo" : "Inactiva",
                    acciones: item.id_sub_presupuestario,
                };
            });
        }
       return [];
    }, [data]);

    if (isLoading || programasPresupuestariosLoading) return <Spinner />;
    if (isError) return <Navigate to="/404" />;
    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
                    { href: "/configuracion/catalogos/menu", text: "CATÁLAGOS" },
                    { href: "/configuracion/menu/catalogos/programaticos", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { text: "REGISTRO DE SUBPROGRAMAS PRESUPUESTARIOS" },
                ]}
            />

           <Regresar enlace='/configuracion/menu/catalogos/programaticos'/>
            
            <Titulo text="REGISTRO DE SUBPROGRAMAS PRESUPUESTARIOS" />

            <Link to="/configuracion/catalogos/programaticos/nueva/subprogPresupuestario" className="inline-block mt-2">
                <img
                    src={nuevoSubProgPresupuestario}
                    alt="nueva finalidad"
                    className="w-52 object-contain"
                />
            </Link>

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">REGISTRO DE SUBPROGRAMAS PRESUPUESTARIOS</h3>
                </div>

                <CustomTable columns={columns} data={dataTables} />
            </div>
        </>
    )
}

export default IndexSubProgPresupuestario