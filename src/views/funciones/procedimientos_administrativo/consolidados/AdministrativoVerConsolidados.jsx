import React from 'react'
import Breadcrumb from '../../../../components/Breadcrumb'
import Titulo from '../../../../components/Titulo'
import Regresar from '../../../../components/Regresar'

const AdministrativoVerConsolidados = () => {
    return (
        <>
            <div>
                <Breadcrumb
                    items={[
                        { href: "/funciones", text: "FUNCIONES" },
                        { href: "/funciones/procedimientos/listado", text: "REGISTRO DE PROCEDIMIENTOS ADMINISTRATIVOS" },
                        { href: "/funciones/procedimientos/listado/consolidados", text: "APARTADO DE CONSOLIDADOS" },
                        { href: "/funciones/procedimientos/listado/consolidados/editar", text: "REGISTRO DE CONSOLIDADOS" },
                        { text: "REQUISICIÓN" },
                    ]}
                />
                <Regresar enlace="/funciones/procedimientos/listado/consolidados/editar"/>
                <Titulo
                text={"REQUISICIÓN"}
                className="text-lg mt-2 lg:mt-5"
                />
                <div className="w-full rounded-lg mt-7" style={{ backgroundColor: "#956876" }}>
                    <div className="block rounded-lg text-sm md:text-base shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                        <div className="border-b-2 border-white px-6 py-3 dark:border-white text-start">
                            <h3 className="text-white font-bold uppercase text-xl">datos de consulta</h3>
                        </div>
                        <div className="w-full bg-white">
                            <div className="grid grid-cols-1 md:grid md:grid-cols-4 md:gap-1 text-center text-sm">
                                <div className='grid grid-rows-1 gap-3 md:md:grid-rows-2 md:gap-6 ml-5 mb-6 mt-2'>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>No. de Requisición: </p>
                                        <p className='text-black font-semibold'>12356324</p>
                                    </div>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>Área: </p>
                                        <p className='text-black font-semibold'>Sudirección de Tecnologías</p>
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 gap-3 md:md:grid-rows-2 md:gap-6 ml-5 mb-6 mt-2'>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>Clave Programática: </p>
                                        <p className='text-black font-semibold line-clamp-1 md:line-clamp-none'>A00 A00 01 08 05 01 03 11 01 E</p>
                                    </div>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>Monto individual: </p>
                                        <p className='text-black font-semibold'>$32,250.00</p>
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 gap-3 md:md:grid-rows-2 md:gap-6 ml-5 mb-6 mt-2'>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>Fuente de financiamiento: </p>
                                        <p className='text-black font-semibold'>Financiento interno</p>
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 gap-2 md:md:grid-rows-2 md:gap-0 ml-5 mb-6 align-items-start mr-5 mt-2'>
                                    <div className='text-end font-bold text-customRed'>
                                        Requisición de compra: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                    </div>
                                    <div className='text-end font-bold text-customRed text-sm md:text-base md:block hidden'>
                                        Oficio de suficiencia presupuestal: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                    </div>
                                    <div className='text-end font-bold text-customRed text-sm md:text-base md:hidden'>
                                        Oficio de suficiencia presup.: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg mt-7" style={{ backgroundColor: "#956876" }}>
                    <div className="block rounded-lg text-sm md:text-base shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                        <div className="border-b-2 border-white px-6 py-3 dark:border-white text-start">
                            <h3 className="text-white font-bold uppercase text-xl">datos de registro</h3>
                        </div>
                        <div className="w-full" style={{ backgroundColor: "#956876" }}>
                            <div className="grid grid-cols-1 md:grid md:grid-cols-4">
                                <div className='mb-6 m-6'>
                                    <label htmlFor="countries" className="block mb-2 text-normal font-bold text-gray-900 dark:text-white">
                                        Compra consolidada:
                                    </label>
                                    <input type="text" id="disabled-input" className="mb-4 bg-gray-400 border border-gray-400 text-gray-900 text-base font-bold rounded-lg block w-full p-2.5 cursor-not-allowed dark:text-black" value="Si" disabled/>
                                </div>
                                <div className='mb-6 m-6'>
                                    <label htmlFor="countries" className="block mb-2 text-normal font-bold text-gray-900 dark:text-white">
                                        Tipo de compra:
                                    </label>
                                    <input type="text" id="disabled-input" className="mb-4 bg-gray-400 border border-gray-400 text-gray-900 text-base font-bold rounded-lg block w-full p-2.5 cursor-not-allowed dark:text-black" value="Papeleria - 2110" disabled/>
                                </div>
                                <div className='mb-6 m-6'>
                                    <label htmlFor="countries" className="block mb-2 text-normal font-bold text-gray-900 dark:text-white">
                                        Año:
                                    </label>
                                    <input type="text" id="disabled-input" className="mb-4 bg-gray-400 border border-gray-400 text-gray-900 text-base font-bold rounded-lg block w-full p-2.5 cursor-not-allowed dark:text-black" value={(new Date().getFullYear())} disabled/>
                                </div>
                                <div className='mb-6 m-6'>
                                    <label htmlFor="countries" className="block mb-2 text-normal font-bold text-gray-900 dark:text-white">
                                        Periodo:
                                    </label>
                                    <input type="text" id="disabled-input" className="mb-4 bg-gray-400 border border-gray-400 text-gray-900 text-base font-bold rounded-lg block w-full p-2.5 cursor-not-allowed dark:text-black" value="Periodo 1" disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdministrativoVerConsolidados;