import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import HistorialConsolidados from "../../../assets/images/funciones/proveedorContrato/historialConsolidados.png";
import Regresar from "../../../components/Regresar";

const FacturasConsolidados = () => {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "PartidaEspecifica",
                label: "Partida especifica",
                filterFn: "equalsString",
            },
            {
                accessorKey: "NumRequisicion",
                label: "Número de requisición",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "MontoAcumulado",
                label: "Monto acumulado",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "FuenteFinanciamiento",
                label: "Fuente de Financiamiento",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "ProcedimientoAdministrativo",
                label: "Procedimiento administrativo",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },

            {
                accessorKey: "Periodo",
                label: "Periodo",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "Estado",
                label: "Estado",
                cell: (info) => (
                    <span
                        className={`px-2 py-1 rounded text-white 
                    ${info.row.original.Estado === "Nuevo"
                                ? "bg-cyan-500"
                                : "bg-purple-600"
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
                cell: () => (
                    <div>
                        <Link
                            to={`/funciones/facturas/consolidados/historial/registros/`}
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
            Array.from({ length: 1000 }, (_, i) => ({
                id: i,
                PartidaEspecifica: `Papeleria - 2141`,
                NumRequisicion: `10`,
                MontoAcumulado: `2,500,000.00`,
                FuenteFinanciamiento: `Financiamiento Interno `,
                ProcedimientoAdministrativo: `Invitacion Restringida`,
                Periodo: `1`,
                Estado: `Proceso`,
                Acciones: `Ver/Editar`,
            })),
        []
    );

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    { href: "/funciones/facturas/listado",text: "REGISTROS DE COMPROBACIONES Y FACTURAS"},
                    { text: "APARTADO DE CONSOLIDADOS" },
                ]}
            />
            <Regresar enlace="/funciones/facturas/listado" />
            <Titulo text={"APARTADO DE CONSOLIDADOS"} />
            <div>
                <div className="flex justify-between">
                    <Link>
                    </Link>
                    <Link
                        to="/funciones/facturas/consolidados/historial"
                        className="inline-block"
                    >
                        <img
                            src={HistorialConsolidados}
                            alt="Área de Configuración"
                            className="w-52 object-contain"
                        />
                    </Link>
                </div>

                <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                    <div className="bg-customRed rounded p-2">
                        <h3 className="text-white font-bold">
                            APARTADO DE CONSOLIDADOS - ETAPA 6
                        </h3>
                    </div>
                    <CustomTable columns={columns} data={data} />
                </div>
            </div>
        </>
    );
}

export default FacturasConsolidados
