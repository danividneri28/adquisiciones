import React from 'react'
import CamposObligatorios from '../../CamposObligatorios'

const FormActividad = ({ disabled }) => {
    return (
        <>
            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="nombre">
                        *Nombre de la actividad:
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
                        *Código de la actividad:
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

            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="descripcion">
                        *Descripción de la actividad:
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        rows="6"
                        disabled={disabled}
                    ></textarea>
                </div>

                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="unidadMedida">
                        *Unidad de medida:
                    </label>
                    <select
                        id="unidadMedida"
                        name="unidadMedida"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        disabled={disabled}
                    >
                        <option value="1">Unidad 1</option>
                        <option value="2">Unidad 2</option>
                    </select>
                </div>
            </div>  

            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="proyecto">
                        *Proyecto:
                    </label>
                    <input
                        type="text"
                        id="proyecto"
                        name="proyecto"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        disabled={disabled}
                    />
                </div>

                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="year">
                        *Año:
                    </label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        disabled={disabled}
                    />
                </div>
            </div>

            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="tipo">
                        *Tipo de actividad:
                    </label>
                    <input
                        type="text"
                        id="tipo"
                        name="tipo"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        disabled={disabled}
                    />
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
            </div>

            <CamposObligatorios />
        </>
    )
}

export default FormActividad