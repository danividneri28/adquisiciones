import { useState } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import Titulo from '../../../components/Titulo';
import Regresar from '../../../components/Regresar';

    

const ProveedorContratoCreate = () => {

    const [selectedProvider, setSelectedProvider] = useState('')
    const [status, setStatus] = useState('cancelar')
    const [observations, setObservations] = useState('')
    const [contractDate, setContractDate] = useState('')
    const [contractFile, setContractFile] = useState('')
    const [contractNumber, setContractNumber] = useState('')
    const [contractAmount, setContractAmount] = useState('')
    const [procedureNumber, setProcedureNumber] = useState('')
    const [deliveryDate, setDeliveryDate] = useState('')

    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/funciones", text: "FUNCIONES" },
                    {
                        href: "/funciones/proveedor/listado",
                        text: "REGISTROS DE PROVEEDORES Y CONTRATOS",
                    },
                    { text: "PROVEEDOR Y CONTRATO" },
                ]}
            />
            <Regresar enlace="/funciones/proveedor/listado" />
            <Titulo text={"PROVEEDOR Y CONTRATO"} />
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
                        <label> <span className='text-red-900 font-bold'>tipo:</span> Consumible</label>
                        <label> <span className='text-red-900 font-bold'>Tipo de adjudicación:</span> Invitación Restringida</label>
                    </div>
                    <div className='grid gap-y-1'>
                        <label> <span className='text-red-900 font-bold'>Fecha de requisición:</span> 15/01/2023</label>
                        <label> <span className='text-red-900 font-bold'>Partida Especifica:</span> 5151-1 Equipo de cómputo</label>
                        <label> <span className='text-red-900 font-bold'>Monto:</span> $2,500.00</label>
                    </div>
                    <div className='grid gap-y-1'>
                        <label> <span className='text-red-900 font-bold'>Clave Programática:</span> A00 12 31 45 16 78 89</label>
                        <label> <span className='text-red-900 font-bold'>Fuente de Financiamiento:</span> Financiamiento Interno</label>
                    </div>
                    <div className='grid gap-y-4 '>
                        <label> <span className='text-red-900 font-bold'>Requisición de Compra:</span> Ver PDF</label>
                        <label> <span className='text-red-900 font-bold'>Oficio de Suficiencia Presupuestal:</span> Ver PDF</label>
                        <label> <span className='text-red-900 font-bold'>Oficio de Autorización:</span> Ver PDF</label>
                        <label> <span className='text-red-900 font-bold'>Oficio de Justificación:</span> Ver PDF</label>
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
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Column */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <div>
                                <label htmlFor="provider" className="block text-white mb-2">Seleccionar proveedor:</label>
                                <select
                                    id="provider"
                                    className="w-full p-2 rounded bg-white"
                                    value={selectedProvider}
                                    onChange={(e) => setSelectedProvider(e.target.value)}
                                >
                                    <option value="">Seleccionar proveedor</option>
                                    <option value="proveedor1">Proveedor 1</option>
                                    <option value="proveedor2">Proveedor 2</option>
                                    <option value="proveedor3">Proveedor 3</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white mb-2">Estado:</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center text-white">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="autorizar"
                                            checked={status === 'autorizar'}
                                            onChange={() => setStatus('autorizar')}
                                            className="mr-2"
                                        />
                                        Autorizar
                                    </label>
                                    <label className="flex items-center text-white">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="cancelar"
                                            checked={status === 'cancelar'}
                                            onChange={() => setStatus('cancelar')}
                                            className="mr-2"
                                        />
                                        Cancelar
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="observations" className="block text-white mb-2">Observaciones:</label>
                                <textarea
                                    id="observations"
                                    className="w-full p-2 rounded bg-white"
                                    rows={4}
                                    value={observations}
                                    onChange={(e) => setObservations(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        {/* Right Column (Conditional) */}
                        {status === 'autorizar' && (
                            <div className="w-full md:w-1/2 space-y-6">
                                <div>
                                    <label htmlFor="contractDate" className="block text-white mb-2">Adjuntar contrato PDF:</label>
                                    <input
                                        type="file"
                                        id="contractDate"
                                        className="w-full p-2 rounded bg-white"
                                        value={contractFile}
                                        onChange={(e) => setContractFile(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contractDate" className="block text-white mb-2">Fecha de contrato:</label>
                                    <input
                                        type="date"
                                        id="contractDate"
                                        className="w-full p-2 rounded bg-white"
                                        value={contractDate}
                                        onChange={(e) => setContractDate(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contractNumber" className="block text-white mb-2">Folio de contrato:</label>
                                    <input
                                        type="text"
                                        id="contractNumber"
                                        className="w-full p-2 rounded bg-white"
                                        value={contractNumber}
                                        onChange={(e) => setContractNumber(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contractAmount" className="block text-white mb-2">Monto contratado:</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2 text-gray-500">$</span>
                                        <input
                                            type="number"
                                            id="contractAmount"
                                            className="w-full p-2 pl-6 rounded bg-white"
                                            value={contractAmount}
                                            onChange={(e) => setContractAmount(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="procedureNumber" className="block text-white mb-2">Número de procedimiento:</label>
                                    <input
                                        type="text"
                                        id="procedureNumber"
                                        className="w-full p-2 rounded bg-white"
                                        value={procedureNumber}
                                        onChange={(e) => setProcedureNumber(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="deliveryDate" className="block text-white mb-2">Fecha de entrega de bien o servicio:</label>
                                    <input
                                        type="date"
                                        id="deliveryDate"
                                        className="w-full p-2 rounded bg-white"
                                        value={deliveryDate}
                                        onChange={(e) => setDeliveryDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>

        </>
    )
}

export default ProveedorContratoCreate
