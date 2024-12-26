import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { putSubcapitulo } from '../../../api/configuracion/catalogos/presupuestales/objetoGasto/subcapitulos/ApiSubcapitulos';
import { onError } from '../../../utils/onError';
import AlertSuccess from '../../AlertSuccess';
import Input from '../../input';
import MensajeError from '../../MensajeError';
import Select from 'react-select';
import Spinner from '../../Spinner';
import { useCapitulos } from '../../../hooks/useCapitulos';
import { Link } from 'react-router-dom';

const EditSubcapitulosForm = ({data, subcapituloId}) => {
    const [isEditing, setisEditing] = useState(false);
    const [showSucces, setShowSucces] = useState(false);

    const handleEditClick = (e) => {
        e.preventDefault();
        setisEditing(!isEditing);
    };

    const defaultValues = {
        nombre_subcapitulo: data.data.nombre_subcapitulo,
        codigo_subcapitulo: data.data.codigo_subcapitulo,
        desc_subcapitulo: data.data.desc_subcapitulo,
        id_capitulo: data.data.id_capitulo,        
        estado: data.data.estado
    };

    const { register, handleSubmit, formState: {errors}, setError, control } = useForm({defaultValues});
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: putSubcapitulo,
        onError: (error) => onError(error, setError),
        onSuccess: (data) => {
            queryClient.invalidateQueries('getSubcapitulos');
            setShowSucces(true);
        }
    });

    const handleForm = (formData) => {
        const data = {
            ...formData,
            id: subcapituloId
        }
        mutate(data);
    }
    // const handleForm = (formData) => {
    //     console.log(formData);
    // }

    const { data: capitulos, isLoading } = useCapitulos();
    const options = capitulos?.data.map((capitulo) => (
        { value: capitulo.id_capitulo, label: [capitulo.codigo_capitulo," - ",capitulo.nombre_capitulo] }
    ));
    if(isLoading) return <Spinner/>
    return (
        <>
            { showSucces && <AlertSuccess route='/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo' /> }
            <form onSubmit={handleSubmit(handleForm)} className="w-full p-6 rounded-lg" style={{ backgroundColor: "#956876" }}>
                <div className="grid grid-cols-1">
                    <Input required register={register} errors={errors} disabled={!isEditing} name="nombre_subcapitulo" label="Nombre del capítulo" maxLength={30}/>
                    <br />
                    <Input required register={register} errors={errors} disabled={!isEditing} name="codigo_subcapitulo" label="Código del capítulo" maxLength={4}/>
                    <br />
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Descripción</label>
                    <textarea id="message" name="desc_subcapitulo" rows="4" className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-0 rounded-lg 
                    ${ 'desc_subcapitulo' in errors ? "border-2 border-red-500 shadow-sm" : ""
                    }focus:ring-black focus:border-ring-black p-3 sm:text-sm`} disabled={!isEditing} maxLength={400} 
                    {...register("desc_subcapitulo", { 
                        required: "CAMPO VACÍO"
                    })
                    } 
                    ></textarea>
                    {errors.desc_subcapitulo && (
                        <MensajeError>{errors.desc_subcapitulo.message}</MensajeError>
                    )} 
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="w-full">
                            <Controller
                            control={control}
                            name="id_capitulo"
                            defaultValue={defaultValues.id_capitulo || ""}
                            render={({ field }) => (
                                <div className="mt-3 w-full">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Capítulo</label>
                                <Select
                                    className={`block p-0 w-full text-sm text-black rounded-lg${
                                    'id_capitulo' in errors ? "border-2 border-red-500 shadow-sm" : ""
                                    } p-0 sm:text-sm`}
                                    options={options}
                                    value={options.find(option => option.value == field.value)}
                                    onChange={(({ value }) => field.onChange(value))}
                                    isDisabled={!isEditing}
                                />
                                </div>
                            )}
                            rules={{ required: "CAMPO VACÍO"}}
                            />
                            {errors.id_capitulo && (
                                <MensajeError>{errors.id_capitulo.message}</MensajeError>
                            )}
                        </div>
                        <div className="w-full ml-5">
                            <div className="mt-4">
                                <label htmlFor="estado" className="text-white font-semibold text-sm">*Estado</label>
                                <div className="flex mt-2">
                                    <div className='inline-flex'>
                                        <div className="flex items-center me-4">
                                            <input defaultChecked {...register("estado")} id="inline-checked-radio" type="radio" value="Activo" name="estado" disabled={!isEditing} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="inline-checked-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Activo</label>
                                        </div>
                                        <div className="flex items-center me-4">
                                            <input id="inline-radio" {...register("estado")} type="radio" value="Inactivo" name="estado" disabled={!isEditing} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactivo</label>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                    </div>
                    <p className="flex justify-end text-sm text-white font-semibold mt-4">
                        *Campos Obligatorios
                    </p>
                    <div className="flex justify-end gap-4 mt-3">
                        <Link to="/configuracion/catalogos/presupuestales/objetoGasto/capitulo">
                            <button
                            type="button"
                            className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                            aria-label="Regresar a listado de áreas"
                            >
                            Regresar
                            </button>
                        </Link>
                        {isEditing ? (
                            <button
                            type="submit"
                            className=" text-white px-4 py-2 rounded-md shadow"
                            style={{ backgroundColor: "#bc965c" }}
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
                </div>
            </form>
        </>
    )
}

export default EditSubcapitulosForm;