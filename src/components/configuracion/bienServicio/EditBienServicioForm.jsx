import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { editarBienServicio } from '../../../api/configuracion/ApiBienesServicios';
import { onError } from '../../../utils/onError';
import { FormBienesServicios } from './FormBienesServicios';
import { Link } from 'react-router-dom';
import Titulo from '../../Titulo';
import Breadcrumb from '../../Breadcrumb';
import AlertSuccess from '../../AlertSuccess';

export const EditBienServicioForm = ({data, projectId}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const defaultValues = {
        nombre_articulo: data[0].nombre_articulo,
        tipo_bien: data[0].tipo_bien,
        id_capitulo: data[0].id_capitulo,
        id_subcapitulo: data[0].id_subcapitulo,
        id_partida_g: data[0].id_partida_g,
        id_partida_e: data[0].id_partida_e,
        estado: data[0].estado,
    };
    
    const { register, handleSubmit, formState: { errors }, setError } = useForm({ defaultValues });

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarBienServicio,
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: () => {
            queryClient.invalidateQueries("getBienServicio");
            setShowSuccess(true);
        },
    });

    const handleForm = (formData) => {
        const data = {
            ...formData,
            id: projectId,
        };
        mutate(data);
    };
    console.log(defaultValues)
    return (
        <>
            { showSuccess &&  <AlertSuccess route='/configuracion/catalogos/presupuestales/BienesServicios'/> }
            <Breadcrumb
                items={[
                    { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
                    { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
                    {
                        href: "/configuracion/catalogos/presupuestales",
                        text: "CATALOGOS PRESUPUESTALES",
                    },
                    {
                        href: "/configuracion/catalogos/presupuestales/BienesServicios",
                        text: "REGISTRO DE BIENES Y SERVICIOS",
                    },
                    { text: "BIENES Y SERVICIOS" },
                ]}
            />
            <Titulo text={"EDITAR BIENES Y SERVICIOS"} className="mt-14" />
            <div className="bg-gray-100  mt-8 rounded-lg">
                <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }} >
                    <h3 className="text-white font-bold uppercase text-xl">
                        EDITAR BIENES Y SERVICIOS
                    </h3>
                </div>

                <form
                    className="w-full p-6 rounded-lg"
                    style={{ backgroundColor: "#956876" }}
                    onSubmit={handleSubmit(handleForm)}
                >
                    <FormBienesServicios
                        register={register} 
                        errors={errors}
                        disabled={!isEditing}
                        defaultValues={defaultValues}
                    />

                    <div className="flex justify-end gap-4 mt-4">
                        <Link to="/configuracion/catalogos/presupuestales/BienesServicios">
                            <button
                                type="button"
                                className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                                aria-label="Regresar a listado de áreas"
                            >
                                Regresar
                            </button>
                        </Link>

                        { isEditing ? (
                            <button
                                type="submit"
                                className=" text-white px-4 py-2 rounded-md shadow bg-customYellow"
                            >
                                Guardar
                            </button>
                        ) : (
                            <button
                                type="button"
                                role="button"
                                className="bg-customYellow text-white px-4 py-2 rounded ml-4"
                                onClick={handleEditClick}
                            >
                                Editar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}
