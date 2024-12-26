import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import Titulo from '../../Titulo';
import Breadcrumb from '../../Breadcrumb';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { crearUsuario, editarUsuario } from '../../../api/configuracion/ApiUsers';
import FormUsuarios from './FormUsuarios';
import AlertSuccess from '../../AlertSuccess';
import { onError } from '../../../utils/onError';

const EditUserForm = ({ data, projectId } ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const defaultValues = {
        tipo: data.tipo,
        nombre: data.nombre,
        ap_paterno: data.ap_paterno,
        ap_materno: data.ap_materno,
        correo: data.correo,
        num_empleado: data.num_empleado,
        id_area: data.id_area,
        estado: data.estado,
    }

    const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues });

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarUsuario,
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('obtenerUsuarios');
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
            { showSuccess && <AlertSuccess route='/configuracion/usuarios/listado' /> }
            <Breadcrumb
                items={[
                    { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
                    {
                    href: "/configuracion/usuarios/listado",
                    text: "REGISTRO DE USUARIOS",
                    },
                    { text: "REGISTRO DE USUARIO" },
                ]}
            />
        
            <Titulo text={'EDITAR USUARIO'} className='mt-14'/>
            
            <div className="bg-gray-100  mt-8 rounded-lg">
                <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }}>
                    <h3 className="text-white font-bold uppercase text-xl">EDITAR Usuario</h3>
                </div>
            
                <form 
                    className="w-full p-6 rounded-lg" 
                    style={{ backgroundColor: "#956876" }}
                    onSubmit={handleSubmit(handleForm)}
                >
                    <FormUsuarios 
                        register={register} 
                        errors={errors}
                        disabled={!isEditing}
                        defaultValues={defaultValues}
                    />
                    
                    <div className="flex justify-end gap-4 mt-4">
                        <Link to="/configuracion/usuarios/listado">
                            <button
                                type="button"
                                className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                                aria-label="Regresar a listado de áreas"
                            >
                                Regresar
                            </button>
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

export default EditUserForm