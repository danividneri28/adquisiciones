import React, { useEffect, useState } from "react";
import CamposObligatorios from "../../CamposObligatorios";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { onError } from "../../../utils/onError";
import Swal from "sweetalert2";
import { postFuncion, putFuncion } from "../../../api/configuracion/ApiFuncion";
import Input from "../../input";
import Select from "../../select";
import MensajeError from "../../MensajeError";
import { onAlert } from "../../../utils/onAlert";

const FormFuncion = ({ defaultValues, update, dataF }) => {
  const [isEditing, setIsEditing] = useState(update);
  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ defaultValues });

  const { mutate } = useMutation({
    mutationFn: update ? putFuncion : postFuncion,
    onError: (error) => onError(error, setError),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getFunciones"] });
      Swal.fire({
        icon: "success",
        title: "¡Muy bien!",
        text: "Se ha finalizado el proceso de registro exitosamente",
        confirmButtonText: "OK",
        confirmButtonColor: "#6b1e34",
        didClose: () =>
          navigate("/configuracion/catalogos/programaticos/funcion"),
      });
    },
  });

  const handleForm = (formData) => mutate(formData);

  useEffect(() => {
    onAlert(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div className="flex flex-col p-4  rounded-lg space-y-2 bg-customRed2 mt-1">
        <div className="block md:flex">
          <Input
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            name="nombre_funcion"
            label="Nombre de la función"
            classNameContainer="md:w-1/2 px-2"
            maxLength={30}
          />
          <Input
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            name="codigo_funcion"
            label="Codigo de la función"
            classNameContainer="md:w-1/2 px-2"
            maxLength={2}
            isNumber
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
        <fieldset
          className="block md:flex"
          disabled={defaultValues?.subfunciones_count > 0}
        >
          <Select
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            name="id_finalidad"
            label="Finalidad"
            classNameContainer="w-full md:w-1/2 px-2"
            valueAsNumber
            data={dataF.data}
            renderItem={(x) => (
              <option key={x.id_finalidad} value={x.id_finalidad}>
                {x.nombre_finalidad}
              </option>
            )}
          />

          <div className="w-full md:w-1/2 px-2">
            <label className="font-semibold text-white" htmlFor="estado">
              *Estado:
            </label>

            <div className="flex">
              <label className="mr-4 text-white">
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

              <label className="text-white">
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
          </div>
        </fieldset>

        <CamposObligatorios />
      </div>
      <div className="flex justify-end mt-3">
        <Link
          to="/configuracion/catalogos/programaticos/funcion"
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

export default FormFuncion;
