import React from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import imgNuevaFinalidad from "../../../../../assets/images/configuracion/programaticos/nuevafinalidad.png";
import CustomTable from "../../../../../components/CustomTable";
import Regresar from "../../../../../components/Regresar";

const IndexFinalidad = () => {
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
                        to={`/configuracion/catalogos/programaticos/editar/finalidad/${info.row.original.id}`}
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
        descripcion: `Coordinación de la politica de Gobierno, Relaciones exteriores, seguridad nacional, seguridad nacional, otros servicios... ${i}`,
        codigo: `0${i}`,
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
                    { text: "REGISTRO DE FINALIDADES" },
                ]}
            />

            <Regresar enlace='/home'/>
    
            <Titulo text="REGISTRO DE FINALIDADES" />

            <Link to="/configuracion/catalogos/programaticos/nueva/finalidad" className="inline-block mt-2">
                <img
                    src={imgNuevaFinalidad}
                    alt="nueva finalidad"
                    className="w-52 object-contain"
                />
            </Link>
            
            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">REGISTROS DE FINALIDADES</h3>
                </div>

                <CustomTable columns={columns} data={data} />
            </div>
        </>
    );
};

export default IndexFinalidad;
