import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { onError } from "../../../utils/onError";
import AlertSuccess from '../../AlertSuccess';
import Breadcrumb from "../../Breadcrumb";
import Titulo from "../../Titulo";
import { FormFinanciamiento } from "./FormFinanciamiento";
import { Link } from "react-router-dom";
import { editarFinanciamiento } from "../../../api/configuracion/ApiFinanciamiento";

export const EditFinanciamientoForm = ({ data, projectId }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const defaultValues = {
    nombre_financiemiento: data.nombre_financiemiento,
    desc_financiamiento: data.desc_financiamiento,
    codigo_financiemiento: data.codigo_financiemiento,
    estado: data.estado,
  };

  const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editarFinanciamiento,
    onError: (error) => {
        onError(error, setError);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getFuenteFinanciamiento");
      setShowSuccess(true);
    },
  });
  const handleForm = (formData) => {
    const data = {
      ...formData,
      id: projectId,
    };
    mutate(data);
  };

  return (
    <>
      { showSuccess &&  <AlertSuccess route='/configuracion/catalogos/presupuestales/FuenteFinanciamiento'/> }
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATALOGOS PRESUPUESTALES",
          },
          {
            href: "/configuracion/catalogos/presupuestales/FuenteFinanciamiento",
            text: "REGISTRO DE FUENTES DE FINANCIAMIENTO",
          },
          { text: "FUENTE DE FINANCIAMIENTO" },
        ]}
      />
      <Titulo text={"EDITAR FUENTES DE FINANCIAMIENTO"} className="mt-14" />
      <div className="bg-gray-100  mt-8 rounded-lg">
        <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }} >
          <h3 className="text-white font-bold uppercase text-xl">
            EDITAR FUENTES DE FINANCIAMIENTO
          </h3>
        </div>

        <form
          className="w-full p-6 rounded-lg"
          style={{ backgroundColor: "#956876" }}
          onSubmit={handleSubmit(handleForm)}
        >
          <FormFinanciamiento
            register={register}
            errors={errors}
            disabled={!isEditing}
            defaultValues={defaultValues}
          />

          <div className="flex justify-end gap-4 mt-4">
            <Link to="/configuracion/catalogos/presupuestales/FuenteFinanciamiento">
              <button
                type="button"
                className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                aria-label="Regresar a listado de áreas"
              >
                Regresar
              </button>
            </Link>

            { isEditing ? (
              <button
                type="submit"
                className=" text-white px-4 py-2 rounded-md shadow bg-customYellow"
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
      </div>
    </>
  );
};
