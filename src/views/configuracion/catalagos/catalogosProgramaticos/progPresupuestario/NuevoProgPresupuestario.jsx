import React, { useEffect } from "react";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FormProgPresupuestario from "../../../../../components/configuracion/catalogosProgramaticos/FormProgPresupuestario";
import { useForm } from "react-hook-form";
import { crearProgramaPresupuestario } from "../../../../../api/configuracion/ApiProgramaPresupuestario"
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { getPilares } from "../../../../../api/configuracion/catalogosApi";
import { getSubfunciones } from "../../../../../api/configuracion/ApiSubfuncion";
import Spinner from "../../../../../components/Spinner";

const NuevoProgPresupuestario = () => {
    
    const { data:dataP, isLoading:isLoadingP, isError:isErrorP } = useQuery({
        queryKey: ['getPilares'],
        queryFn: getPilares,
        retry: false
    });
    
    const { data:datasub, isLoading:isLoadingsub, isError:isErrorsub } = useQuery({
        queryKey: ['getSubfunciones','Activo'],
        queryFn: getSubfunciones,
        retry: false
    });

    const navigate = useNavigate();
    
    const initialValuesPresupuesto = {
        id_subfuncion: "",
        nombre_presupuestario: "",
        codigo_presupuestario: "",
        descripcion: "",
        pilar: "",
        estado: ""
    };

    const {register, handleSubmit,formState: { errors },setError} = useForm({ defaultValues: initialValuesPresupuesto });

    const { mutate } = useMutation({
        mutationFn: crearProgramaPresupuestario,
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
                icon: 'success',
                title: '¡Muy bien!',
                text: 'Se ha finalizado el proceso de registro exitosamente',
                confirmButtonText: 'OK',
                confirmButtonColor:'#6b1e34',
                didClose:()=>navigate("/configuracion/catalogos/programaticos/programaPresupuestario")
              });
            },
    });


    const handleForm = (formData) => mutate(formData);

    useEffect(()=>{
        Object.keys(errors).length>0&&
        Swal.fire({
            icon: 'error',
            iconHtml:'!',
            title: '¡Campos vacíos!',
            text: 'Para continuar completa todos los campos',
            confirmButtonText: 'OK',
            confirmButtonColor:'#6b1e34'
        });
    },[errors]);


    if ( isLoadingP || isLoadingsub) return <Spinner />
    if ( isErrorP ||isErrorsub) return <Navigate to="/404" />

    return (
        <>
        <Breadcrumb
            items={[
                { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
                { href: "/configuracion/catalogos/menu", text: "CATÁLAGOS" },
                { href: "/configuracion/menu/catalogos/programaticos", text: "CATÁLAGOS PROGRAMÁTICOS" },
                { href: "/configuracion/catalogos/programaticos/programaPresupuestario", text: "REGISTRO DE PROGRAMAS PRESUPUESTARIOS" },
                { text: "PROGRAMA PRESUPUESTARIO" },
            ]}
        />

        <Titulo text="PROGRAMA PRESUPUESTARIO" className="mt-14" />

        <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
            <div className="bg-customRed2 rounded p-2">
                <h3 className="text-white font-bold">
                    CREAR PROGRAMA PRESUPUESTARIO
                </h3>
            </div>

            <form
                className="flex flex-col p-4 space-y-2 bg-customRed2 mt-1"
                onSubmit={handleSubmit(handleForm)}
                noValidate
            >
            
            <FormProgPresupuestario 
                register={register}
                errors={errors}
                dataP={dataP}
                datasub={datasub}
            />

            <div className="flex justify-end">
                <Link
                to="/configuracion/catalogos/programaticos/programaPresupuestario"
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

export default NuevoProgPresupuestario;
