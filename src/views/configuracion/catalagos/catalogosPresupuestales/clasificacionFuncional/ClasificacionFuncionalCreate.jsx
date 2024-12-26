import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { crearClasificacion } from "../../../../../api/configuracion/catalogos/presupuestales/ApiClasificacion";
import { onError } from "../../../../../utils/onError";
import AlertSuccess from "../../../../../components/AlertSuccess";
import FormClasificacionCreate from "../../../../../components/configuracion/catalogosPresupuestales/clasificacionFuncional/FormClasificacionCreate"

const ClasificacionFuncionalCreate = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    nombre_c_funcional: "",
    desc_c_funcional: "",
    codigo_c_funcional: "",
    estado:"",
  };

  const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues: initialValues});

  const { mutate } = useMutation({
    mutationFn: crearClasificacion,
    onError: (error) => {
      onError(error, setError);
    },
    onSuccess: (data) =>{
      setShowSuccess(true);
    }
  })

  const handleForm = (formData) => mutate(formData);
 
  return (
    <>
      <div>
        { showSuccess && <AlertSuccess route='/configuracion/catalogos/presupuestales/clasificacionFuncional' /> }
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
            {
              href: "/configuracion/catalogos/presupuestales",
              text: "CATALOGOS PRESUPUESTALES",
            },
            {
              href: "/configuracion/catalogos/presupuestales/clasificacionFuncional",
              text: "REGISTROS DE CLASIFICACIÓN FUNCIONAL",
            },
            { text: "CLASIFICACIÓN FUNCIONAL" },
          ]}
        />
        <Titulo text={"CLASIFICACIÓN FUNCIONAL"} className="mt-14"/>
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
            CLASIFICACIÓN FUNCIONAL
            </h3>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >
            <FormClasificacionCreate 
              register={register}
              errors={errors}
            />
            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/clasificacionFuncional">
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

export default ClasificacionFuncionalCreate;
