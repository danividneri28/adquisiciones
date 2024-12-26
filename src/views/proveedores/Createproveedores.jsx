import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import Titulo from "../../components/Titulo";
import CustomTable from "../../components/CustomTable";
import registroProveedor from "../../assets/images/funciones/proveedores/registro-proveedor.png";
import consultaProveedores from "../../assets/images/funciones/proveedores/Consulta_de_proveedores.png";
// import Nuevarequisicion from "../../../assets/images/funciones/solicitudRequisicion/Nuevarequisicion.png"; // Importar imágenes
// import Historial from "../../../assets/images/funciones/solicitudRequisicion/historial.png"; // Importar imágenes

export default function Createproveedores() {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "numeroRegistro",
                label: "Número de registro",
                filterFn: "equalsString",
            },
            {
                accessorKey: "Fecharegistro",
                label: "Fecha de registro",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },

            {
                accessorKey: "TipoPersona",
                label: "Tipo de Persona",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "NombreProveedor",
                label: "Nombre de proveedor",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "RepresentanteLegal",
                label: "Representante legal",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "EntidadFederativa",
                label: "Entidad Federativa",
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
                accessorKey: "Rfc",
                label: "RFC",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "Estado",
                label: "Estado",
                cell: (info) => (
                    <span
                        className={`px-2 py-1 rounded text-white 
              ${info.row.original.Estado === "Activa 0"
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
                            to={`/funciones/verProveedor/show-proveedor`}
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
                numeroRegistro: `0026/2023 ${i}`,
                Fecharegistro: `15/01/2023`,
                TipoPersona: `Fisica `,
                NombreProveedor: `Juan Carlos Mazud Peña`,
                RepresentanteLegal: `N/A `,
                EntidadFederativa: `CDMX `,
                Tipo: `Servicio`,
                Rfc: `TKIS87342`,
                Estado: `60%`,
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
                        text: "REGISTROS DE PROVEEDORES",
                    },
                ]}
            />
            <a
                href="/funciones"
                className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer"
            >
                REGRESAR
            </a>
        <Titulo text={"REGISTROS DE PROVEEDORES"} />
            <div>
                <div className="flex justify-between items-center">
                    <Link to="/funciones/proveedores/create-proveedor" className="inline-block">
                        <img
                            src={registroProveedor}
                            alt="Registro de Proveedor"
                            className="w-52 object-contain"
                        />
                    </Link>
                {/* APARTADO DE SELECT */}
                    <div className="mt-4 md:grid md:grid-rows-1 md:grid-flow-col md:gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 w-full bg-white rounded-lg text-center mt-2 md:h-24 border border-gray-400">
                            {/* Selectores */}
                            <div className="mb-2 ml-2 mr-2 md:ml-2 md:mr-0">
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-center">Año:</p>
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
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-center">Mes:</p>
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
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-center">Tipo:</p>
                                <select className="py-1 md:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                                    <option hidden>Seleccionar</option>
                                    <option>Bien</option>
                                    <option>Servicio</option>
                                </select>
                            </div>
                            <div className="mb-2 ml-2 mr-2 md:ml-0 md:mr-0">
                                <p className="text-customRed text-base md:text-lg my-2 font-bold text-center line-clamp-1">Tipo de Persona:</p>
                                <select className="py-1 md:py-3 lg:py-3 px-4 pe-9 block w-full border hover:border-gray-800 rounded-lg text-sm">
                                    <option hidden>Seleccionar</option>
                                    <option>Área</option>
                                    <option>Adquisiciones</option>
                                </select>
                            </div>

                            <div className="md:block md:mr-3 mt-2 md:mt-0 mb-2 ml-2 mr-2 md:ml-0">
                                <button type="submit" className="py-3 block w-full border-gray-200 
                                rounded-lg text-sm bg-customRed text-white md:mt-11 font-bold">Buscar</button>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}


                    <Link to="/funciones/consultaproveedores/consulta-proveedor" className="inline-block">
                        <img
                            src={consultaProveedores}
                            alt="Consulta de Proveedores"
                            className="w-52 object-contain"
                        />
                    </Link>
                </div>


                <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                    <div className="bg-customRed rounded p-2">
                        <h3 className="text-white font-bold">
                            REGISTROS DE PROVEEDORES - ETAPA 8
                        </h3>
                    </div>
                    <CustomTable columns={columns} data={data} />
                </div>
            </div>
        </>
    );
}
