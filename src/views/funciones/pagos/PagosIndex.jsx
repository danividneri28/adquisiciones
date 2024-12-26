import React from 'react'
import CustomTable from '../../../components/CustomTable';
import Breadcrumb from '../../../components/Breadcrumb';
import Titulo from '../../../components/Titulo';
import { Link } from 'react-router-dom';
import apartadoConsolidados from "../../../assets/images/funciones/apartadoConsolidados.png";
import Historial from "../../../assets/images/funciones/Historial.png";
import Regresar from '../../../components/Regresar';

const PagosIndex = () => {
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
            accessorKey: "Numero_de_contrato",
            label: "Número de contrato",
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
            accessorKey: "Proveedor",
            label: "Proveedor",
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
            accessorKey: "Monto",
            label: "Monto",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
            },
            {
            accessorKey: "Fecha_de_factura",
            label: "Fecha de factura",
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
                    to={`/funciones/pagos/editar`}
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
                No_Requisicion: `ORD/001${i}/2024`,
                Fecha_Requisicion: `0${i}/06/2024`,
                Numero_de_contrato: `858387BNNG47`,
                Area: `J.U.D. de Adquisiciones`,
                Proveedor: `SUMINISTROS SADAN S.A DE C.V`,
                Tipo: `Consumible`,
                Monto: `$480.00`,
                Fecha_de_factura: `16/12/2024`,
                Estado: (
                <span
                    className="inline-flex items-center rounded-lg bg-purple-700 px-6 py-2 text-sm font-bold text-white ring-0 ring-inset"
                >
                    Proceso
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
                        { text: "REGISTROS DE PAGOS" },
                    ]}
                    />
                    <Regresar enlace="/funciones"/>
                    <Titulo
                    text={"REGISTROS DE PAGOS"} className="text-lg mt-2 lg:mt-10"/>
                    <div className="mt-4 md:grid md:grid-rows-1 md:grid-flow-col md:gap-3">
                        <Link to={`/funciones`} className="hidden md:inline-block">
                            <img
                            src={apartadoConsolidados}
                            alt="Apartado de Consolidados"
                            className="md:w-52 w-32"
                            />
                        </Link>
                        <div className="md:hidden flex justify-between">
                            <Link to={`/funciones`} className="md:hidden sm:inline-block">
                            <img
                                src={apartadoConsolidados}
                                alt="Apartado de Consolidados"
                                className="md:w-52 object-contain w-32"
                            />
                            </Link>
                            <Link to={`/funciones`}
                            className="md:hidden sm:inline-block">
                            <img
                                src={Historial}
                                alt="Historial"
                                className="md:w-52 object-contain w-32"
                            />
                            </Link>
                        </div>
                        <div className="md:grid md:grid-cols-6 md:gap-2 w-full sm:grid sm:grid-cols-1 sm:gap-0 bg-white rounded-lg text-center 
                                        mt-2 md:h-24 border border-gray-400">
                            {/* Selectores */}
                            <div className="mb-2 ml-2 mr-2 md:ml-2 md:mr-0">
                                <p className="text-customRed md:text-lg my-2 font-bold text-start">
                                    Año:
                                </p>
                                <select className="py-1 md:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm font-bold">
                                    <option hidden>Seleccionar</option>
                                    <option className='font-medium'>2024</option>
                                    <option className='font-medium'>2025</option>
                                    <option className='font-medium'>2026</option>
                                    <option className='font-medium'>2027</option>
                                    <option className='font-medium'>2028</option>
                                </select>
                            </div>
                            <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0 font-bold">
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-start">
                                    Mes:
                                </p>
                                <select className="py-1 md:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                                    <option hidden>Seleccionar</option>
                                    <option className='font-medium'>Enero</option>
                                    <option className='font-medium'>Febrero</option>
                                    <option className='font-medium'>Marzo</option>
                                    <option className='font-medium'>Abril</option>
                                    <option className='font-medium'>Mayo</option>
                                    <option className='font-medium'>Junio</option>
                                    <option className='font-medium'>Julio</option>
                                    <option className='font-medium'>Agosto</option>
                                    <option className='font-medium'>Septiembre</option>
                                    <option className='font-medium'>Octubre</option>
                                    <option className='font-medium'>Noviembre</option>
                                    <option className='font-medium'>Diciembre</option>
                                </select>
                            </div>
                            <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0 font-bold">
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-start">
                                    Área:
                                </p>
                                <select className="py-1 md:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                                    <option hidden>Seleccionar</option>
                                    <option className='font-medium'>Consumible</option>
                                    <option className='font-medium'>Inventariable</option>
                                    <option className='font-medium'>Servicio</option>
                                    <option className='font-medium'>Todos</option>
                                </select>
                            </div>
                            <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0">
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-start">
                                    Tipo:
                                </p>
                                <select className="py-1 md:py-3 lg:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm font-bold">
                                    <option hidden>Seleccionar</option>
                                    <option className='font-medium'>Consumible</option>
                                    <option className='font-medium'>Servicio</option>
                                    <option className='font-medium'>Inventariable</option>
                                    <option className='font-medium'>Todos</option>
                                </select>
                            </div>
                            <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0 font-bold">
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-start">
                                    Estado:
                                </p>
                                <select className="py-1 md:py-3 lg:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                                    <option hidden>Seleccionar</option>
                                    <option className='font-medium'>Nuevo</option>
                                    <option className='font-medium'>Proceso</option>
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
                        <div className='text-end'>
                            <Link to={`/funciones/procedimientos/listado/historial`}
                            className="hidden md:inline-block">
                                <img
                                src={Historial}
                                alt="Historial"
                                className="w-52 lg:object-contain"
                                />
                            </Link>
                        </div>
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
}

export default PagosIndex