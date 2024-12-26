import React from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Titulo from '../../../../../components/Titulo'
import { Link } from 'react-router-dom'
import FormSubProgPresupuestario from '../../../../../components/configuracion/catalogosProgramaticos/FormSubProgPresupuestario'

const NuevoPrograma = () => {
    return (
        <>
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { href: "/home", text: "REGISTRO DE SUBPROGRAMAS PRESUPUESTARIOS" },
                    { text: "SUBPROGRAMA PRESUPUESTARIO" },
                ]}
            />

            <Titulo text="SUBPROGRAMA PRESUPUESTARIO" className='mt-14' />

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed2 rounded p-2">
                    <h3 className="text-white font-bold">CREAR SUBPROGRAMA PRESUPUESTARIOS</h3>
                </div>

                <form className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1">

                    <FormSubProgPresupuestario />
                    
                    <div className="flex justify-end">
                        <Link
                            to="/configuracion/catalogos/programaticos/subprogramaPresupuestario"
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

export default NuevoPrograma