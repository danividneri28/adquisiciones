import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import Titulo from '../../../components/Titulo'
import CustomTable from '../../../components/CustomTable'
import { Link } from 'react-router-dom'
import Apartadoconsolidados from "../../../assets/images/funciones/proveedorContrato/apartadoconsolidados.png";
import Historial from "../../../assets/images/funciones/solicitudRequisicion/historial.png";

const FacturasIndex = () => {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "numeroRequisicion",
                label: "Numero de requisición",
                filterFn: "equalsString",
            },
            {
                accessorKey: "FechaRequisicion",
                label: "Fecha de requisición",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "NumContrato",
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
                accessorKey: "MontoIVA",
                label: "Monto con IVA",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "FechaFactura",
                label: "Fecha de factura",
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
                            to={`/funciones/facturas/create`}
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
                numeroRequisicion: `DCS/00${i + 1}/2024`,
                FechaRequisicion: `15/01/2023`,
                NumContrato: `00${i + 1}`,
                Area: `Dirección de salud Pública `,
                Proveedor: `GOBTI S.A de C.V.`,
                Tipo: `Consumible `,
                MontoIVA: `2,500,000.00`,
                FechaFactura: `15/01/2023`,
                Estado: `Nuevo`,
                Acciones: `Ver/Editar`,
            })),
        []
    );

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    { text: "REGISTRO DE COMPROBACIONES DE FACTURAS" },
                ]}
            />
            <a
                href="/funciones/facturas"
                className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer"
            >
                REGRESAR
            </a>
            <Titulo text={"REGISTRO DE COMPROBACIÓN DE FACTURAS"} className='mb-10' />
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-1 gap-6 mt-5">
                    <div >
                        <Link
                            to="/funciones/facturas/consolidados"
                            className="inline-block"
                        >
                            <img
                                src={Apartadoconsolidados}
                                alt="Área de Configuración"
                                className="w-40 lg:w-52 object-contain"
                            />
                        </Link>
                    </div>
                    <div className="col-start-1 col-span-2 lg:col-span-3">
                        <div className="bg-gray-100 rounded-lg">
                            <form
                                className="w-full p-6 rounded-lg"
                                style={{ backgroundColor: "#ffffff" }}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                                    <div className="">
                                        <label className="block text-sm font-medium text-customRed">
                                            Año:
                                        </label>
                                        <input
                                            type=""
                                            name="nombreArea"
                                            className="mt-1 block w-full rounded-md border shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                            readOnly
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-sm font-medium text-customRed">
                                            Mes:
                                        </label>
                                        <input
                                            type="text"
                                            name="claveArea"
                                            className="mt-1 block w-full rounded-md border shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                            readOnly
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-sm font-medium text-customRed">
                                            Área:
                                        </label>
                                        <input
                                            type="text"
                                            name="claveArea"
                                            className="mt-1 block w-full rounded-md border shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                            readOnly
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-sm font-medium text-customRed">
                                            Proveedor:
                                        </label>
                                        <input
                                            type="text"
                                            name="claveArea"
                                            className="mt-1 block w-full rounded-md border shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                            readOnly
                                        />
                                    </div>
                                    <div className="">
                                        <label className="block text-sm font-medium text-customRed">
                                            Estado:
                                        </label>
                                        <input
                                            type="text"
                                            name="claveArea"
                                            className="mt-1 block w-full rounded-md border shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                            readOnly
                                        />
                                    </div>
                                    <div className="grid justify-items-center flex items-center">
                                        <button
                                            type="button"
                                            className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                                            aria-label="Regresar a listado de áreas"
                                        >
                                            Buscar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-start-2 row-start-1 lg:col-start-5 grid justify-items-end">
                        <Link
                            to="/funciones/facturas/historial"
                            className="inline-block"
                        >
                            <img
                                src={Historial}
                                alt="Área de Configuración"
                                className="w-40 lg:w-52 "
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full mt-8 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                    <div className="bg-customRed rounded p-2">
                        <h3 className="text-white font-bold">
                            REGISTROS DE COMPROBACIONES Y FACTURAS - ETAPA 6
                        </h3>
                    </div>
                    <CustomTable columns={columns} data={data} />
                </div>
            </div>
        </>
    )
}

export default FacturasIndex
