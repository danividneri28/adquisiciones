import React from 'react'
import CustomTable from '../../../../components/CustomTable';
import Breadcrumb from '../../../../components/Breadcrumb';
import Titulo from '../../../../components/Titulo';
import HistorialConsolidados from "../../../../assets/images/funciones/HistorialConsolidados.png";
import { Link } from 'react-router-dom';
import Regresar from '../../../../components/Regresar';

const AdministrativoConsolidados = () => {
    const columns = React.useMemo(
        () => [
            {
            accessorKey: "Partida_especifica",
            label: "Partida específica",
            filterFn: "equalsString",
            },
            {
            accessorKey: "Num_requisiciones",
            label: "Número de requisiciones",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
            },
            {
            accessorKey: "Monto_acumulado",
            label: "Monto acumulado",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
            },
            {
            accessorKey: "Fuente_financiamiento",
            label: "Fuente de financiamiento",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
            },
            {
            accessorKey: "Procedimiento_administrativo",
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
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
            accessorKey: "Acciones",
            label: "Acciones",
            cell: (info) => (
                <div>
                    <Link
                    to={`/funciones/procedimientos/listado/consolidados/editar`}
                    className="bg-customRed text-white px-5 py-2 rounded"
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
            Partida_especifica: `Papeleria - 2111`,
            Num_requisiciones: `1${i}`,
            Monto_acumulado: `$2,500,00${i}`,
            Fuente_financiamiento: `Financiamiento interno`,
            Procedimiento_administrativo: `Invitación Restringida`,
            Periodo: `1`,
            Estado: (
                <span
                    class="inline-flex items-center rounded-lg bg-sky-500 px-5 py-2 text-sm font-bold
                text-white ring-1 ring-inset"
                >
                    Nuevo
                </span>
            ),
            Acciones: `Ver/Editar`,
        })),
        []
    );
    
    return (
        <>
            <div>
                <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    { text: "APARTADO DE CONSOLIDADOS" },
                ]}
                />
                <Regresar enlace="/funciones/procedimientos/listado"/>
                <div className="mt-4 md:grid md:grid-rows-1 md:grid-flow-col md:gap-3 justify-items-end">
                    <div className="md:hidden flex justify-between">
                        <Link to={`/funciones/procedimientos/listado/consolidados/historial`} className="md:hidden sm:inline-block">
                        <img
                            src={HistorialConsolidados}
                            alt="Apartado de Consolidados"
                            className="md:w-52 object-contain w-32"
                        />
                        </Link>
                    </div>
                    <div className="md:grid md:grid-cols-1 md:gap-3 w-full justify-items-end sm:grid sm:grid-cols-1 sm:gap-0 rounded-lg text-center">
                        <Titulo
                        text={"APARTADO DE CONSOLIDADOS"}
                        className="text-lg mt-2 lg:mt-10"
                        />
                    </div>
                    <Link to={`/funciones/procedimientos/listado/consolidados/historial`} className="hidden md:inline-block">
                        <img
                        src={HistorialConsolidados}
                        alt="Historial"
                        className="w-52 lg:object-contain"
                        />
                    </Link>
                </div>
                <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                    <div className="bg-customRed rounded p-2">
                        <h3 className="text-white font-bold">
                            APARTADO DE CONSOLIDADOS - ETAPA 3
                        </h3>
                    </div>
                    <CustomTable columns={columns} data={data} />
                </div>
            </div>
        </>
    );
}

export default AdministrativoConsolidados;