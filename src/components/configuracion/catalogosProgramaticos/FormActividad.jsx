import React, { useEffect, useMemo } from 'react'
import CamposObligatorios from '../../CamposObligatorios'
import AlertaError from '../../AlertError';
import InputField from '../../InputField';
import MensajeError from '../../MensajeError';
import { useTipoActividad } from '../../../hooks/useTipoActividad';
import Spinner from '../../Spinner';
import { Controller, get } from 'react-hook-form';
import Select from 'react-select';
import { useProyectosDisponibles } from '../../../hooks/useProyectosDisponibles';
import { getYears } from '../../../utils';
import { useUnidadMedida } from '../../../hooks/useUnidadMedida';

const FormActividad = ({ register, errors, control, disabled, defaultValues, proyectoId }) => {
    const { data, isError, isLoading } = useTipoActividad();
    const { data: proyectosDisponibles, isError: errorProyectos, isLoading: loadingProyectos } = useProyectosDisponibles(proyectoId || 0);
    const { data: dataUnidadMedida, isError: errorUnidadMedida, isLoading: loadingUnidadMedida } = useUnidadMedida();

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            AlertaError({title: "¡Campos vacíos!", text: "Para continuar completa todos los campos"})
        }
    }, [errors]);

    const optionsTipoActividad = useMemo(() => {
        return data?.map(tipo => ({ value: tipo.id, label: tipo.nombre }))
    }, [data]); 

    const optionsProyectos = useMemo(() => {
        return proyectosDisponibles?.map(proyecto => ({ value: proyecto.id, label: proyecto.nombre }))
    }, [proyectosDisponibles]);

    const optionsUnidadMedida = useMemo(() => {
        return dataUnidadMedida?.map(unidad => ({ value: unidad.id, label: unidad.nombre_umedida }))
    }, [dataUnidadMedida]);

    const optionsYear = useMemo(() => {
        return getYears().map(year => ({ value: year.value, label: year.label }))
    }, []);

    if(isLoading || loadingProyectos || loadingUnidadMedida) return <Spinner />

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

            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="descripcion">
                        *Descripción de la actividad:
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        rows="6"
                        disabled={disabled}
                        {...register('descripcion', { required: "Campo vacío" })}
                    ></textarea>

                    {errors.descripcion && (
                        <MensajeError>{errors.descripcion.message}</MensajeError>
                    )}
                </div>

                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="id_unidad_medida">*Unidad de medida:</label>
                    <Controller
                        control={control}
                        name="id_unidad_medida"
                        defaultValue={defaultValues?.id_unidad_medida || ""}
                        render={({ field }) => (
                            <Select
                                options={optionsUnidadMedida}
                                value={optionsUnidadMedida.find(option => option.value == field.value)}
                                onChange={({ value }) => field.onChange(value)}
                                isDisabled={disabled}
                                className={`border rounded w-full ${errors.id_unidad_medida ? 'border-red-600' : 'border-gray-300'}`}
                            />
                        )}
                        rules={{ required: "Campo vacío" }}
                    />
                    {errors.id_unidad_medida && (
                        <MensajeError>{errors.id_unidad_medida.message}</MensajeError>
                    )}
                </div>
            </div>  

            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="id_proyecto">*Proyecto:</label>
                    <Controller
                        control={control}
                        name="id_proyecto"
                        defaultValue={defaultValues?.id_proyecto || ""}
                        render={({ field }) => (
                            <Select
                                options={optionsProyectos}
                                value={optionsProyectos.find(option => option.value == field.value)}
                                onChange={(({ value }) => field.onChange(value))}
                                isDisabled={disabled}
                                className={`border rounded w-full ${errors.id_proyecto ? 'border-red-600' : 'border-gray-300'}`}
                            />
                        )}
                        rules={{ required: "Campo vacío" }}
                    />
                    {errors.id_proyecto && (
                        <MensajeError>{errors.id_proyecto.message}</MensajeError>
                    )}
                </div>

                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="anio">*Año:</label>
                    <Controller
                        control={control}
                        name="anio"
                        defaultValue={defaultValues?.anio || ""}
                        render={({ field }) => (
                            <Select
                                options={optionsYear}
                                value={optionsYear.find(option => option.value == field.value)}
                                onChange={(({ value }) => field.onChange(value))}
                                isDisabled={disabled}
                                className={`border rounded w-full ${errors.anio ? 'border-red-600' : 'border-gray-300'}`}
                            />
                        )}
                        rules={{ required: "Campo vacío" }}
                    />
                    {errors.anio && (
                        <MensajeError>{errors.anio.message}</MensajeError>
                    )}
                </div>
            </div>

            <div className='block md:flex'>
                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="id_tipo_actividad">*Tipo de actividad:</label>
                    <Controller
                        control={control}
                        name="id_tipo_actividad"
                        defaultValue={defaultValues?.id_tipo_actividad || ""}
                        render={({ field }) => (
                            <Select
                                options={optionsTipoActividad}
                                value={optionsTipoActividad.find(option => option.value == field.value)}
                                onChange={(({ value }) => field.onChange(value))}
                                isDisabled={disabled}
                                className={`border rounded w-full ${errors.tipo ? 'border-red-600' : 'border-gray-300'}`}
                            />
                        )}
                        rules={{ required: "Campo vacío" }}
                    />
                    {errors.id_tipo_actividad && (
                        <MensajeError>{errors.id_tipo_actividad.message}</MensajeError>
                    )}
                </div>

                <div className='w-full md:w-1/2 px-2'>
                    <label className="font-semibold text-white" htmlFor="estado">
                        *Estado:
                    </label>
                    <div className='flex'>
                        <input 
                            type="radio" 
                            id="activo" 
                            name="estado" 
                            value="Activo" 
                            className='mr-1'
                            defaultChecked
                            disabled={disabled}
                            {...register('estado', { required: "Campo vacío" })}
                        />
                        <label htmlFor="activo" className='mr-4 text-white'>Activo</label>

                        <input
                            type="radio"
                            id="inactivo"
                            name="estado"
                            value="Inactivo"
                            className='mr-1'
                            disabled={disabled}
                            {...register('estado', { required: "Campo vacío" })}
                        />
                        <label htmlFor="inactivo" className='text-white'>Inactivo</label>
                    </div>
                </div>

            </div>
            
            <div className='flex justify-between'>
                <div>
                    <input
                        type='checkbox'
                        id='anteproyecto'
                        name='anteproyecto'
                        className='mx-2'
                    />
                    <label className="font-semibold text-sm text-black" htmlFor="anteproyecto">¿Corresponde a una actividad de anteproyecto?</label>
                </div>

                <div className='flex justify-end text-white font-semibold text-sm'>
                    <span>*Campos obligatorios</span>
                </div>
            </div>
        </>
    )
}

export default FormActividad