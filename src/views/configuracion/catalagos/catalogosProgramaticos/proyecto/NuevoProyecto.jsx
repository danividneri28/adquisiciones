import React from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Titulo from '../../../../../components/Titulo'
import FormProyecto from '../../../../../components/configuracion/catalogosProgramaticos/FormProyecto'
import { Link } from 'react-router-dom'

const NuevoProyecto = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { href: "/home", text: "PROGRAMÁTICOS" },
                    { text: "PROYECTO" },
                ]}
            />

            <Titulo text="PROYECTO" className='mt-14' />

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed2 rounded p-2">
                    <h3 className="text-white font-bold">CREAR NUEVO PROYECTO</h3>
                </div>

                <form className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1">
                    
                    <FormProyecto />

                    <div className="flex justify-end">
                        <Link
                            to="/configuracion/catalogos/programaticos/proyecto"
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

export default NuevoProyecto