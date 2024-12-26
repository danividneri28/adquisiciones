import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import Titulo from '../../../components/Titulo'

const FacturasConsolidadosHistorialShow = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    { href: "/funciones/facturas/listado", text: "REGISTROS DE COMPROBACIÓN Y FACTURAS" },
                    { href: "/funciones/facturas/consolidados", text: "APARTADO DE CONSOLIDADOS" },
                    { href: "/funciones/facturas/consolidados/historial", text: "HISTORIAL DE CONSOLIDADOS" },
                    { href: "/funciones/facturas/consolidados/historial/registros", text: "REGISTROS DE CONSOLIDADOS" },
                    { text: "REQUISICIÓN" },
                ]}
            />
            <a
                href="/funciones/facturas/consolidados/historial/registros"
                className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer"
            >
                REGRESAR
            </a>
            <div>

            </div>
            <Titulo text={'REQUISICIÓN'} className='mt-14' />
            <div className="bg-gray-100  mt-8 rounded-lg">
                <div
                    className="rounded p-3 mb-1"
                    style={{ backgroundColor: "#956876" }}
                >
                    <h3 className="text-white font-bold uppercase text-xl">
                        DATOS GENERALES DE LA REQUISICIÓN
                    </h3>
                </div>
                <div className="px-5 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className='text-red-900 font-bold'>No de Requisición: </label>
                        <span>0023/2625</span><br />
                        <label className='text-red-900 font-bold'>Área: </label>
                        <span>Dirección de salud Pública</span><br />
                    </div>
                    <div>
                        <label className='text-red-900 font-bold'>Clave Programática: </label>
                        <span>18 02 14 78 96 54 12 36 </span><br />
                        <label className='text-red-900 font-bold'>Monto: </label>
                        <span>2,500,000.00</span><br />
                    </div>
                    <div>
                        <label className='text-red-900 font-bold'>Fuente de Financiamiento: </label>
                        <span>Financiamiento Interno</span><br />
                    </div>
                    <div>
                        <label className='text-red-900 font-bold'>Requisicion de compra: </label>
                        <span>Ver PDF</span><br />
                        <label className='text-red-900 font-bold'>Oficio de Suficiencia Presupuestal: </label>
                        <span>Ver PDF</span><br />
                    </div>
                </div>
            </div>
            <div className="bg-gray-100  mt-8 rounded-lg">
                <div
                    className="rounded p-3 mb-1"
                    style={{ backgroundColor: "#956876" }}
                >
                    <h3 className="text-white font-bold uppercase text-xl">
                        DATOS DE REGISTRO
                    </h3>
                </div>
                <form
                    className="w-full p-6 rounded-lg"
                    style={{ backgroundColor: "#956876" }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="">
                            <label className="block text-sm font-medium text-white">
                                Compra consolidada:
                            </label>
                            <input
                                type="text"
                                name="nombreArea"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                readOnly
                            />
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-white">
                                Tipo de compra:
                            </label>
                            <input
                                type="text"
                                name="claveArea"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                readOnly
                            />
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-white">
                                Año:
                            </label>
                            <input
                                type="text"
                                name="claveArea"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                readOnly
                            />
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-white">
                                Periodo:
                            </label>
                            <input
                                type="text"
                                name="claveArea"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                readOnly
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FacturasConsolidadosHistorialShow
