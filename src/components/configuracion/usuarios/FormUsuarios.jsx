import React, { useEffect } from 'react'
import CamposObligatorios from '../../CamposObligatorios'
import MensajeError from '../../MensajeError'
import { useAreas } from '../../../hooks/useAreas'
import Spinner from '../../Spinner'
import AlertaError from '../../AlertError'
import InputField from '../../InputField'

const FormUsuarios = ({ register, errors, disabled }) => {

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            AlertaError({title: "¡Campos vacíos!", text: "Para continuar completa todos los campos"})
        }
    }, [errors]);

    const { data, isError, isLoading } = useAreas();

    if (isLoading) return <Spinner />
    
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-white">*Tipo de Usuario:</label>
                    <select
                        id="tipo"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.tipo ? 'border-red-600' : 'border-gray-300'}`}
                        required
                        disabled={disabled}
                        {...register("tipo", { 
                                required: "Campo vacío"
                            })
                        }                            
                    >
                        <option value="" disabled>Selecciona un tipo</option>
                        <option value="Área Solicitante">Área Solicitante</option>
                        <option value="Adquisiciones">Adquisiciones</option>
                        <option value="Configuración">Configuración</option>
                    </select>

                    {errors.tipo && (
                        <MensajeError>{errors.tipo.message}</MensajeError>
                    )}
                </div>

                <InputField
                    id="nombre"
                    label="*Nombre:"
                    register={register}
                    errors={errors}
                    validationRules={{ required: "Campo vacío", maxLength: { value: 20, message: "No más de 20 carácteres" }, minLength: { value: 3, message: "Mínimo 3 carácteres"} }}
                    disabled={disabled}
                />

                <InputField
                    id="ap_paterno"
                    label="*Apellido Paterno:"
                    register={register}
                    errors={errors}
                    validationRules={{ required: "Campo vacío", maxLength: { value: 20, message: "No más de 20 carácteres" }, minLength: { value: 3, message: "Mínimo 3 carácteres"} }}
                    disabled={disabled}
                />

                <InputField
                    id="ap_materno"
                    label="*Apellido Materno:"
                    register={register}
                    errors={errors}
                    validationRules={{ required: "Campo vacío", maxLength: { value: 20, message: "No más de 20 carácteres" }, minLength: { value: 3, message: "Mínimo 3 carácteres"} }}
                    disabled={disabled}
                />

                <InputField
                    id="correo"
                    label="Correo electronico:"
                    type="email"
                    register={register}
                    errors={errors}
                    validationRules={{ required: "Campo vacío", pattern: { value: /\S+@\S+\.\S+/, message: "Correo no válido", }, }}
                    disabled={disabled}
                />

                <InputField
                    id={"num_empleado"}
                    label={"*Numero de Empleado:"}
                    register={register}
                    errors={errors}
                    validationRules={{ required: "Campo vacío", maxLength: { value: 10, message: "No más de 10 carácteres" }, minLength: { value: 10, message: "Mínimo 10 carácteres"} }}
                    disabled={disabled}
                    maxLength="10"
                />

                <div className="col-span-full">
                    <label className="block text-sm font-medium text-white">*Area de Adquisición:</label>
                    <select
                        name="id_area"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.id_area ? 'border-red-600' : 'border-gray-300'}`}
                        {...register("id_area", {
                            required: "Campo vacío"
                        })}
                        disabled={disabled}
                    >
                        <option value="" disabled>Selecciona un tipo</option>
                        {data.data.map((area) => (
                            <option key={area.id} value={area.id}>{area.nombre_area}</option>
                        ))}
                    </select>

                    {errors.id_area && (
                        <MensajeError>{errors.id_area.message}</MensajeError>
                    )}
                </div>

                <div className="col-span-full">
                    <label className="block text-sm font-medium text-white">*Permisos:</label>
                    <div className="max-w-sm rounded bg-white shadow-lg mt-4">
                        <div className="px-4 py-1">
                            <div className="font-bold text-sm">Configuración</div>
                        </div>
                        <div className="px-4 pt-4 pb-2">
                            <ul className="list-none space-y-2">
                                <li className="flex items-center">
                                    <span className="text-gray-700 mr-2 text-sm">Permiso 1</span>
                                    <input
                                        type="checkbox"
                                        name="permisos"
                                        value="permiso1"
                                        className="text-blue-500 focus:ring-blue-500"
                                    />
                                </li>

                                <li className="flex items-center">
                                    <span className="text-gray-700 mr-2 text-sm">Permiso 2</span>
                                    <input
                                        type="checkbox"
                                        name="permisos"
                                        value="permiso2"
                                        className="text-blue-500 focus:ring-blue-500"
                                    />
                                </li>

                                <li className="flex items-center">
                                    <span className="text-gray-700 mr-2 text-sm">Permiso 3</span>
                                    <input
                                        type="checkbox"
                                        name="permisos"
                                        value="permiso3"
                                        className="text-blue-500 focus:ring-blue-500"
                                    />
                                </li>

                                <li className="flex items-center">
                                    <span className="text-gray-700 mr-2 text-sm">Permiso 4</span>
                                    <input
                                        type="checkbox"
                                        name="permisos"
                                        value="permiso4"
                                        className="text-blue-500 focus:ring-blue-500"
                                    />
                                </li>

                                <li className="flex items-center">
                                    <span className="text-gray-700 mr-2 text-sm">Permiso 5</span>
                                    <input
                                        type="checkbox"
                                        name="permisos"
                                        value="permiso5"
                                        className="text-blue-500 focus:ring-blue-500"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <label className="block text-sm font-medium text-white">*Estado:</label>
                    <label className="inline-flex items-center">
                        <input type="radio" id="estado" value="Activo" className="text-blue-500 focus:ring-blue-500" defaultChecked disabled={disabled} {...register("estado")}/>
                        <span className="ml-2 text-white">Activo</span>
                    </label>

                    <label className="inline-flex items-center ml-4">
                        <input type="radio" id="estado" value="Inactivo" className="text-blue-500 focus:ring-blue-500" {...register("estado")} disabled={disabled}/>
                        <span className="ml-2 text-white">Inactivo</span>
                    </label>
                </div>
            </div>
            
            <CamposObligatorios />
        </>
    )
}

export default FormUsuarios