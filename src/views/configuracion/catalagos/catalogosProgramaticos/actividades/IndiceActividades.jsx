import React, { useMemo } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Titulo from '../../../../../components/Titulo'
import imgNuevActividad from '../../../../../assets/images/configuracion/programaticos/nuevaActividad.png'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'

const IndiceActividades = () => {

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
            accessorKey: "tipo",
            label: "Tipo de actividad",
            cell: (info) => (
                <span
                    className={`px-1 py-1 rounded text-white text-xs ${
                        info.row.original.tipo === "Plan de desarrollo"
                            ? "bg-customGreen"
                            : "bg-customBlue"
                    }`}
                >
                    {info.row.original.tipo}
                </span>
            ),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "year",
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
                        info.row.original.estado === "Activa 0"
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
                        to={`/configuracion/catalogos/programaticos/editar/actividad/${info.row.original.id}`}
                        className="bg-customRed text-white px-2 py-1 rounded text-xs"
                    >
                        Ver/Editar
                    </Link>
                </div>
              ),
            filterFn: "includesStringSensitive",
        }
    ],[] );

    const data = useMemo(() => [
        {
            id: 1,
            nombre: "Nombre 1",
            descripcion: "Descripción 1",
            codigo: "01",
            tipo: "Plan de desarrollo",
            year: "2021",
            estado: "Activa 0",
            acciones: "Ver/Editar",
        },
        {
            id: 2,
            nombre: "Nombre 2",
            descripcion: "Descripción 2",
            codigo: "02",
            tipo: "Compromiso",
            year: "2022",
            estado: "Activa 1",
            acciones: "Ver/Editar",
        },
    ],[] );

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

                <CustomTable columns={columns} data={data} />
            </div>
        </>
    )
}

export default IndiceActividades