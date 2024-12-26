import React from 'react'
import CamposObligatorios from '../../CamposObligatorios'

const FormSubProgPresupuestario = ({ disabled }) => {
    return (
        <>
            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="nombre">
                        *Nombre subprograma presupuestario:
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        disabled={disabled}
                    />
                </div>

                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="codigo">
                        *Codigo de subprograma presupuestario:
                    </label>
                    <input
                        type="text"
                        id="codigo"
                        name="codigo"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        disabled={disabled}
                    />
                </div>
            </div>  

            <label className="font-semibold text-white px-2" htmlFor="nombre">
                *programa presupuestario:
            </label>
            <div className='px-2'>
                <select
                    id="finalidad"
                    name="finalidad"
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                    disabled={disabled}
                >
                    <option value="1">Finalidad 1</option>
                    <option value="2">Finalidad 2</option>
                    <option value="3">Finalidad 3</option>
                </select>
            </div>

            <div className='w-full md:w-1/2 px-2'>
                <label className="font-semibold text-white" htmlFor="estado">
                    *Estado:
                </label>

                <div className='flex'>
                    <input 
                        type="radio" 
                        id="activo" 
                        name="estado" 
                        value="activo" 
                        className='mr-1'
                        defaultChecked
                        disabled={disabled}
                    />
                    <label htmlFor="activo" className='mr-4 text-white'>Activo</label>

                    <input
                        type="radio"
                        id="inactivo"
                        name="estado"
                        value="inactivo"
                        className='mr-1'
                        disabled={disabled}
                    />
                    <label htmlFor="inactivo" className='text-white'>Inactivo</label>
                </div>
            </div>

            <CamposObligatorios />
        </>
    )
}

export default FormSubProgPresupuestario