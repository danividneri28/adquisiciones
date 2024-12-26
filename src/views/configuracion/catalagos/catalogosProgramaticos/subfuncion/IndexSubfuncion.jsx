import React from 'react'
import umgNuevaSubfuncion from '../../../../../assets/images/configuracion/programaticos/nuevaSubfuncion.png'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Titulo from '../../../../../components/Titulo'
import { Link } from 'react-router-dom'
import CustomTable from '../../../../../components/CustomTable'
import Regresar from '../../../../../components/Regresar'
import Spinner from '../../../../../components/Spinner'
import { useQuery } from '@tanstack/react-query'
import { getSubfunciones } from '../../../../../api/configuracion/ApiSubfuncion'

const IndexSubfuncion = () => {
    const columns = React.useMemo(() => [
        {
            accessorKey: "nombre_subfuncion",
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
            accessorKey: "codigo_subfuncion",
            label: "Código",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "funcion.nombre_funcion",
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
                        info.getValue() === "Activo"
                            ? "bg-customGreen"
                            : "bg-customRed"
                    }`}
                >
                    {info.getValue()}
                </span>
            ),
            filterFn: "includesStringSensitive",
        },
        {
            accessorKey: "id_subfuncion",
            label: "Acciones",
            cell: (info) => (
                <div>
                    <Link
                        to={`/configuracion/catalogos/programaticos/editar/subfuncion/${info.getValue()}`}
                        className="bg-customRed text-white px-2 py-1 rounded text-xs"
                    >
                        Ver/Editar
                    </Link>
                </div>
              ),
            filterFn: "includesStringSensitive",
        }
    ],[] );

    const { data, isLoading } = useQuery({
        queryKey: ["getSubfunciones"],
        queryFn: getSubfunciones,
      });


  const dataTable = React.useMemo(() => {
    if (data) return data.data;
    return [];
  }, [data]);
  if (isLoading) return <Spinner />;
  if (data.success)

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "../../menu", text: "CONFIGURACIÓN" },
                    { href: "../../catalogos/menu", text: "CATÁLAGOS" },
                    {
                      href: "../../menu/catalogos/programaticos",
                      text: "CATÁLAGOS PROGRAMÁTICOS",
                    },
                    { text: "REGISTRO DE SUBFUNCIONES" },
                ]}
            />

            <Regresar enlace="../menu/catalogos/programaticos" />
            
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

                <CustomTable columns={columns} data={dataTable} />
            </div>
        </>
    )
}

export default IndexSubfuncion