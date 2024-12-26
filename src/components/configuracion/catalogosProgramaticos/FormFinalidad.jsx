import React from 'react'
import CamposObligatorios from '../../CamposObligatorios'

const FormFinalidad = ({ disabled }) => {
    return (
        <>
            <label className="font-semibold text-white" htmlFor="nombre">
                *Nombre de finalidad:
            </label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                className="border border-gray-300 rounded px-2 py-1"
                disabled={disabled}
            />

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

            <label className="font-semibold text-white" htmlFor="codigo">
                *Código de finalidad:
            </label>
            <input
                type="text"
                id="codigo"
                name="codigo"
                className="border border-gray-300 rounded px-2 py-1"
                disabled={disabled}
            />

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

export default FormFinalidad