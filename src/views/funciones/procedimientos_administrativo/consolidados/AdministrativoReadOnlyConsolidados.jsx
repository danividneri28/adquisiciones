import React, { useState } from 'react'
import Breadcrumb from '../../../../components/Breadcrumb'
import Titulo from '../../../../components/Titulo'
import CustomTableHistorialEdit from '../../../../components/CustomTableHistorialEdit';
import { Link } from 'react-router-dom';
import Regresar from '../../../../components/Regresar';

const AdministrativoReadOnlyConsolidados = () => {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "No_de_requisicion",
                label: "No. de requisición",
                filterFn: "equalsString",
            },
            {
                accessorKey: "Partida_especifica",
                label: "Partida específica",
                filterFn: "equalsString",
            },
            {
                accessorKey: "Anio",
                label: "Año",
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
                accessorKey: "Area",
                label: "Área",
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
                accessorKey: "Procedimiento_administrativo",
                label: "Procedimiento administrativo",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
            accessorKey: "Acciones",
            label: "Acciones",
            cell: (info) => (
                <div>
                    <Link
                    to={`/funciones/procedimientos/listado/consolidados/show`}
                    className="bg-customRed text-white px-6 py-2 rounded"
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
        Array.from({ length: 10 }, (_, i) => ({
            id: i,
            No_de_requisicion: `DCS/001/2024`,
            Partida_especifica: `Papeleria - 2111`,
            Anio: `2024`,
            Periodo: `1`,
            Area: `J.U.D. de Adquisiciones`,
            Monto_acumulado: 2500550,
            Procedimiento_administrativo: `Invitación Directa`,
            Acciones: `Ver`,
        })),
        []
    );
    const totalAcumulado = React.useMemo(
        () => 
            data.reduce((acc, curr) => acc + curr.Monto_acumulado, 0), 
        [data]
    );
    const [status, setStatus] = useState('cancelar');
    return (
        <>
            <div>
                <Breadcrumb
                    items={[
                        { href: "/funciones", text: "FUNCIONES" },
                        { href: "/funciones/procedimientos/listado", text: "REGISTRO DE PROCEDIMIENTOS ADMINISTRATIVOS" },
                        { href: "/funciones/procedimientos/listado/consolidados", text: "APARTADO DE CONSOLIDADOS" },
                        { text: "REGISTRO DE CONSOLIDADOS" },
                    ]}
                />
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                        <Regresar enlace="/funciones/procedimientos/listado/consolidados/historial"/>
                    </div>
                    <div className='text-end font-bold text-customRed'>
                        Oficio de Autorización: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                    </div>
                </div>
                <Titulo
                text={"REGISTROS DE CONSOLIDADOS"}
                className="text-lg mt-2 lg:mt-5"
                />
                <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-10">
                    <div className="bg-customRed rounded p-2">
                        <h3 className="text-white font-bold">
                            REGISTRO DE CONSOLIDADOS - ETAPA 3
                        </h3>
                    </div>
                    <CustomTableHistorialEdit columns={columns} data={data} totalAcumulado={totalAcumulado}/>
                </div>
                <form className="w-full rounded-lg">
                    <div className="w-full rounded-lg" style={{ backgroundColor: "#956876" }}>
                        <div className="block rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                            <div className="border-b-2 border-white px-6 py-3 dark:border-white text-start">
                                <h3 className="text-white font-bold uppercase text-xl">datos del procedimiento administrativo</h3>
                            </div>
                            <div className="md:grid md:grid-cols-2 gap-1">
                                <div className="p-6">
                                    <label htmlFor="tipo_adjudicacion" className="block mb-2 text-normal font-medium text-white dark:text-white">Tipo de adjudicación:</label>
                                    <select id="tipo_adjudicacion" className="font-bold w-full border bg-gray-300 border-gray-300 text-base rounded-lg block p-2.5 text-black" disabled>
                                        <option hidden>Seleccionar:</option>
                                        <option className='font-semibold' selected value="US">Adjudicación Directa</option>
                                        <option className='font-semibold' value="CA">Invitación Restringida</option>
                                        <option className='font-semibold' value="FR">Licitación Pública</option>
                                    </select>
                                </div>
                                {status === "autorizar" && (
                                    <div className="p-6">
                                        <label htmlFor="tipo_adjudicacion" className="block mb-2 text-base font-medium text-white dark:text-white">Oficio de adjudicación (PDF):</label>
                                        <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 
                                        focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                        dark:bg-white dark:text-black dark:border-neutral-700 
                                        file:bg-gray-50 file:border-0
                                        file:me-4
                                        file:py-3 file:px-4
                                        dark:file:bg-customGray dark:file:text-black dark:file:font-semibold"/>
                                    </div>
                                )} 
                            </div> 
                            <div className="p-6 -mt-5">
                                <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Observaciones</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-base font-bold rounded-lg border border-gray-300 dark:bg-gray-300 text-black" readOnly>Ejemplo de observaciones 1</textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    ) 
}

export default AdministrativoReadOnlyConsolidados;