import React from 'react'
import umgNuevaSubfuncion from '../../../../../assets/images/configuracion/programaticos/nuevaSubfuncion.png'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Titulo from '../../../../../components/Titulo'
import { Link } from 'react-router-dom'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'

const IndexSubfuncion = () => {
    const columns = React.useMemo(() => [
        {
            accessorKey: "nombre",
            label: "Nombre",
            filterFn: "equalsString",
        },
        {
            accessorKey: "descripcion",
            label: "Descripción",
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
            accessorKey: "funcion",
            label: "Función",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "estado",
            label: "Estado",
            cell: (info) => (
                <span
                    className={`px-1 block py-1 rounded text-white text-xs ${
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
                        to={`/configuracion/catalogos/programaticos/editar/subfuncion/${info.row.original.id}`}
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
        nombre: "Nombre",
        descripcion: "Coordinación de la politica de Gobierno, Relaciones exteriores, seguridad nacional, seguridad nacional, otros servicios... 0",
        codigo: "Código",
        funcion: "Función",
        estado: "Activa 0",
    })),[]);

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { text: "REGISTRO DE SUBFUNCIONES" },
                ]}
            />

            <Regresar enlace='/home'/>
            
            <Titulo text="REGISTRO DE SUBFUNCIONES" />

            <Link to="/configuracion/catalogos/programaticos/nueva/subfuncion" className="inline-block mt-2">
                <img
                    src={umgNuevaSubfuncion}
                    alt="nueva finalidad"
                    className="w-52 object-contain"
                />
            </Link>

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">REGISTROS DE SUBFUNCIONES</h3>
                </div>

                <CustomTable columns={columns} data={data} />
            </div>
        </>
    )
}

export default IndexSubfuncion