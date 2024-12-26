import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";

import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import FormTipoGasto from "../../../../../components/configuracion/catalogosPresupuestales/tipoGasto/FormTipoGasto";
import {useMutation } from "@tanstack/react-query";
import {postTipoGasto} from "../../../../../api/configuracion/catalogos/presupuestales/ApiTipoGasto";
import AlertSuccess from "../../../../../components/AlertSuccess";
import { onError } from "../../../../../utils/onError";


const TipoGastoCreate = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    nombre_gasto: "",
    desc_gasto: "",
    codigo_gasto: "",
    estado: "",
  };

   const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues: initialValues});
 
   const { mutate } = useMutation({
     mutationFn: postTipoGasto,
     onError: (error) => {
       onError(error, setError);
     },
     onSuccess: (data) => {
       setShowSuccess(true);
     }
   })

 const handleForm = (formData) => mutate(formData);

 return (
    <>
      <div>
        { showSuccess && <AlertSuccess route='/configuracion/catalogos/presupuestales/tipoGasto' /> }
        <Breadcrumb 
           items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/catalogos/menu", text: "CATÁLOGOS" },
            { href: "/configuracion/catalogos/presupuestales", text: "CATÁLOGOS PRESUPUESTALES" },
            { href: "/configuracion/catalogos/presupuestales/tipoGasto", text: "REGISTROS TIPOS DE GASTOS" },
            {  text: "TIPO DE GASTO" },
            
          ]}
        />
        <Titulo text={'TIPO DE GASTO'}  className="mt-14" /> 

        <div className="flex flex-col w-full h-full mt-20 text-gray-700 rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed2 rounded p-2 mb-2">
            <h3 className="text-white font-bold uppercase text-xl">nuevo tipo de gasto</h3>
          </div>

          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >
          
          <FormTipoGasto
            register={register}
            errors={errors}
          />
          <div className="flex justify-end gap-4 mt-4">
            <Link to="/configuracion/catalogos/presupuestales/tipoGasto">
              <button
                type="button"
                className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                aria-label="Regresar a Tipos de Gastos"
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
 )
}

export default TipoGastoCreate;
