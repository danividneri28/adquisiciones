import React from "react"
import { Link } from "react-router-dom"
import Breadcrumb from "../../../components/Breadcrumb"
import CustomTable from "../../../components/CustomTable"
import Titulo from "../../../components/Titulo"
import Regresar from "../../../components/Regresar"


const FacturasHistorial = () => {
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
                label: "Monto",
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
                    ${info.row.original.Estado === "Autorizado"
                                ? "bg-green-500"
                                : "bg-black"
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
                            to={`/funciones/facturas/historial/registros`}
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
            Array.from({ length: 1000 }, (_, i) => ({
                id: i,
                numeroRequisicion: `DCS/00${i + 1}/2024`,
                FechaRequisicion: `15/01/2023`,
                Area: `Dirección de salud Pública `,
                Proveedor: `GOBTI S.A de C.V.`,
                Tipo: `Consumible `,
                MontoIVA: `2,500,000.00`,
                FechaFactura: `15/01/2023`,
                Estado: `Autorizado`,
                Acciones: `Ver/Editar`,
            })),
        []
    );

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    {
                        href: "/funciones/facturas/listado",
                        text: "REGISTROS DE COMPROBACIONES Y FACTURAS",
                    },
                { text: "HISTORIAL DE COMPROBACIONES Y FACTURAS" },
                ]}
            />

            <Regresar enlace="/funciones/facturas/listado" />
            <Titulo text={"HISTORIAL DE COMPROBACIONES Y FACTURAS"} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-1 gap-6 mt-5">
                <div className="col-start-1 col-span-2 lg:col-span-3 lg:col-start-2">
                    <div className="bg-gray-100 border-gray-500 border-2 rounded-lg">
                        <form
                            className="w-full p-6 rounded-lg"
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 ">
                                <div className="">
                                    <label className="block text-sm font-medium text-customRed">
                                        Año:
                                    </label>
                                    <select className="mt-1 block w-full rounded-md border focus:border-ring-black p-3 sm:text-sm">
                                        <option value="">Seleccionar año</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                    </select> 
                                </div>
                                <div className="">
                                    <label className="block text-sm font-medium text-customRed">
                                        Mes:
                                    </label>
                                    <select className="mt-1 block w-full rounded-md border focus:border-ring-black p-3 sm:text-sm">
                                        <option value="">Seleccionar mes</option>
                                        <option value="1">Enero</option>
                                        <option value="2">Febrero</option>
                                        <option value="3">Marzo</option>
                                        <option value="4">Abril</option>
                                        <option value="5">Mayo</option>
                                        <option value="6">Junio</option>
                                        <option value="7">Julio</option>
                                        <option value="8">Agosto</option>
                                        <option value="9">Septiembre</option>
                                        <option value="10">Octubre</option>
                                        <option value="11">Noviembre</option>
                                        <option value="12">Diciembre</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="block text-sm font-medium text-customRed">
                                        Área:
                                    </label>
                                    <select className="mt-1 block w-full rounded-md border focus:border-ring-black p-3 sm:text-sm">
                                        <option value="">Seleccionar área</option>
                                        <option value="1">Dirección de salud Pública</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="block text-sm font-medium text-customRed">
                                        Proveedor:
                                    </label>
                                    <select className="mt-1 block w-full rounded-md border focus:border-ring-black p-3 sm:text-sm">
                                        <option value="">Seleccionar proveedor</option>
                                        <option value="1">GOBTI S.A de C.V.</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="block text-sm font-medium text-customRed">
                                        Estado:
                                    </label>
                                    <select className="mt-1 block w-full rounded-md border focus:border-ring-black p-3 sm:text-sm">
                                        <option value="">Seleccionar estado</option>
                                        <option value="Autorizado">Autorizado</option>
                                        <option value="Cancelado">Cancelado</option>
                                    </select>
                                </div>
                                <div className="grid justify-items-center flex items-center">
                                <button
                                type="button"
                                className="bg-customRed text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                                aria-label="Regresar a listado de áreas"
                                >
                                Buscar
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-full mt-8 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
            <div className="bg-customRed rounded p-2">
                    <h3 className="text-white font-bold">
                    HISTORIAL DE COMPROBACIONES Y FACTURAS - ETAPA 6
                </h3>
            </div>
            <CustomTable columns={columns} data={data} />
        </div>
        </>
    )
}

export default FacturasHistorial
