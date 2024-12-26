import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import apartadoConsolidados from "../../../assets/images/funciones/apartadoConsolidados.png";
import Historial from "../../../assets/images/funciones/Historial.png";
import CustomTable from "../../../components/CustomTable";
import Regresar from "../../../components/Regresar";

const ProcedAdminIndex = () => {
    const columns = React.useMemo(
    () => [
        {
        accessorKey: "No_Requisicion",
        label: "Número de requisición",
        filterFn: "equalsString",
        },
        {
        accessorKey: "Fecha_Requisicion",
        label: "Fecha de requisición",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
        },
        {
        accessorKey: "Area",
        label: "Área",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
        },
        {
        accessorKey: "Tipo",
        label: "Tipo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
        },
        {
        accessorKey: "Monto_con_IVA",
        label: "Monto con IVA",
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
                to={`/funciones/procedimientos/listado/actualizar`}
                className="bg-customRed text-white px-6 py-2 rounded"
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
            No_Requisicion: `DCS/00${i}/2024`,
            Fecha_Requisicion: `01${i}/06/2024`,
            Area: `Dirección General de Administración`,
            Tipo: `Consumible`,
            Monto_con_IVA: `$480.00`,
            Procedimiento_administrativo: `Invitación Restringida`,
            Estado: (
            <span
                className="inline-flex items-center text-white rounded-lg bg-sky-500 px-6 py-2 text-sm font-boldtext-white ring-1 ring-inset"
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
                    { text: "REGISTROS DE PROCEDIMIENTOS ADMINISTRATIVOS" },
                ]}
                />
                <Regresar enlace="/funciones"/>
                <Titulo
                text={"REGISTROS DE PROCEDIMIENTOS ADMINISTRATIVOS"}
                className="text-lg mt-2 lg:mt-10"
                />
                <div className="mt-4 md:grid md:grid-rows-1 md:grid-flow-col md:gap-3">
                    <Link to={`/funciones/procedimientos/listado/consolidados`} className="hidden lg:inline-block">
                        <img
                        src={apartadoConsolidados}
                        alt="Apartado de Consolidados"
                        className="md:w-52 object-contain w-32"
                        />
                    </Link>
                    <div className="md:hidden flex justify-between">
                        <Link to={`/funciones/procedimientos/listado/consolidados`} className="md:hidden sm:inline-block">
                        <img
                            src={apartadoConsolidados}
                            alt="Apartado de Consolidados"
                            className="md:w-52 object-contain w-32"
                        />
                        </Link>
                        <Link to={`/funciones/procedimientos/listado/historial`}
                        className="md:hidden sm:inline-block">
                        <img
                            src={Historial}
                            alt="Historial"
                            className="md:w-52 object-contain w-32"
                        />
                        </Link>
                    </div>
                <div
                    className="md:grid md:grid-cols-6 md:gap-3 w-full sm:grid sm:grid-cols-1 sm:gap-0 
                            bg-white rounded-lg size-auto text-center mt-2 md:h-24 border border-gray-400"
                >
                    {/* Selectores */}
                    <div className="mb-2 ml-2 mr-2 md:ml-2 md:mr-0">
                    <p className="text-customRed text-base md:text-lg my-2 font-bold text-center">
                        Año:
                    </p>
                    <select className="py-1 md:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                        <option hidden>Seleccionar</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                    </select>
                    </div>
                    <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0">
                    <p className="text-customRed text-base md:text-lg my-2 font-bold text-center">
                        Mes:
                    </p>
                    <select className="py-1 md:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                        <option hidden>Seleccionar</option>
                        <option>Enero</option>
                        <option>Febrero</option>
                        <option>Marzo</option>
                        <option>Abril</option>
                        <option>Mayo</option>
                        <option>Junio</option>
                        <option>Julio</option>
                        <option>Agosto</option>
                        <option>Septiembre</option>
                        <option>Octubre</option>
                        <option>Noviembre</option>
                        <option>Diciembre</option>
                    </select>
                    </div>
                    <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0">
                    <p className="text-customRed text-base md:text-lg my-2 font-bold text-center">
                        Área:
                    </p>
                    <select className="py-1 md:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                        <option hidden>Seleccionar</option>
                        <option>Consumible</option>
                        <option>Inventariable</option>
                        <option>Servicio</option>
                        <option>Todos</option>
                    </select>
                    </div>
                    <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0">
                    <p className="text-customRed text-base md:text-lg my-2 font-bold text-center line-clamp-1">
                        Procedimiento Administrativo:
                    </p>
                    <select className="py-1 md:py-3 lg:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                        <option hidden>Seleccionar</option>
                        <option>Invitación Restringida</option>
                        <option>Adjudicación Directa</option>
                        <option>Licitación Pública</option>
                        <option>Todos</option>
                    </select>
                    </div>
                    <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0">
                    <p className="text-customRed text-base md:text-lg my-2 font-bold text-center">
                        Estado:
                    </p>
                    <select className="py-1 md:py-3 lg:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                        <option hidden>Seleccionar</option>
                        <option>Nuevo</option>
                        <option>Proceso</option>
                    </select>
                    </div>
                    <div className="md:block md:mr-3 mt-2 md:mt-0 mb-2 ml-2 mr-2 md:ml-0">
                    <button
                        type="submit"
                        className="py-3 block w-full border-gray-200 
                                    rounded-lg text-sm bg-customRed text-white md:mt-11 font-bold"
                    >
                        Buscar
                    </button>
                    </div>
                </div>
                <Link to={`/funciones/procedimientos/listado/historial`}
                className="hidden lg:inline-block">
                    <img
                    src={Historial}
                    alt="Historial"
                    className="w-52 lg:object-contain"
                    />
                </Link>
                </div>
                <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">
                        REGISTRO DE PROCEDIMIENTOS ADMINISTRATIVOS - ETAPA 3
                    </h3>
                </div>

                <CustomTable columns={columns} data={data} />
                </div>
            </div>
        </>
    );
};

export default ProcedAdminIndex;
