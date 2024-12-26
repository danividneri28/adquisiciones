import React, { useMemo } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Titulo from '../../../../../components/Titulo'
import imgNuevoProyecto from '../../../../../assets/images/configuracion/programaticos/nuevoProyecto.png'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'

const IndiceProyecto = () => {
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
            accessorKey: "programa",
            label: "Programa",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "subprograma",
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
                        to={`/configuracion/catalogos/programaticos/editar/proyecto/${info.row.original.id}`}
                        className="bg-customRed text-white px-2 py-1 rounded text-xs"
                    >
                        Ver/Editar
                    </Link>
                </div>
              ),
            filterFn: "includesStringSensitive",
        }
    ],[] );

    const data = React.useMemo(() => Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        nombre: `Nombre ${i}`,
        codigo: `0${i}`,
        programa: `Programa ${i}`,
        subprograma: `Subprograma ${i}`,
        estado: `Activa ${i}`,
        acciones: `Ver/Editar`,
    })), []);

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

            <Regresar enlace='/home'/>
    
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

                <CustomTable columns={columns} data={data} />
            </div>
        </>
    )
}

export default IndiceProyecto