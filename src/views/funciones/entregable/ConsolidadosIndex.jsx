import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import imgHistorial from "../../../assets/images/funciones/entregable/historial_consolidados.png";
import Regresar from "../../../components/Regresar";


export default function ConsolidadosIndex() {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "partida_especifica",
                label: "Partida específica",
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "numero_requisiciones",
                label: "Número de requisiciones",
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
                accessorKey: "fuente_financiamiento",
                label: "Fuente de financiamiento",
                cell: (info) => info.getValue(),
                filterFn: "equalsString",
            },
            {
                accessorKey: "periodo",
                label: "Periodo",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "estado",
                label: "Estado",
                cell: (info) => (
                    <span
                        className={`px-1 py-1 rounded text-white text-xs ${
                            info.row.original.estado === "Proceso 0"
                            ? "bg-customBlueSky"
                            : "bg-customPurple"
                        }`}
                    >
                        {info.row.original.estado}
                    </span>
                ),
                filterFn: "equalsString",
            },
            {
                accessorKey: "Acciones",
                label: "Acciones",
                cell: (info) => (
                <div>
                    <Link
                        to={`/unciones/entregables/${info.row.original.id}`}
                        className="bg-customRed text-white px-2 py-1 rounded"
                    >
                        Ver/Editar
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
            Array.from({ length: 5 }, (_, i) => ({
                partida_especifica: `Papeleria - 211${i}`,
                numero_requisiciones: `1${i}`,
                monto: `$2,500,${i}00.00`,
                fuente_financiamiento: `Financiamiento Interno`,
                periodo: `${i}`,
                estado: `Proceso ${i}`,
                acciones: `Ver/Editar`
            })),
        []
    );


    return (
        <>
            <Breadcrumb
                items = {[
                    { href: "/funciones", text: "FUNCIONES"},
                    { href: "/funciones/entregable/listado", text: "REGISTROS DE ENTREGABLES"},
                    { text: "APARTADO DE CONSOLIDADOS"}
                ]}
            />
              <Regresar enlace='/funciones/entregable/listado'/>

            <Titulo text="APARTADO DE CONSOLIDADOS" />
        
            <div className="md:text-end md:-mt-20  sm: text-center sm: mt-5">
                <Link to="/funciones/entregable/historial" className=" inline-block mt-2" >
                    <img 
                        src={imgHistorial} 
                        alt="Apartado de Consolidados"
                        className="w-52 object-contain"
                    />
                </Link>
            </div>
					
            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20 ">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">APARTADO DE CONSOLIDADOS-ETAPA 5</h3>
                </div>
                <CustomTable columns={columns} data={data} />
            </div>
			

		</>
)
}
