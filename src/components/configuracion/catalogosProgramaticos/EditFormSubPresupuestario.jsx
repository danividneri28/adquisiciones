import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Breadcrumb';
import FormProgPresupuestario from './FormProgPresupuestario';
import { onError } from '../../../utils/onError';
import {editarSubProgramaPresupuestario} from '../../../api/configuracion/ApiSubProgramaPresupuestario'

import Titulo from '../../Titulo';
import FormSubProgPresupuestario from './FormSubProgPresupuestario';
import AlertSuccess from '../../AlertSuccess';

export default function EditFormSubPresupuestario({ data,dataPP,projectId }) {


  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const defaultValues = {
    nombre: data[0].nombre,
    codigo_presupuestario: data[0].codigo_presupuestario,
    id_programa_presupuestario: data[0].id_programa_presupuestario,
    estado: data[0].estado,
  }

  const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues });

  const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarSubProgramaPresupuestario,
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: (data) => {
            setShowSuccess(true);
        }
    })

    const handleForm = (formData) => {
        const data = {
            ...formData,
            id: projectId
        }

        mutate(data);
    }

  return (
    <>
        { showSuccess && <AlertSuccess route='/configuracion/catalogos/programaticos/subprogramaPresupuestario' /> }
       <Breadcrumb
                items={[
                    { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
                    { href: "/configuracion/catalogos/menu", text: "CATÁLAGOS" },
                    { href: "/configuracion/menu/catalogos/programaticos", text: "CATÁLAGOS PROGRAMÁTICOS"},
                    { href: "/configuracion/catalogos/programaticos/subprogramaPresupuestario",text: "REGISTRO DE SUBPROGRAMAS PRESUPUESTARIOS"},
                    { text: "SUBPROGRAMA PRESUPUESTARIO" },
                ]}
            />

            <Titulo text="SUBPROGRAMA PRESUPUESTARIO" className='mt-14' />

            <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
                <div className="bg-customRed2 rounded p-2">
                    <h3 className="text-white font-bold">SUBPROGRAMA PRESUPUESTARIOS</h3>
                </div>

                <form 
                    className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1"
                    onSubmit={handleSubmit(handleForm)}
                >

                    <FormSubProgPresupuestario 
                         register={register} 
                         errors={errors}
                         disabled={!isEditing}
                         defaultValues={defaultValues}
                         dataPP={dataPP}
                         existe={data.existe} 
                    />
                    
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
