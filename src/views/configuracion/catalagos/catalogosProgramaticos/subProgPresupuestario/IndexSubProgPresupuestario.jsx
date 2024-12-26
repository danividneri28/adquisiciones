import React, { useMemo } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Titulo from '../../../../../components/Titulo'
import nuevoSubProgPresupuestario from '../../../../../assets/images/configuracion/programaticos/subprogPresupuestario.png'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'

const IndexSubProgPresupuestario = () => {
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
            label: "Acciones",
            cell: (info) => (
                <div>
                    <Link
                        to={`/configuracion/catalogos/programaticos/editar/subprogPresupuestario/${info.row.original.id}`}
                        className="bg-customRed text-white px-2 py-1 rounded text-xs"
                    >
                        Ver/Editar
                    </Link>
                </div>
              ),
            filterFn: "includesStringSensitive",
        }
    ],[] );

    const data = useMemo(() => Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        nombre: "Nombre",
        codigo: "Código",
        progrma: "Programa",
        estado: "Activa 0",
    })), []);

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { text: "REGISTRO DE SUBPROGRAMAS PRESUPUESTARIOS" },
                ]}
            />

           <Regresar enlace='/home'/>
            
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

                <CustomTable columns={columns} data={data} />
            </div>
        </>
    )
}

export default IndexSubProgPresupuestario