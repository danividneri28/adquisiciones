import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import Regresar from "../../../components/Regresar";
import CustomTableHistorial from "../../../components/CustomTableHistorial";

export default function HistorialConsolidados(){
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "partida_especifica",
                label: "Partida Específica",
                filterFn: "equalsString",
            },
            {
                accessorKey: "periodo",
                label: "Periodo",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "monto",
                label: "Monto acumulado",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "procedimiento_administrativo",
                label: "Procedimiento Administrativo",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "Estado",
                label: "Estado",
                cell: (info) => (
                    <span
                        className={`p-1 hover:cursor-none rounded text-white text-sm  
                        ${
                            info.row.original.Estado === "Autorizado 0"
                            ? "bg-customGreen"
                            : "bg-gray-400"
                        }`}
                    >
                    {info.row.original.Estado}
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
                        to={``}
                        className="bg-customRed text-white px-2 py-1 rounded"
                    >
                        Ver
                    </Link>
                    </div>
                ),
                filterFn: "includesStringSensitive",
            },
        ],
        []
    );

    const data = React.useMemo(
        () =>
            Array.from({ length: 5}, (_, i) => {
        
                return {
                    id: i,
                    partida_especifica: `Papeleria - 211${i}`,
                    periodo: `1`,
                    monto: 25000,
                    procedimiento_administrativo: `Invitación Restringida`,
                    Estado: `Autorizado ${i}`,
                    Acciones: `Ver`,
                };
            }),
        []
    );


      const totalAcumulado = React.useMemo(() =>
        data.reduce((acc, curr) => acc + parseFloat(curr.monto), 0),
        [data]
      );
    return (
        <>
            <Breadcrumb 
                items={[
                    {href: "/funciones", text: "FUNCIONES"},
                    {href: "/funciones/entregable/listado", text: "REGISTRO DE ENTREGABLES"},
                    {href: "/funciones/entregable/consolidados", text: "APARTADO DE CONSOLIDADOS"},
                    {text: "HISTORIAL DE CONSOLIDADOS"},
                ]}
            />
            <Regresar enlace='/funciones/entregable/consolidados' />
            <Titulo  text={"HISTORIAL DE CONSOLIDADOS"} className="mb-8 lg:mb-14" />
            
            <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">
                    HISTORIAL DE SOLICITUDES DE REQUISICIÓN - ETAPA 5
                    </h3>
                </div>
                <CustomTableHistorial columns={columns} data={data} totalAcumulado={totalAcumulado}/>
            </div>
        
        </>
    )   
}