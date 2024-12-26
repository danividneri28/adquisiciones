import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Titulo from "../../../Titulo";
import Breadcrumb from "../../../Breadcrumb";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editarGasto } from "../../../../api/configuracion/catalogos/presupuestales/ApiTipoGasto";
import { onError } from "../../../../utils/onError";
import FormTipoGasto from "./FormTipoGasto";
import AlertSuccess from "../../../AlertSuccess";

const FormGastoEdit = ({ data, gastoId } ) => {
    const [isEditing, setIsEditing] = useState(false);
    const[showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();

    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const defaultValues = {
        nombre_gasto: data.nombre_gasto,
        desc_gasto: data.desc_gasto,
        codigo_gasto: data.codigo_gasto,
        estado: data.estado
    }

    const { register, handleSubmit, formState: { errors }, setError} = useForm({ defaultValues });

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editarGasto,
        onError: (error) => {
            onError(error, setError);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries('getTipoGastos');
            setShowSuccess(true);
        }
    })

    const handleForm = (formData) => {
        const data ={
            ...formData,
            id: gastoId
        }
        mutate(data);
    }
    return (
        <>
          { showSuccess && <AlertSuccess route='/configuracion/catalogos/presupuestales/tipoGasto' /> }
      <div>
        <Breadcrumb
            items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/catalogos/menu", text: "CATÁLOGOS" },
            { href: "/configuracion/catalogos/presupuestales", text: "CATÁLOGOS PRESUPUESTALES" },
            { href: "/configuracion/catalogos/presupuestales/tipoGasto", text: "REGISTROS TIPOS DE GASTOS" },
            {  text: "TIPO DE GASTO" },
         ]}
        />

        <Titulo text={'EDITAR TIPO DE GASTO'} className="mt-14"/>
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
            editar tipo de gasto
            </h3>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
            onSubmit={handleSubmit(handleForm)}
          >
            <FormTipoGasto
             register={register}
             errors={errors}
             disabled={!isEditing}
             defaultValues={defaultValues} 
             />



            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/tipoGasto">
                <button
                  type="button"
                  className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                  aria-label="Regresar a listado de áreas"
                >
                  Regresar
                </button>
              </Link>
                {
                    isEditing ? (
                        <button
                            type="submit"
                            className="bg-customYellow text-white px-4 py-2 rounded ml-4"
                        >
                            Guardar
                        </button>
                    ) : (
                        <button
                            type="button"
                            role='button'
                            className="bg-customYellow text-white px-4 py-2 rounded ml-4"
                            onClick={handleEditClick}
                        >
                            Editar
                        </button>
                    )
                }
            </div>
          </form>
        </div>
      </div>
    </>

    )
}

export default FormGastoEdit