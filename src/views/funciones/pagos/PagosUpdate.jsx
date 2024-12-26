import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import Regresar from '../../../components/Regresar'
import Titulo from '../../../components/Titulo'

const PagosUpdate = () => {
    return (
        <>
            <div>
                <Breadcrumb
                    items={[
                        { href: "/funciones", text: "FUNCIONES" },
                        { href: "/funciones/pagos", text: "REGISTRO DE PAGOS" },
                        { text: "PAGO" },
                    ]}
                />
                <Regresar enlace="/funciones/pagos"/>
                <Titulo
                text={"PAGO"}
                className="text-lg mt-2 lg:mt-3"
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
                                    <div className="inline-flex" role="group">
                                        <p className='text-customRed font-bold'>Proveedor: </p>
                                        <p className='text-black font-semibold'>GOBTI S.A DE C.V</p>
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
                                    <div className="inline-flex md:-ml-12" role="group">
                                        <p className='text-customRed font-bold'>Monto contratado: </p>
                                        <p className='text-black font-semibold'>$35,000.00</p>
                                    </div>
                                    <div className="inline-flex md:-ml-12" role="group">
                                        <p className='text-customRed font-bold'>Folio del contrato: </p>
                                        <p className='text-black font-semibold'>001254825</p>
                                    </div>
                                    <div className="inline-flex md:-ml-12" role="group">
                                        <p className='text-customRed font-bold'>Folio del factura: </p>
                                        <p className='text-black font-semibold'>12564821AS</p>
                                    </div>
                                </div>
                                <div className='grid grid-rows-1 gap-1 md:md:grid-rows-2 md:gap-6 ml-5 mb-1'>
                                    <div className="inline-flex text-start" role="group">
                                        <p className='text-customRed font-bold'>Clave Programática: <b className='text-black font-semibold'>A00 A00 01 08 05 01 01 03 01 01 E</b></p>
                                    </div>
                                    <div className="inline-flex text-start md:-mt-6" role="group">
                                        <p className='text-customRed font-bold'>Fuente de financiamiento: <b className='text-black font-semibold'>Financiamiento interno</b></p>
                                    </div>
                                    <div className="inline-flex text-start md:-mt-6" role="group">
                                        <p className='text-customRed font-bold'>No. de procedimiento: </p>
                                        <p className='text-black font-semibold'>5548785641</p>
                                    </div>
                                    <div className="inline-flex text-start md:-mt-6" role="group">
                                        <p className='text-customRed font-bold'>Fecha de entrega del <br /> bien o servicio: <b className='text-black font-semibold'>25/10/2024</b></p>
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
                                                <p className='text-customRed font-bold mb-2'>
                                                    Oficio de autorización.: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
                                                </p>
                                                <p className='text-customRed font-bold'>
                                                    Oficio de justificación.: <button className='rounded-full bg-customRed px-7 text-white font-bold'>Ver PDF</button>
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
                                        <select id="tipo_adjudicacion" className="font-bold w-full bg-white text-black border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-950 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
                                            <option hidden>Seleccionar:</option>
                                            <option className='font-semibold' value="US">Adjudicacion Directa</option>
                                            <option className='font-semibold' value="CA" selected>Invitación Restringida</option>
                                            <option className='font-semibold' value="FR">Licitación Pública</option>
                                        </select>
                                    </div> 
                                </div> 
                                <div className="p-6 -mt-5">
                                    <label htmlFor="message" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Observaciones</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-black font-bold rounded-lg border border-gray-300 bg-gray-300 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly>Compra aprobada</textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PagosUpdate