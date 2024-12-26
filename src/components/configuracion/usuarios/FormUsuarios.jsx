import React from 'react'
import CamposObligatorios from '../../CamposObligatorios'
import MensajeError from '../../MensajeError'

const FormUsuarios = ({ register, errors, disabled }) => {
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
                                required: "El tipo de usuario es requerido"
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

                <div>
                    <label className="block text-sm font-medium text-white">*Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.nombre ? 'border-red-600' : 'border-gray-300'}`}
                        {...register("nombre", {
                            required: "El nombre es requerido",
                            maxLength: { value: 20, message: "No más de 20 carácteres" },
                            minLength: { value: 3, message: "Mínimo 3 carácteres"}
                        })}
                        disabled={disabled}
                    />

                    {errors.nombre && (
                        <MensajeError>{errors.nombre.message}</MensajeError>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-white">*Apellido paterno:</label>
                    <input
                        type="text"
                        name="ap_paterno"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.ap_paterno ? 'border-red-600' : 'border-gray-300'}`}
                        required
                        {...register("ap_paterno", {
                            required: "El apellido paterno es requerido",
                            maxLength: { value: 20, message: "No más de 20 carácteres" },
                            minLength: { value: 3, message: "Mínimo 3 carácteres"}
                        })}
                        disabled={disabled}
                    />

                    {errors.ap_paterno && (
                        <MensajeError>{errors.ap_paterno.message}</MensajeError>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-white">*Apellido Materno:</label>
                    <input
                        type="text"
                        id="ap_materno"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.ap_materno ? 'border-red-600' : 'border-gray-300'}`}
                        required
                        {...register("ap_materno", {
                            required: "El apellido materno es requerido",
                            maxLength: { value: 20, message: "No más de 20 carácteres" },
                            minLength: { value: 3, message: "Mínimo 3 carácteres"}
                        })}
                        disabled={disabled}
                    />
                    {errors.ap_materno && (
                        <MensajeError>{errors.ap_materno.message}</MensajeError>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-white">Correo electronico:</label>
                    <input
                        type="email"
                        name="correo"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.correo ? 'border-red-600' : 'border-gray-300'}`}
                        {...register("correo", {
                            required: "El correo de registro es obligatorio",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Correo no válido",
                            },
                        })}
                        disabled={disabled}
                    />

                    {errors.correo && (
                        <MensajeError>{errors.correo.message}</MensajeError>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-white">*Numero de Empleado:</label>
                    <input
                        type="text"
                        name="num_empleado"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.num_empleado ? 'border-red-600' : 'border-gray-300'}`}
                        maxLength={10}
                        {...register("num_empleado", {
                            required: "El número de empleado es requerido",
                            maxLength: { value: 10, message: "No más de 10 carácteres" },
                            minLength: { value: 10, message: "Mínimo 10 carácteres"},
                        })}
                        disabled={disabled}
                    />

                    {errors.num_empleado && (
                        <MensajeError>{errors.num_empleado.message}</MensajeError>
                    )}
                </div>

                <div className="col-span-full">
                    <label className="block text-sm font-medium text-white">*Area de Adquisición:</label>
                    <select
                        name="id_area"
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors.id_area ? 'border-red-600' : 'border-gray-300'}`}
                        {...register("id_area", {
                            required: "El área de adquisición es requerida"
                        })}
                        disabled={disabled}
                    >
                        <option value="" disabled>Selecciona un tipo</option>
                        <option value="1">Dirección General de Administración</option>
                        <option value="2">Subdireccion de tegnologias</option>
                        <option value="3">DG Servicios Urbanos</option>
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
                    <label className="block text-sm font-medium text-white">
                        *Estado:
                    </label>

                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            id="estado"
                            value="Activo"
                            className="text-blue-500 focus:ring-blue-500"
                            defaultChecked
                            disabled={disabled}
                            {...register("estado")}
                        />
                        <span className="ml-2 text-white">Activo</span>
                    </label>

                    <label className="inline-flex items-center ml-4">
                        <input
                            type="radio"
                            id="estado"
                            value="Inactivo"
                            className="text-blue-500 focus:ring-blue-500"
                            {...register("estado")}
                            disabled={disabled}
                        />
                        <span className="ml-2 text-white">Inactivo</span>
                    </label>
                </div>
            </div>
            
            <CamposObligatorios />
        </>
    )
}

export default FormUsuarios