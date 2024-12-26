import React, { useEffect, useMemo, useState } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb';
import { Link, Navigate } from 'react-router-dom';
import Titulo from '../../../../../components/Titulo';
import imgNuevoPresuspuestarios from '../../../../../assets/images/configuracion/programaticos/nuevoProgPresupuestario.png';
import CustomTable from '../../../../../components/CustomTable';
import Regresar from '../../../../../components/Regresar';
import {obtenerProgramasPresupuestarios} from '../../../../../api/configuracion/ApiProgramaPresupuestario'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../../../components/Spinner';

const IndexPresup = () => {

    const  { data, isLoading, isError } = useQuery({
        queryKey: ['obtenerProgramasPresupuestarios'],
        queryFn: obtenerProgramasPresupuestarios,
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
            accessorKey: "subfuncion",
            label: "Subfunción",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "estado",
            label: "Estado",
            cell: (info) => (
                <span
                    className={`p-2 rounded text-white text-xs ${
                        info.row.original.estado === "Activa" ? "bg-customGreen" : "bg-gray-400"
                    }`}
                >
                    {info.row.original.estado}
                </span>
            ),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "Acciones",
            label: "Acciones",
            cell: (info) => (
                <div>
                    <Link
                        to={`/configuracion/catalogos/programaticos/editar/progPresupuestario/${info.getValue()}`}
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
        if(data){
            return data.map((item)=>{
            //    console.log(item);
                return{
                    nombre: item.nombre_presupuestario,
                    codigo: item.codigo_concatenado,
                    subfuncion:item.subfuncion.nombre_subfuncion,
                    estado: item.estado == "Activo" ? "Activa" : "Inactiva",
                    Acciones: item.id_programa_prespuestario,
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
                    { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
                    { href: "/configuracion/catalogos/menu", text: "CATÁLAGOS" },
                    { href: "/configuracion/menu/catalogos/programaticos", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { text: "REGISTRO DE PROGRAMAS PRESUPUESTARIOS" },
                ]}
            />

            <Regresar enlace='/configuracion/menu/catalogos/programaticos'/>
            
            <Titulo text="REGISTRO DE PROGRAMAS PRESUPUESTARIOS" />

            <Link to="/configuracion/catalogos/programaticos/nueva/progPresupuestario" className="inline-block mt-2">
                <img
                    src={imgNuevoPresuspuestarios}
                    alt="nueva finalidad"
                    className="w-52 object-contain"
                />
            </Link>

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">REGISTRO DE PROGRAMAS PRESUPUESTARIOS</h3>
                </div>

                <CustomTable columns={columns} data={dataTable} />
            </div>
        </>
    )
}

export default IndexPresup