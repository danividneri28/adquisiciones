import React, { useEffect, useState } from "react";
import CamposObligatorios from "../../CamposObligatorios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  postSubfuncion,
  putSubfuncion,
} from "../../../api/configuracion/ApiSubfuncion";
import { onError } from "../../../utils/onError";
import AlertSuccess from "../../AlertSuccess";
import Input from "../../input";
import MensajeError from "../../MensajeError";
import Select from "../../select";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { onAlert } from "../../../utils/onAlert";

const FormSubfuncion = ({ defaultValues, update, dataF }) => {
  const [isEditing, setIsEditing] = useState(update);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({ defaultValues });

  const { mutate } = useMutation({
    mutationFn: update ? putSubfuncion : postSubfuncion,
    onError: (error) => onError(error, setError),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getSubfunciones"] });
      setShowSuccess(true);
    },
  });

  const handleForm = (formData) => mutate(formData);

  useEffect(() => {
    onAlert(errors);
  }, [errors]);
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="flex flex-col p-4  rounded-lg space-y-2 bg-customRed2 mt-1">
        {showSuccess && (
          <AlertSuccess route="/configuracion/catalogos/programaticos/subfuncion" />
        )}
        <div className="block md:flex">
          <Input
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            classNameContainer="w-full md:w-1/2 px-2"
            name="nombre_subfuncion"
            label="Nombre de la subfunción"
            maxLength={30}
          />
          <Input
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            classNameContainer="w-full md:w-1/2 px-2"
            name="codigo_subfuncion"
            isNumber
            label="Codigo de la subfunción"
            maxLength={2}
          />
        </div>

        <label className="font-semibold text-white px-2" htmlFor="descripcion">
          *Descripción:
        </label>
        <div className="px-2 w-full">
          <textarea
            id="descripcion"
            name="descripcion"
            className={`border border-gray-300 rounded w-full ${
              "descripcion" in errors ? "border-2 border-red-500" : ""
            }`}
            rows="6"
            maxLength={400}
            disabled={isEditing}
            {...register("descripcion", {
              required: "Campo vacío",
            })}
          ></textarea>
          {errors.descripcion && (
            <MensajeError>{errors.descripcion.message}</MensajeError>
          )}
        </div>

        <fieldset className="block md:flex" disabled={defaultValues?.programapresupuestario_count > 0}>
          <Select
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            classNameContainer="w-full md:w-1/2 px-2"
            name="id_funcion"
            label="Función"
            data={dataF.data}
            renderItem={(x) => (
              <option key={x.id_funcion} value={x.id_funcion}>
                {x.nombre_funcion}
              </option>
            )}
          />

          <div className="w-full md:w-1/2 px-2">
            <label className="font-semibold text-white" htmlFor="estado">
              *Estado:
            </label>

            <div className="flex">
              <input
                type="radio"
                value="Activo"
                className="mr-1"
                checked
                disabled={isEditing}
                {...register("estado")}
              />
              <label htmlFor="activo" className="mr-4 text-white">
                Activo
              </label>

              <input
                type="radio"
                value="Inactivo"
                className="mr-1"
                disabled={isEditing}
                {...register("estado")}
              />
              <label htmlFor="inactivo" className="text-white">
                Inactivo
              </label>
            </div>
          </div>
        </fieldset>

        <CamposObligatorios />
      </div>
      <div className="flex justify-end mt-3">
        <Link
          to="/configuracion/catalogos/programaticos/subfuncion"
          className="bg-customRed text-white px-4 py-2 rounded"
        >
          Regresar
        </Link>

        {!isEditing ? (
          <button
            type="submit"
            className="bg-customYellow text-white px-4 py-2 rounded ml-4"
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
  );
};

export default FormSubfuncion;
