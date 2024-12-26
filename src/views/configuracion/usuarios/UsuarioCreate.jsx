import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import FormUsuarios from "../../../components/configuracion/usuarios/FormUsuarios";
import { useMutation } from "@tanstack/react-query";
import { crearUsuario } from "../../../api/configuracion/ApiUsers";

const UsuarioCreate = () => {
  const navigate = useNavigate();
  
  const initialValues = {
    tipo: "",
    nombre: "",
    ap_paterno: "",
    ap_materno: "",
    correo: "",
    num_empleado: "",
    id_area: "",
    estado: "",
  };

  const { register, handleSubmit, formState: { errors }} = useForm({ defaultValues: initialValues});

  const { mutate } = useMutation({
    mutationFn: crearUsuario,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      navigate("/configuracion/usuarios/listado");
    }
  })

  const handleForm = (formData) => mutate(formData);

  return (
    <>
      <div>
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/usuarios/listado", text: "REGISTRO DE USUARIOS"},
            { text: "REGISTRO DE USUARIO" },
          ]}
        />

        <Titulo text={"REGISTRO DE USUARIOS"} className="mt-14" />

        <div className="bg-gray-100  mt-8 rounded-lg">
          <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }}>
            <h3 className="text-white font-bold uppercase text-xl">datos del área</h3>
          </div>

          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >

            <FormUsuarios 
              register={register}
              errors={errors}
            />

            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/usuarios/listado">
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

export default UsuarioCreate;
