import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSubcapitulo, postSubcapitulo, putSubcapitulo } from "../../../../../../api/configuracion/catalogos/presupuestales/objetoGasto/subcapitulos/ApiSubcapitulos";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Input from "../../../../../../components/input";
import MensajeError from "../../../../../../components/MensajeError";
import Select from "react-select";
import { useCapitulos } from "../../../../../../hooks/useCapitulos";
import Spinner from "../../../../../../components/Spinner";
import { onError } from "../../../../../../utils/onError";

const SubCapituloCreate = () => {
  const params = useParams();
  const param = !!params.id;
  const { data, isLoading } = useQuery({
      queryKey: ["getSubCapitulo", params.id],
      queryFn: getSubcapitulo,
      enabled: param,
  });

  return (
    <>
      <div>
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
            { href: "/configuracion/catalogos/presupuestales", text: "CATALOGOS PRESUPUESTALES" },
            { href: "/configuracion/catalogos/presupuestales/objetoGasto", text: "CLASIFICACIÓN POR OBJETO DE GASTO" },
            { href: "/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo", text: "REGISTRO DE SUBCAPÍTULOS" },
            { text: "SUBCAPÍTULO" },
          ]}
        />

        <Titulo text={'SUBCAPITULO'} className="mt-14"/>
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
            nuevo subcapitulo
            </h3>
          </div>
          <div className="w-full">
            <FormSubcapitulo defaultValues={data?.data} update={param} />
          </div>
        </div>
      </div>
    </>
  );
};

function FormSubcapitulo({ defaultValues, update }){
  const [ isEditing, setIsEditing] = useState(update);
  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  }
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: {errors}, setError, control } = useForm({defaultValues});

  const { mutate } = useMutation({
    mutationFn: update? putSubcapitulo : postSubcapitulo,
    onError: (error) => onError(error, setError),
    onSuccess: (data) => {
      queryClient.invalidateQueries('getSubcapitulo');
      Swal.fire({
        icon: 'success',
        title: '¡Muy bien!',
        text: 'Se ha finalizado el proceso de registro exitosamente',
        confirmButtonText: 'OK',
        confirmButtonColor:'#6b1e34',
        didClose:()=>navigate("/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo"),
      });
    }
  });
  const handleForm = (formData) => mutate(formData);
  // const handleForm = (formData) => {
  //   console.log(formData);
  // }
  useEffect(()=>{
    console.log(Object.keys(errors).length);
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

  const { data, isLoading } = useCapitulos();
  if(isLoading) return <Spinner/>

  const options = data?.data.map((capitulo) => (
    { value: capitulo.id_capitulo, label: [capitulo.codigo_capitulo," - ",capitulo.nombre_capitulo] }
  ));

  return(
    <form onSubmit={handleSubmit(handleForm)} className="w-full p-6 rounded-lg" style={{background: "#956876"}}>
      <Input required register={register} errors={errors} disabled={isEditing} name="nombre_subcapitulo" label="Nombre del subcapítulo" maxLength={30}/>
      <br />
      <Input required register={register} errors={errors} disabled={isEditing} name="codigo_subcapitulo" label="Código del subcapítulo" maxLength={4}/>
        <br />
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Descripción</label>
        <textarea id="message" name="desc_subcapitulo" rows="4" className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 ${
          'desc_subcapitulo' in errors ? "border-2 border-red-500 shadow-sm" : ""
        } p-3 sm:text-sm`} disabled={isEditing} maxLength={400} 
        {...register("desc_subcapitulo", { 
            required: "CAMPO VACÍO"
        })
        } 
        ></textarea>
        {errors.desc_subcapitulo && (
            <MensajeError>{errors.desc_subcapitulo.message}</MensajeError>
        )}  
        <div className="md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1">
          <div className="w-full">
              <Controller
              control={control}
              name="id_capitulo"
              render={({ field }) => (
                <div className="mt-3 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Capítulo</label>
                  <Select
                    className={`block p-0 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 ${
                    'id_capitulo' in errors ? "border-2 border-red-500 shadow-sm" : ""
                    } p-3 sm:text-sm`}
                    placeholder="Seleccionar"
                    options={options}
                    onChange={(({ value }) => field.onChange(value))}
                  />
                </div>
              )}
              rules={{ required: "CAMPO VACÍO"}}
            />
            {errors.id_capitulo && (
                <MensajeError>{errors.id_capitulo.message}</MensajeError>
            )}
          </div>
          <div className="w-full mt-4">
            <label htmlFor="estado" className="text-white font-semibold text-sm">*Estado</label>
            <div className="flex mt-2">
                <div className="flex items-center me-4">
                    <input defaultChecked id="inline-checked-radio" type="radio" value="Activo" name="estado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="inline-checked-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Activo</label>
                </div>
                <div className="flex items-center me-4">
                    <input id="inline-radio" type="radio" value="Inactivo" name="estado" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactivo</label>
                </div> 
            </div>
          </div>
        </div>
        <p className="flex justify-end text-sm text-white font-semibold mt-4">
            *Campos Obligatorios
        </p>
        <div className="flex justify-end gap-4 mt-4">
          <Link to="/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo">
            <button
              type="button"
              className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
              aria-label="Regresar a listado de áreas"
            >
              Regresar
            </button>
          </Link>
          {!isEditing ? (
            <button
              type="submit"
              className=" text-white px-4 py-2 rounded-md shadow"
              style={{ backgroundColor: "#bc965c" }}
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
  )
}

export default SubCapituloCreate;
