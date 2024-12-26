import React, { useEffect } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FormSubProgPresupuestario from "../../../../../components/configuracion/catalogosProgramaticos/FormSubProgPresupuestario";
import { crearSubProgramaPresupuestario, getProgramasPresupuestarios } from "../../../../../api/configuracion/ApiSubProgramaPresupuestario";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
import Spinner from "../../../../../components/Spinner";
const NuevoPrograma = () => {
  const navigate = useNavigate();

  const { data:dataPP, isLoading:isLoadingPP, isError:isErrorPP } = useQuery({
    queryKey: ['getProgramasPresupuestarios'],
    queryFn: getProgramasPresupuestarios,
    retry: false
  });

  const initialValuesPresupuesto = {
    nombre: "",
    codigo_presupuestario: "",
    id_programa_presupuestario: "",
    estado: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ defaultValues: initialValuesPresupuesto });

  const { mutate } = useMutation({
    mutationFn: crearSubProgramaPresupuestario,
    onError: (error) => {
      if (error.errors) {
        const backendErrors = error.errors;
        Object.entries(backendErrors).forEach(([field, message]) => {
          setError(field, { type: "backend", message });
        });
      }
    },
    onSuccess: (data) => {
      Swal.fire({
        icon: "success",
        title: "¡Muy bien!",
        text: "Se ha finalizado el proceso de registro exitosamente",
        confirmButtonText: "OK",
        confirmButtonColor: "#6b1e34",
        didClose: () =>
          navigate(
            "/configuracion/catalogos/programaticos/subprogramaPresupuestario"
          ),
      });
    },
  });

  const handleForm = (formData) => mutate(formData);

  useEffect(() => {
   
    Object.keys(errors).length > 0 &&
      Swal.fire({
        icon: "error",
        iconHtml: "!",
        title: "¡Campos vacíos!",
        text: "Para continuar completa todos los campos",
        confirmButtonText: "OK",
        confirmButtonColor: "#6b1e34",
      });
  }, [errors]);

  if ( isLoadingPP ) return <Spinner />
  if ( isErrorPP ) return <Navigate to="/404" />

  return (
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATÁLAGOS" },
          {
            href: "/configuracion/menu/catalogos/programaticos",
            text: "CATÁLAGOS PROGRAMÁTICOS",
          },
          {
            href: "/configuracion/catalogos/programaticos/subprogramaPresupuestario",
            text: "REGISTRO DE SUBPROGRAMAS PRESUPUESTARIOS",
          },
          { text: "SUBPROGRAMA PRESUPUESTARIO" },
        ]}
      />

      <Titulo text="SUBPROGRAMA PRESUPUESTARIO" className="mt-14" />

      <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
        <div className="bg-customRed2 rounded p-2">
          <h3 className="text-white font-bold">
            CREAR SUBPROGRAMA PRESUPUESTARIOS
          </h3>
        </div>

        <form
          className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <FormSubProgPresupuestario 
            register={register}
            errors={errors}
            dataPP={dataPP}
          />

          <div className="flex justify-end">
            <Link
              to="/configuracion/catalogos/programaticos/subprogramaPresupuestario"
              className="bg-customRed text-white px-4 py-2 rounded"
            >
              Regresar
            </Link>

            <button className="bg-customYellow text-white px-4 py-2 rounded ml-4">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NuevoPrograma;
