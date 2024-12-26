import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { editarClasificacion } from "../../../../api/configuracion/catalogos/presupuestales/ApiClasificacion";
import { onError } from "../../../../utils/onError";
import AlertSuccess from "../../../AlertSuccess";
import Breadcrumb from "../../../Breadcrumb";
import Titulo from "../../../Titulo";
import FormClasificacionCreate from "./FormClasificacionCreate";


const FormClasificacionEdit = ({ data, clasificacionId } ) => {

    const [isEditing, setIsEditing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();

    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const defaultValues = {
        nombre_c_funcional: data.nombre_c_funcional,
        desc_c_funcional: data.desc_c_funcional,
        codigo_c_funcional: data.codigo_c_funcional,
        estado: data.estado,
    }

    const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues });

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarClasificacion, 
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('obtenerClasificaciones');
            setShowSuccess(true);
        }
    })

    const handleForm = (formData) => {
        const data = {
            ...formData,
            id: clasificacionId
        }

        mutate(data);
    }
    
    return ( 
        <>
            { showSuccess && <AlertSuccess route='/configuracion/catalogos/presupuestales/clasificacionFuncional' /> }
            <Breadcrumb
                items={[
                    { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
                    { href: "/configuracion/catalogos/menu", text: "CATÁLOGOS" },
                    {
                    href: "/configuracion/catalogos/presupuestales",
                    text: "CATÁLOGOS PRESUPUESTALES",
                    },
                    {
                    href: "/configuracion/catalogos/presupuestales/clasificacionFuncional",
                    text: "REGISTROS DE CLASIFICACIÓN FUNCIONAL",
                    },
                    { text: "CLASIFICACIÓN FUNCIONAL" },
                ]}
            />
            <Titulo text={"EDITAR CLASIFICACIÓN FUNCIONAL"} className="mt-14"/>
            <div className="bg-gray-100  mt-8 rounded-lg">
                <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }} >
                    <h3 className="text-white font-bold uppercase text-xl">EDITAR CLASIFICACIÓN FUNCIONAL</h3>
                </div>
           

                <form
                    className="w-full p-6 rounded-lg"
                    style={{backgroundColor: "#956876"}}
                    onSubmit={handleSubmit(handleForm)}
                >
                    <FormClasificacionCreate 
                        register={register}
                        errors={errors}
                        disabled={!isEditing}
                        defaultValues={defaultValues}
                    />
                    <div className="flex justify-end gap-4 mt-4">
                        <Link to="/configuracion/catalogos/presupuestales/clasificacionFuncional" > 
                            <button 
                                type="button"
                                className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                                aria-label="Regresar al listado de clasificaión funcional"
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

export default FormClasificacionEdit