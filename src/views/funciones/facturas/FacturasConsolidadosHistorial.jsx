import React from 'react'
import CustomTable from '../../../components/CustomTable';
import Titulo from '../../../components/Titulo';
import Breadcrumb from '../../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import Regresar from '../../../components/Regresar';

const FacturasConsolidadosHistorial = () => {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "PartidaEspecifica",
                label: "Partida especifica",
                filterFn: "equalsString",
            },
            {
                accessorKey: "Periodo",
                label: "Periodo",
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
                accessorKey: "ProcedimientoAdministrativo",
                label: "Procedimiento administrativo",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },

            {
                accessorKey: "Estado",
                label: "Estado",
                cell: (info) => (
                    <span
                        className={`px-2 py-2 rounded-xl text-white
                            ${info.row.original.Estado === "Autorizado"
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
                            to={`/funciones/facturas/consolidados/historial/registros`}
                            className="bg-customRed text-white px-4 py-2 rounded-md hover:bg-customRed/80"
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
            Array.from({ length: 1000 }, (_, i) => ({
                id: i,
                PartidaEspecifica: `Papeleria - 2141`,
                Periodo: `1`,
                MontoAcumulado: `2,500,000.00`,
                ProcedimientoAdministrativo: `Consulta de presupuesto`,
                Estado: `Autorizado`,
                Acciones: `Ver`,
            })),
        []
    );
    
    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    { href: "/funciones/facturas/listado", text: "REGISTROS DE COMPROBACIÓN Y FACTURAS" },
                    { href: "/funciones/", text: "APARTADO DE CONSOLIDADOS" },
                    { text: "HISTORIAL DE CONSOLIDADOS" },
                ]}
            />

            <Regresar enlace="/funciones/facturas/consolidados" />
            <Titulo text={"HISTORIAL DE CONSOLIDADOS"} className='mb-28' />
            <div>
                <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                    <div className="bg-customRed rounded p-2">
                        <h3 className="text-white font-bold">
                            HISTORIAL DE SOLICITUDES DE REQUISICIÓN - ETAPA 6
                        </h3>
                    </div>
                    <CustomTable columns={columns} data={data} />
                </div>
            </div>

        </>
    )
}

export default FacturasConsolidadosHistorial
