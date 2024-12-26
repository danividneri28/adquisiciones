import React, { useEffect } from "react";
import CamposObligatorios from "../../../CamposObligatorios";
import MensajeError from "../../../MensajeError";
import AlertaError from "../../../AlertError";
import Input from "../../../input"

const FormTipoGasto = ({ register, errors, disabled }) => {
    useEffect(() => {
        if (Object.keys(errors).length > 0){
            AlertaError({title: "¡Campos vacíos", text: "Para continuar completa todos los campos" })
        }
    }, [errors]);

    return ( 
        <>
            <div className="flex flex-col p-4  rounded-lg space-y-2 bg-customRed2 mt-1">
                <Input 
                    required
                    register={register}
                    errors={errors}
                    disabled={disabled}
                    name="nombre_gasto"
                    label="Nombre de gasto"
                    maxLength={100}
                    isNumber
                />
                <label className="font-semibold text-white text-sm" htmlFor="descripcion">
                    *Descripción
                </label>
                <textarea
                    className={`border border-gray-300 ${
                        "desc_gasto" in errors ? "border-2 border-red-500" : ""
                    } rounded px-2`}
                    rows="6"
                    disabled={disabled}
                    {...register("desc_gasto", {
                        required: "Campo vacío",
                    })}
                ></textarea>
                {errors.desc_gasto && (
                    <MensajeError>{errors.desc_gasto.message}</MensajeError>
                )}
                <Input 
                    required
                    register={register}
                    errors={errors}
                    disabled={disabled}
                    name="codigo_gasto"
                    label="Código de gasto"
                    maxLength={2}
                    isNumber
                />
                <div className="md:grid-cols-2 ">
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
               
                </div>
        </>
    )
};

export default FormTipoGasto;
