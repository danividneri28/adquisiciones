import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Breadcrumb';
import FormProgPresupuestario from './FormProgPresupuestario';
import { onError } from '../../../utils/onError';
import {editarProgramaPresupuestario} from '../../../api/configuracion/ApiProgramaPresupuestario'
import AlertSuccess from '../../AlertSuccess';
import Titulo from '../../Titulo';

export default function EditFormPresupuestario({ data,dataP, datasub, projectId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };


  const defaultValues = {
    id_subfuncion:data[0].id_subfuncion,
    nombre_presupuestario: data[0].nombre_presupuestario,
    codigo_presupuestario: data[0].codigo_presupuestario,
    descripcion: data[0].descripcion,
    pilar: data[0].pilar,
    estado: data[0].estado
  }

  const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues });

  const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarProgramaPresupuestario,
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
       { showSuccess && <AlertSuccess route='/configuracion/catalogos/programaticos/programaPresupuestario' /> }
      <Breadcrumb
          items={[
              { href: "/home", text: "CONFIGURACIÓN" },
              { href: "/home", text: "CATÁLAGOS" },
              { href: "/home", text: "CATÁLAGOS PROGRAMÁTICOS" },
              { href: "/home", text: "REGISTRO DE PROGRAMAS PRESUPUESTARIOS" },
              { text: "PROGRAMA PRESUPUESTARIO" },
          ]}
      />

      <Titulo text="PROGRAMA PRESUPUESTARIO" className='mt-14' />

      <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed2 rounded p-2">
              <h3 className="text-white font-bold">EDITAR PROGRAMA PRESUPUESTARIO</h3>
          </div>
          <form 
            className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1"
            onSubmit={handleSubmit(handleForm)}
          >
              <FormProgPresupuestario 
                 register={register} 
                 errors={errors}
                 disabled={!isEditing}
                 defaultValues={defaultValues}
                 dataP={dataP}
                 datasub={datasub}
                 existe={data.existe}
              />

              <div className="flex justify-end">
                  <Link
                      to="/configuracion/catalogos/programaticos/programaPresupuestario"
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
