import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import CustomTable from '../../../components/CustomTable'
import Titulo from '../../../components/Titulo'
import { Link } from 'react-router-dom'

const ProveedorConsolidadoHistorialRegistros = () => {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "NumRequisicion",
                label: "Número de requisición",
                filterFn: "equalsString",
            },
            {
                accessorKey: "PartidaEspecifica",
                label: "Partida especifica",
                filterFn: "equalsString",
            },
            {
                accessorKey: 'Year',
                label: 'Año',
                filterFn: 'equalsString',
            },
            {
                accessorKey: 'Periodo',
                label: 'Periodo',
                filterFn: 'equalsString',
            },
            {
                accessorKey: 'Area',
                label: 'Área',
                filterFn: 'equalsString',
            },
            {
                accessorKey: 'MontoAcumulado',
                label: 'Monto acumulado',
                filterFn: 'equalsString',
            },
            {
                accessorKey: 'ProcedimientoAdministrativo',
                label: 'Procedimiento administrativo',
                filterFn: 'equalsString',
            },
            {
                accessorKey: 'Acciones',
                label: 'Acciones',
                cell: (info) => (
                    <div>
                        <Link
                            to={`/funciones/proveedor/consolidados/historial/show`}
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
                NumRequisicion: `DCS/001/2024 ${i}`,
                PartidaEspecifica: `Papeleria - 2141`,
                Year: `2024`,
                Periodo: `1`,
                Area: `Dirección de salud Pública `,
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
                    { href: "/funciones/proveedor/listado", text: "REGISTROS DE PROVEEDORES Y CONTRATOS" },
                    { href: "/funciones/proveedor/consolidados", text: "APARTADO DE CONSOLIDADOS" },
                    { href: "/funciones/proveedor/consolidados/historial", text: "HISTORIAL DE CONSOLIDADOS" },
                    { text: "REGISTROS DE CONSOLIDADOS" },
                ]}
            />
            <div className='sm:flex sm:justify-between pt-3'>
                <div>
                    <a
                        href="/funciones/proveedor/consolidados/historial"
                        className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer"
                    >
                        REGRESAR
                    </a>
                </div>
                <div>
                    <li>Oficio de Autorización</li>
                    <li>Oficio de Justificación</li>
                    <li>Contrato</li>
                </div>
            </div>
            <Titulo text={"REGISTROS DE CONSOLIDADOS"} className='mb-28' />
            <div>
                <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                    <div className="bg-customRed rounded p-2">
                        <h3 className="text-white font-bold">
                            REGISTRO DE CONSOLIDADOS - ETAPA 4
                        </h3>
                    </div>
                    <CustomTable columns={columns} data={data} />
                </div>

            </div>
        </>
    )
}

export default ProveedorConsolidadoHistorialRegistros
4