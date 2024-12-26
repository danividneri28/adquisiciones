import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createBienServicio } from "../../../../../api/configuracion/ApiBienesServicios";
import AlertSuccess from "../../../../../components/AlertSuccess";
import { onError } from "../../../../../utils/onError";
import { FormBienesServicios } from "../../../../../components/configuracion/bienServicio/FormBienesServicios";

const BienesServicisoCreate = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const initialValues = {
    nombre_articulo: "",
    tipo_bien: "",
    capitulo: "",
    subcapitulo: "",
    generica: "",
    especifica: "",
    estado: "",
  };

  const { register, handleSubmit, formState: { errors }, setError } = useForm({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: createBienServicio,
    onError: (error) => {
      onError(error, setError);
    },
    onSuccess: () => {
      setShowSuccess(true);
    },
  })

  const handleForm = (formData) => mutate(formData);

  return (
    <>
      <div>
        { showSuccess && <AlertSuccess route='/configuracion/catalogos/presupuestales/BienesServicios' />}
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
            {
              href: "/configuracion/catalogos/presupuestales",
              text: "CATALOGOS PRESUPUESTALES",
            },
            {
              href: "/configuracion/catalogos/presupuestales/BienesServicios",
              text: "REGISTROS DE BIENES Y SERVICIOS",
            },
            { text: "BIENES Y SERVICIOS" },
          ]}
        />

        <Titulo text={"BIENES Y SERVICIOS"} className="mt-14" />
        
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
              BIENES Y SERVICIOS
            </h3>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >
            <FormBienesServicios 
              register={register}
              errors={errors}
            />
            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/BienesServicios">
                <button
                  type="button"
                  className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                  aria-label="Regresar a listado de áreas"
                >
                  Regresar
                </button>
              </Link>

              <input
                value={'Guardar'}
                type="submit"
                className=" text-white px-4 py-2 rounded-md shadow"
                style={{ backgroundColor: "#bc965c" }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BienesServicisoCreate;
