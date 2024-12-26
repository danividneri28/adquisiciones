import React, { useEffect, useMemo } from 'react'
import CamposObligatorios from '../../CamposObligatorios'
import InputField from '../../InputField'
import MensajeError from '../../MensajeError'
import Select from 'react-select';
import { Controller } from 'react-hook-form';
import AlertaError from '../../AlertError';
import Spinner from '../../Spinner';
import { useAreas } from '../../../hooks/useAreas';
import { useSubProgramas } from '../../../hooks/useSubProgramas';

const FormProyecto = ({ register, errors, control, disabled, defaultValues }) => {
    const { data, isLoading } = useAreas();
    const { data: dataSubProgramas, isLoading: isLoadingSubProgramas } = useSubProgramas();

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            AlertaError({title: "¡Campos vacíos!", text: "Para continuar completa todos los campos"})
        }
    }, [errors]);

    const options = useMemo(() => {
        if (dataSubProgramas) {
            return dataSubProgramas.map(subprograma => ({ value: subprograma.id_sub_presupuestario, label: subprograma.nombre }))
        }
        return [];
    }, [dataSubProgramas]);

    const optionsUnidadResponsable = useMemo(() => {
        if (data) {
            return data?.data.map(area => ({ value: area.id, label: area.nombre_area }))
        }
        return [];
    }, [data]);

    if (isLoading || isLoadingSubProgramas) return <Spinner />

    return (
        <>
            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <InputField
                        id="nombre"
                        label="*Nombre del proyecto:"
                        register={register}
                        errors={errors}
                        validationRules={{ required: "Campo vacío" }}
                        disabled={disabled}
                        maxLength={30}
                    />
                </div>

                <div className='w-full md:w-1/2 px-2'>
                    <InputField
                        id="codigo"
                        label="*Codigo del proyecto:"
                        register={register}
                        errors={errors}
                        validationRules={{ required: "Campo vacío" }}
                        disabled={disabled}
                        maxLength={2}
                    />
                </div>
            </div>  

            <label className="font-semibold text-white px-2" htmlFor="descripcion">
                *Descripción:
            </label>
            <div className='px-2'>
                <textarea
                    id="descripcion"
                    name="descripcion"
                    className={`border rounded px-2 w-full ${errors.descripcion ? 'border-red-600' : 'border-gray-300'}`}
                    rows="6"
                    disabled={disabled}
                    {...register("descripcion", { required: "Campo vacío" })}
                    maxLength={400}
                ></textarea>

                {errors.descripcion && (
                    <MensajeError>{errors.descripcion.message}</MensajeError>
                )}
            </div>

            <label className="font-semibold text-white px-2" htmlFor="id_subprograma">*Subprograma:</label>
            <div className='px-2'>
                <Controller
                    control={control}
                    name="id_subprograma"
                    defaultValue={defaultValues?.id_subprograma || ""}
                    render={({ field }) => (
                        <Select
                            options={options}
                            value={options.find(option => option.value == field.value)}
                            onChange={(({ value }) => field.onChange(value))}
                            isDisabled={disabled}
                            className={`border rounded w-full ${errors.id_subprograma ? 'border-red-600' : 'border-gray-300'}`}
                        />
                    )}
                    rules={{ required: "Campo vacío" }}
                />
                {errors.id_subprograma && (
                    <MensajeError>{errors.id_subprograma.message}</MensajeError>
                )}
            </div>

            <label className="font-semibold text-white" htmlFor="id_unidad_responsable">*Unidad responsable:</label>
            <div className='px-2'>
                <Controller
                    control={control}
                    name="id_unidad_responsable"
                    defaultValue={defaultValues?.id_unidad_responsable || ""}
                    render={({ field }) => (
                        <Select
                            options={optionsUnidadResponsable}
                            value={optionsUnidadResponsable.find(option => option.value === field.value)}
                            isDisabled={disabled}
                            onChange={(({ value }) => field.onChange(value))}
                        />
                    )}
                    rules={{ required: "Campo vacío" }}
                />
                {errors.id_unidad_responsable && (
                    <MensajeError>{errors.id_unidad_responsable.message}</MensajeError>
                )}
            </div>

            <label className="font-semibold text-white px-2" htmlFor="estado">*Estado:</label>
            <div className='flex px-2'>
                <input 
                    type="radio" 
                    name="estado" 
                    value="ACTIVO"
                    className='mr-1'
                    defaultChecked
                    disabled={disabled}
                    {...register("estado", { required: "Campo vacío" })}
                />
                <label htmlFor="activo" className='mr-4 text-white'>Activo</label>

                <input
                    type="radio"
                    name="estado"
                    value="INACTIVO"
                    className='mr-1'
                    disabled={disabled}
                    {...register("estado", { required: "Campo vacío" })}
                />
                <label htmlFor="inactivo" className='text-white'>Inactivo</label>
            </div>

            <CamposObligatorios />
        </>
    )
}

export default FormProyecto