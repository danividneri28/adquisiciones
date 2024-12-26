import React, { useState } from 'react'
import Breadcrumb from '../../Breadcrumb';
import Titulo from '../../Titulo';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { onError } from '../../../utils/onError';
import { editarActividad } from '../../../api/configuracion/catalogos/programaticos/ActividadesApi';
import FormActividad from './FormActividad';
import AlertSuccess from '../../AlertSuccess';

const EditActividadForm = ({ data, actividadId } ) => {
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
        id_unidad_medida: data.id_unidad_medida,
        id_proyecto: data.id_proyecto,
        id_tipo_actividad: data.id_tipo_actividad,
        anio: data.anio,
        estado: data.estado
    }
    const proyectoId = data.id_proyecto;

    const { register, handleSubmit, formState: { errors }, setError, control} = useForm({ defaultValues });

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarActividad,
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('obtenerActividades');
            setShowSuccess(true);
        }
    })

    const handleForm = (formData) => {
        const data = { ...formData, id: actividadId }
        mutate(data);
    }

    return (
        <>
            { showSuccess && <AlertSuccess route='/configuracion/catalogos/programaticos/actividades' /> }
            <Breadcrumb
                items={[
                    { href: "/home", text: "CONFIGURACIÓN" },
                    { href: "/home", text: "CATÁLAGOS" },
                    { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
                    { href: "/home", text: "REGISTRO DE ACTIVIDADES" },
                    { text: "ACTIVIDAD" },
                ]}
            />

            <Titulo text="ACTIVIDAD" className='mt-14' />

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed2 rounded p-2">
                    <h3 className="text-white font-bold">ACTIVIDAD</h3>
                </div>

                <form 
                    className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1"
                    onSubmit={handleSubmit(handleForm)}
                >
                    
                    <FormActividad 
                        register={register}
                        errors={errors}
                        control={control}
                        disabled={ !isEditing }
                        defaultValues={defaultValues}
                        proyectoId={proyectoId}
                    />

                    <div className="flex justify-end">
                        <Link
                            to="/configuracion/catalogos/programaticos/actividades"
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

export default EditActividadForm