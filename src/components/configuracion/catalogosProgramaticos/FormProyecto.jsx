import React from 'react'
import CamposObligatorios from '../../CamposObligatorios'

const FormProyecto = ({ disabled }) => {
    return (
        <>
            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="nombre">
                        *Nombre del proyecto:
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
                        *Codigo del proyecto:
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

            <label className="font-semibold text-white" htmlFor="descripcion">
                *Descripción:
            </label>
            <textarea
                id="descripcion"
                name="descripcion"
                className="border border-gray-300 rounded px-2"
                rows="6"
                disabled={disabled}
            ></textarea>

            <label className="font-semibold text-white" htmlFor="subprograma">
                *Subprograma:
            </label>
            <select
                id="subprograma"
                name="subprograma"
                className="border border-gray-300 rounded px-2 py-1"
                disabled={disabled}
            >
                <option value="1">Subprograma 1</option>
                <option value="2">Subprograma 2</option>
            </select>

            <label className="font-semibold text-white" htmlFor="unidadResponsable">
                *Unidad responsable:
            </label>
            <select
                id="unidadResponsable"
                name="unidadResponsable"
                className="border border-gray-300 rounded px-2 py-1"
                disabled={disabled}
            >
                <option value="1">Unidad 1</option>
                <option value="2">Unidad 2</option>
            </select>

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

            <CamposObligatorios />
        </>
    )
}

export default FormProyecto