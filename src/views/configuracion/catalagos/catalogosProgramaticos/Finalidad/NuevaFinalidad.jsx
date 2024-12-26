import React from 'react'
import { Link } from 'react-router-dom'
import Titulo from '../../../../../components/Titulo'
import Breadcrumb from '../../../../../components/Breadcrumb'
import FormFinalidad from '../../../../../components/configuracion/catalogosProgramaticos/FormFinalidad'

const NuevaFinalidad = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { href: "/home", text: "REGISTRO DE FINALIDADES" },
                    { text: "FINALIDAD" },
                ]}
            />

            <Titulo text="FINALIDAD" className='mt-14' />

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed2 rounded p-2">
                    <h3 className="text-white font-bold">NUEVA FINALIDAD</h3>
                </div>

                <form className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1">
                    
                    <FormFinalidad />

                    <div className="flex justify-end">
                        <Link
                            to="/configuracion/catalogos/programaticos/finalidad"
                            className="bg-customRed text-white px-4 py-2 rounded"
                        >
                            Regresar
                        </Link>

                        <button className="bg-customYellow text-white px-4 py-2 rounded ml-4">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NuevaFinalidad