import React, { useEffect, useState } from "react";
import CamposObligatorios from "../../CamposObligatorios";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Input from "../../input";
import {
  postFinalidad,
  putFinalidad,
} from "../../../api/configuracion/ApiFinalidad";
import MensajeError from "../../MensajeError";
import Swal from "sweetalert2";
import { onError } from "../../../utils/onError";
import AlertSuccess from "../../AlertSuccess";
import { onAlert } from "../../../utils/onAlert";

const FormFinalidad = ({ defaultValues, update }) => {
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
    mutationFn: update ? putFinalidad : postFinalidad,
    onError: (error) => onError(error, setError),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getFinalidades"] });
      setShowSuccess(true);
    },
  });

  const handleForm = (formData) => mutate(formData);

  useEffect(() => {
    onAlert(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      {showSuccess && (
        <AlertSuccess route="/configuracion/catalogos/programaticos/finalidad" />
      )}
      <div className="flex flex-col p-4  rounded-lg space-y-2 bg-customRed2 mt-1">
        <Input
          required
          register={register}
          errors={errors}
          disabled={isEditing}
          name="nombre_finalidad"
          label="Nombre de finalidad"
          maxLength={30}
        />

        <label className="font-semibold text-white" htmlFor="descripcion">
          *Descripción:
        </label>
        <textarea
          className={`border border-gray-300 ${
            "descripcion" in errors ? "border-2 border-red-500" : ""
          } rounded px-2`}
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

        <fieldset disabled={defaultValues?.funciones_count > 0}>
          <Input
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            name="codigo_finalidad"
            label="Código de finalidad"
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
                disabled={isEditing}
              />
              Activo
            </label>

            <label htmlFor="inactivo" className="text-white">
              <input
                type="radio"
                value="Inactivo"
                className="mr-1"
                {...register("estado")}
                disabled={isEditing}
              />
              Inactivo
            </label>
          </div>
          {errors.estado && (
            <MensajeError>{errors.estado.message}</MensajeError>
          )}
        </fieldset>
        <CamposObligatorios />
      </div>
      <div className="flex justify-end mt-3">
        <Link
          to="/configuracion/catalogos/programaticos/finalidad"
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

export default FormFinalidad;
