import React, { useState } from 'react'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Titulo from '../../../../../components/Titulo'
import { Link } from 'react-router-dom'
import FormActividad from '../../../../../components/configuracion/catalogosProgramaticos/FormActividad'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { crearActividad } from '../../../../../api/configuracion/catalogos/programaticos/ActividadesApi'
import { onError } from '../../../../../utils/onError'
import AlertSuccess from '../../../../../components/AlertSuccess'

const NuevaActividad = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const initialValues = {
        nombre: "",
        codigo: "",
        descripcion: "",
        id_unidad_medida: "",
        id_proyecto: "",
        id_tipo_actividad: "",
        anio: "",
        estado: "",
    }

    const { register, handleSubmit, formState: { errors }, setError, control } = useForm({ defaultValues: initialValues });
    
    const { mutate } = useMutation({
        mutationFn: crearActividad,
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: (data) => {
            setShowSuccess(true);
        }
    });

    const handleForm = (formData) => mutate(formData);
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
                    <h3 className="text-white font-bold">CREAR ACTIVIDAD</h3>
                </div>

                <form 
                    className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    
                    <FormActividad 
                        register={register}
                        errors={errors}
                        control={control}
                    />

                    <div className="flex justify-end">
                        <Link
                            to="/configuracion/catalogos/programaticos/actividades"
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

export default NuevaActividad