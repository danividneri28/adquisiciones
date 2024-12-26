import React, { useEffect } from 'react'
import CamposObligatorios from '../../../CamposObligatorios'
import MensajeError from '../../../MensajeError'
import Spinner from '../../../Spinner'
import AlertaError from '../../../AlertError'
import InputField from '../../../InputField'

const FormClasificacionCreate = ({ register, errors, disabled }) => {

    useEffect(() => {
        if (Object.keys(errors).length > 0){
            AlertaError({title: "¡Campos vacíos!", text: "Para continuar completa todos los campos"})
        }
    }, [errors]);

  
    return (
        <>
            <div className="flex flex-col p-4  rounded-lg space-y-2 bg-customRed2 mt-1">
                <InputField
                    id="nombre_c_funcional"
                    label="Nombre clasificación funcional"
                    register={register}
                    errors={errors}
                    disabled={disabled}
                    required
                    isNumber
                />
            
                <label className="font-semibold text-white text-sm" htmlFor="descripcion">
                    *Descripción
                </label>
                <textarea
                    className={`border border-gray-300 ${
                        "desc_c_funcional" in errors ? "border-2 border-red-500" : ""
                    } rounded px-2`}
                    rows="6"
                    disabled={disabled}
                    {...register("desc_c_funcional", {
                        required: "Campo vacío",
                    })}
                ></textarea>
                {errors.desc_c_funcional && (
                    <MensajeError>{errors.desc_c_funcional.message}</MensajeError>
                )}  
                <InputField 
                    required
                    register={register}
                    errors={errors}
                    disabled={disabled}
                    id="codigo_c_funcional"
                    label="Código clasificación Funcional"
                    maxLength={2}
                    isNumber
                    />
                <label className="font-semibold text-white" htmlFor="estado">
                    *Estado:
                </label>
                <div className="flex">
                    <label htmlFor="activo" className="mr-4 text-white">
                        <input
                        type="radio"
                        value="Activo"
                        className="mr-1"
                        defaultChecked
                        {...register("estado")}
                        disabled={disabled}
                        />
                        Activo
                    </label>
                    <label htmlFor="inactivo" className="text-white">
                        <input
                        type="radio"
                        value="Inactivo"
                        className="mr-1"
                        {...register("estado")}
                        disabled={disabled}
                        />
                        Inactivo
                    </label>
                </div>
                {errors.estado && <MensajeError>{errors.estado.message}</MensajeError>}
                <CamposObligatorios />
            </div>
        </>
    )
};

export default FormClasificacionCreate;
