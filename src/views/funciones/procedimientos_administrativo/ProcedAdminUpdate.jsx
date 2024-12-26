import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import Titulo from '../../../components/Titulo'
import Regresar from '../../../components/Regresar'

const ProcedAdminUpdate = () => {
    return (
        <>
            <div>
                <Breadcrumb
                    items={[
                        { href: "/funciones", text: "FUNCIONES" },
                        { href: "/funciones/procedimientos/listado", text: "REGISTRO DE PROCEDIMIENTOS ADMINISTRATIVOS" },
                        { text: "REQUISICIÓN" },
                    ]}
                />
                <Regresar enlace="/funciones/procedimientos/listado"/>
                <Titulo
                text={"REQUISICIÓN"}
                className="text-lg mt-2 lg:mt-10"
                />
                <div className="w-full rounded-lg mt-7" style={{ backgroundColor: "#956876" }}>
                    <div className="block rounded-lg text-sm md:text-base shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                        <div className="border-b-2 border-white px-6 py-3 dark:border-white text-start">
                            <h3 className="text-white font-bold uppercase text-xl">datos de consulta</h3>
                        </div>
                        {/* MOBILE */}
                        <div className="w-full bg-white md:hidden">
                            <div className="grid grid-cols-1 md:grid md:grid-cols-4 md:gap-0 text-center text-sm md:text-xs">
                                <div className='grid grid-rows-1 gap-1 md:md:grid-rows-2 md:gap-6 ml-5 mb-1 mt-2'>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>No. de Requisición: </p>
                                        <p className='text-black font-semibold'>0026/2024</p>
                                    </div>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>Área: </p>
                                        <p className='text-black font-semibold'>Sudirección de Tecnologías</p>
                                    </div>
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>Tipo: </p>
                                        <p className='text-black font-semibold'>Consumible</p>
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 gap-1 md:md:grid-rows-2 md:gap-6 ml-5 mb-1'>
                                    <div className="inline-flex md:-ml-12" role="group">
                                        <p className='text-customRed font-bold'>Fecha de requisición: </p>
                                        <p className='text-black font-semibold line-clamp-1 md:line-clamp-none'>15/08/2023</p>
                                    </div>
                                    <div className="inline-flex md:-ml-24 text-start" role="group">
                                        <p className='text-customRed font-bold'>Partida específica: </p>
                                        <p className='text-black font-semibold'>5151-Equipo de cómputo y tecnologías de la información</p>
                                    </div>
                                    <div className="inline-flex md:-ml-12" role="group">
                                        <p className='text-customRed font-bold'>Monto: </p>
                                        <p className='text-black font-semibold'>$35,250.00</p>
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 gap-1 md:md:grid-rows-2 md:gap-6 ml-5 mb-1'>
                                    <div className="inline-flex text-start" role="group">
                                        <p className='text-customRed font-bold'>Clave Programática: </p>
                                        <p className='text-black font-semibold'>A00 A00 01 08 05 01 01 03 01 01 E</p>
                                    </div>
                                    <div className="inline-flex text-start md:-mt-6" role="group">
                                        <p className='text-customRed font-bold'>Fuente de financiamiento: </p>
                                        <p className='text-black font-semibold'>Financiamiento interno</p>
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 gap-2 md:md:grid-rows-2 md:gap-0 ml-5 mb-6 align-items-start mr-5 mt-2'>
                                    <div className='text-start font-bold text-customRed text-sm md:text-xs md:block'>
                                        Requisición de compra.: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                    </div>
                                    <div className='text-start font-bold text-customRed text-sm md:text-xs md:hidden md:-mt-10'>
                                        Oficio de suficiencia presup: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* DESK */}
                        <div className="w-full bg-white hidden md:block">
                            <div className="flex">
                                <div className="relative text-black w-5/6">
                                    <table className="w-full text-sm text-left rtl:text-right">
                                        <tbody>
                                            <tr>
                                                <td className="px-2 py-4 font-medium whitespace-nowrap">
                                                    <b className='text-customRed text-bold'>No de requisición:</b> 0026/2024
                                                </td>
                                                <td className="px-2 py-4 font-medium">
                                                    <b className='text-customRed text-bold'>Fecha de requisición:</b> 15/08/2024
                                                </td>
                                                <td className="px-2 py-4 font-medium">
                                                    <b className='text-customRed text-bold'>Clave Programática:</b> A00 A00 01 08 05 01 01 03 11 01 01 E
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-4 font-medium">
                                                    <b className='text-customRed text-bold'>Área:</b> Subdirección de Tecnologías
                                                </td>
                                                <td className="px-2 py-4 font-medium">
                                                    <b className='text-customRed text-bold'>Partida específica:</b> 5151-Equipo de cómputo y de tecnologías de la información
                                                </td>
                                                <td className="px-2 py-4 font-medium">
                                                    <b className='text-customRed text-bold'>Fuente de financiamiento:</b> Financiamiento interno
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-4 font-medium whitespace-nowrap">
                                                    <b className='text-customRed text-bold'>Tipo:</b> Consumible
                                                </td>
                                                <td className="px-2 py-4 font-medium">
                                                    <b className='text-customRed text-bold'>Monto:</b> $32,250.00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="relative text-black w-2/6 mr-1">
                                    <table className="w-full text-sm text-left rtl:text-right mt-3.5">
                                        <tbody>
                                            <tr className='text-end'>
                                                <p className='mb-2'>
                                                    <b className='text-customRed font-bold'>Requisición de compra:</b> <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                                </p>
                                                <p className='text-customRed font-bold mb-2'>
                                                    Oficio de suficiencia presupuestal: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                                </p>
                                                <p className='text-customRed font-bold'>
                                                    Oficio de autorización.: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                                </p>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <form className="w-full rounded-lg">
                        <div className="w-full rounded-lg" style={{ backgroundColor: "#956876" }}>
                            <div className="block rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                                <div className="border-b-2 border-white px-6 py-3 dark:border-white text-start">
                                    <h3 className="text-white font-bold uppercase text-xl">datos del procedimiento administrativo</h3>
                                </div>
                                <div className="md:grid md:grid-cols-2 gap-1">
                                    <div className="p-6">
                                        <label htmlFor="tipo_adjudicacion" className="block mb-2 text-normal font-medium text-white dark:text-white">Tipo de adjudicación:</label>
                                        <select id="tipo_adjudicacion" className="font-bold w-full bg-white text-black border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-950 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option hidden>Seleccionar:</option>
                                            <option className='font-semibold' value="US">Adjudicacion Directa</option>
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
                                    <label htmlFor="tipo_adjudicacion" className="block mb-2 text-base font-medium text-white dark:text-white">Estado:</label>
                                    <div className="flex">
                                        <div className="flex items-center me-4">
                                            <input id="inline-radio" type="radio" value="autorizar" checked={status === 'autorizar'} onChange={() => setStatus('autorizar')} 
                                            name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="inline-radio" className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">Autorizar</label>
                                        </div>
                                        <div className="flex items-center me-4">
                                            <input id="inline-2-radio" type="radio" value="cancelar" onChange={() => setStatus('cancelar')} 
                                            name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="inline-2-radio" className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">Cancelar</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 -mt-5">
                                    <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Observaciones</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe aquí tus observaciones"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <button type="submit" className="text-white bg-customRed hover:bg-customRed focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-12 py-2.5 me-2 mb-2 dark:bg-customRed dark:hover:bg-customRed focus:outline-none dark:focus:ring-blue-800">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProcedAdminUpdate