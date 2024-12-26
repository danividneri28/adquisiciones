import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import { useMutation } from "@tanstack/react-query";
import { onError } from "../../../../../utils/onError";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createFuenteFinanciamiento } from "../../../../../api/configuracion/ApiFinanciamiento";
import AlertSuccess from "../../../../../components/AlertSuccess";
import { FormFinanciamiento } from "../../../../../components/configuracion/fuenteFinanciamiento/FormFinanciamiento";

const FuenteFinanciamientoCreate = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const initialValues = {
    nombre: "",
    descripcion: "",
    codigo: "",
    estado: "",
  };

  const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createFuenteFinanciamiento,
    onError: (error) => {
      onError(error, setError);
    },
    onSuccess: () => {
      setShowSuccess(true);
    },
  });

  const handleForm = (formData) => mutate(formData);

  return (
    <>
      <div>
        { showSuccess && ( <AlertSuccess route="/configuracion/catalogos/presupuestales/FuenteFinanciamiento" /> )}
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

        <Titulo text={"FUENTES DE FINANCIAMIENTO"} className="mt-14" />
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
              NUEVA FUENTE DE FINANCIAMIENTO
            </h3>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >
            <FormFinanciamiento 
              register={register} 
              errors={errors} 
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

              <input
                value={"Guardar"}
                type="submit"
                className=" text-white px-4 py-2 rounded-md shadow bg-customYellow"
                style={{ backgroundColor: "#bc965c" }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FuenteFinanciamientoCreate;
