import React from 'react'
import CamposObligatorios from '../../CamposObligatorios'

const FormProgPresupuestario = ({ disabled }) => {
    return (
        <>
            <label className="font-semibold text-white" htmlFor="nombre">
                *Nombre del programa presupuestario:
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
                *Código del programa presupuestario:
            </label>
            <input
                type="text"
                id="codigo"
                name="codigo"
                className="border border-gray-300 rounded px-2 py-1"
                disabled={disabled}
            />
            
            <label className="font-semibold text-white" htmlFor="pilar">
                *Pilar:
            </label>
            <select
                id="pilar"
                name="pilar"
                className="border border-gray-300 rounded px-2 py-1"
                disabled={disabled}
            >
                <option value="">Seleccione un pilar</option>
                <option value="1">Pilar 1</option>
                <option value="2">Pilar 2</option>
                <option value="3">Pilar 3</option>
            </select>

            <label className="font-semibold text-white" htmlFor="subfuncion">
                *Subfunción:
            </label>
            <select
                id="subfuncion"
                name="subfuncion"
                className="border border-gray-300 rounded px-2 py-1"
                disabled={disabled}
            >
                <option value="">Seleccione una subfunción</option>
                <option value="1">Subfunción 1</option>
                <option value="2">Subfunción 2</option>
                <option value="3">Subfunción 3</option>
                <option value="4">Subfunción 4</option>
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

export default FormProgPresupuestario