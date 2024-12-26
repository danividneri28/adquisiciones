import React, { useState } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb';
import Titulo from '../../../../../components/Titulo';
import FormSubProgPresupuestario from '../../../../../components/configuracion/catalogosProgramaticos/FormSubProgPresupuestario';
import { Link } from 'react-router-dom';

const EditarPrograma = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

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
                    <h3 className="text-white font-bold">SUBPROGRAMA PRESUPUESTARIOS</h3>
                </div>

                <form className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1">

                    <FormSubProgPresupuestario disabled={!isEditing} />
                    
                    <div className="flex justify-end">
                        <Link
                            to="/configuracion/catalogos/programaticos/subprogramaPresupuestario"
                            className="bg-customRed text-white px-4 py-2 rounded"
                        >
                            Regresar
                        </Link>

                        {
                            isEditing ? (
                                <button
                                    type="submit"
                                    className="bg-customYellow text-white px-4 py-2 rounded ml-4"
                                >
                                    Guardar
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    role='button'
                                    className="bg-customYellow text-white px-4 py-2 rounded ml-4"
                                    onClick={handleEditClick}
                                >
                                    Editar
                                </button>
                            )
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditarPrograma