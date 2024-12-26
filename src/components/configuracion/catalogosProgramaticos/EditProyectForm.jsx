import React, { useState } from 'react'
import Breadcrumb from '../../Breadcrumb';
import Titulo from '../../Titulo';
import { Link } from 'react-router-dom';
import FormProyecto from './FormProyecto';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { onError } from '../../../utils/onError';
import { editarProyecto } from '../../../api/configuracion/catalogos/programaticos/ProyectoApi';
import AlertSuccess from '../../AlertSuccess';

const EditProyectForm = ({ data, projectId } ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const defaultValues = {
        nombre: data.nombre,
        codigo: data.codigo,
        descripcion: data.descripcion,
        id_subprograma: data.id_subprograma,
        id_unidad_responsable: data.id_unidad_responsable,
        estado: data.estado,
    }

    const { register, handleSubmit, formState: { errors }, setError, control} = useForm({ defaultValues });

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarProyecto,
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('obtenerProyectos');
            setShowSuccess(true);
        }
    })

    const handleForm = (formData) => {
        const data = { ...formData, id: projectId }
        mutate(data);
    }

    return (
        <>
            { showSuccess && <AlertSuccess route='/configuracion/catalogos/programaticos/proyecto' /> }
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { href: "/home", text: "REGISTRO DE PROYECTOS" },
                    { text: "PROYECTO" },
                ]}
            />

            <Titulo text="PROYECTO" className='mt-14' />

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed2 rounded p-2">
                    <h3 className="text-white font-bold">PROYECTO</h3>
                </div>
                <form 
                    className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1"
                    onSubmit={handleSubmit(handleForm)}
                >
                    <FormProyecto
                        register={register}
                        errors={errors}
                        control={control}
                        disabled={!isEditing} 
                        defaultValues={defaultValues}
                    />

                    <div className="flex justify-end">
                        <Link
                            to="/configuracion/catalogos/programaticos/proyecto"
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

export default EditProyectForm