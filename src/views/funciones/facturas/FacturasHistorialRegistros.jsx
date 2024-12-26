
import Breadcrumb from '../../../components/Breadcrumb'
import Regresar from '../../../components/Regresar'
import Titulo from '../../../components/Titulo'

const FacturasHistorialRegistros = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    {
                        href: "/funciones/facturas/listado",
                        text: "REGISTROS DE COMPROBACIONES Y FACTURAS",
                    },
                    { href: "/funciones/facturas/historial", text: "HISTORIAL DE COMPROBACIONES Y FACTURAS" },
                    { text: "COMPROBACIONES Y FACTURAS" },
                ]}
            />
            <Regresar enlace="/funciones/facturas/historial" />
            <Titulo text={"COMPROBACIÓN Y FACTURAS"} />
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
                    <div className='grid gap-y-4'>
                        <label> <span className='text-red-900 font-bold'>No de Requisición:</span> 0023/2625</label>
                        <label> <span className='text-red-900 font-bold'>Área:</span> Dirección de salud Pública</label>
                        <label> <span className='text-red-900 font-bold'>Tipo:</span> Consumible</label>
                        <label> <span className='text-red-900 font-bold'>Tipo de adjudicación:</span> Invitación Restringida</label>
                        <label> <span className='text-red-900 font-bold'>Proveedor:</span> GOBTI S.A de C.V.</label>
                    </div>
                    <div className='grid gap-y-1'>
                        <label> <span className='text-red-900 font-bold'>Fecha de requisición:</span> 15/01/2023</label>
                        <label> <span className='text-red-900 font-bold'>Partida Especifica:</span> 5151-1 Equipo de cómputo</label>
                        <label> <span className='text-red-900 font-bold'>Monto:</span> $2,500.00</label>
                        <label> <span className='text-red-900 font-bold'>Monto contratado:</span> $2,500.00</label>
                        <label> <span className='text-red-900 font-bold'>Fecha de contrato:</span> 26/01/2023</label>
                        <label> <span className='text-red-900 font-bold'>Folio de contrato:</span> 0023/2625</label>
                    </div>
                    <div className='grid gap-y-1'>
                        <label> <span className='text-red-900 font-bold'>Clave Programática:</span> A00 12 31 45 16 78 89</label>
                        <label> <span className='text-red-900 font-bold'>Fuente de Financiamiento:</span> Financiamiento Interno</label>
                        <label> <span className='text-red-900 font-bold'>No. de procedimiento:</span> 554522151</label>
                        <label> <span className='text-red-900 font-bold'>Fecha de entrega de bien o servicio:</span> 26/01/2023</label>
                        <label> <span className='text-red-900 font-bold'>Fecha del entregable:</span> 554522151</label>
                    </div>
                    <div className='grid gap-y-1 '>
                        <label> <span className='text-red-900 font-bold'>Requisición de Compra:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                        <label> <span className='text-red-900 font-bold'>Oficio de Suficiencia Presupuestal:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                        <label> <span className='text-red-900 font-bold'>Oficio de Autorización:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                        <label> <span className='text-red-900 font-bold'>Oficio de Justificación:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                        <label> <span className='text-red-900 font-bold'>Contrato:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                        <label> <span className='text-red-900 font-bold'>Entregable:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                        <label> <span className='text-red-900 font-bold'>Oficio de Entera Satisfacción:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                        <label> <span className='text-red-900 font-bold'>Factura:</span> <button className='bg-customRed px-6 rounded-xl m-1 text-white'>Ver PDF</button></label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacturasHistorialRegistros
