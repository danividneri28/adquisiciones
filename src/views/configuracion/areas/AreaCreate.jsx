import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  getArea,
  getAreas,
  getAreaUsers,
  postAreas,
  putAreas,
} from "../../../api/configuracion/ApiAreas";
import { getEntidad_federativa } from "../../../api/configuracion/catalogosApi";
import { onError } from "../../../utils/onError";
import Input from "../../../components/input";
import Select from "../../../components/select";
import Spinner from "../../../components/Spinner";
import Swal from "sweetalert2";

const AreaCreate = () => {
  const params = useParams();
  const param = !!params.id;

  const { data: dataE, isLoading: isLoadingE } = useQuery({
    queryKey: ["getEntidad_federativa"],
    queryFn: getEntidad_federativa,
  });

  const { data: dataA, isLoading: isLoadingA } = useQuery({
    queryKey: ["getAreas"],
    queryFn: getAreas,
  });

  const { data: dataU, isLoading: isLoadingU } = useQuery({
    queryKey: ["getAreaUsers", params.id],
    queryFn: getAreaUsers,
    enabled: param,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["getArea", params.id],
    queryFn: getArea,
    enabled: param,
  });

  if (isLoadingE || isLoadingA || isLoading || isLoadingU)
    return <Spinner />;

  return (
    <>
      <div>
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text:"CONFIGURACIÓN" },
            { href: "/configuracion/areas/listado", text: "REGISTRO DE ÁREAS", },
            { text:"ÁREA" },
          ]}
        />

        <Titulo text={"ÁREA"} className="lg:mt-14" />
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
              datos del área
            </h3>
          </div>
          <Form
            defaultValues={data?.data}
            dataE={dataE}
            dataA={dataA}
            dataU={dataU}
            update={param}
          />
        </div>
      </div>
    </>
  );
};

function Form({ defaultValues, dataE, dataA, dataU, update }) {
  const [isEditing, setIsEditing] = useState(update);

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ defaultValues });

  const { mutate } = useMutation({
    mutationFn: update ? putAreas : postAreas,
    onError: (error) => onError(error, setError),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getAreas"] });
      Swal.fire({
        icon: 'success',
        title: '¡Muy bien!',
        text: 'Se ha finalizado el proceso de registro exitosamente',
        confirmButtonText: 'OK',
        confirmButtonColor:'#6b1e34',
        didClose:()=>navigate("/configuracion/areas/listado"),
      });
    },
  });

  const handleForm = (formData) => mutate(formData);


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

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="w-full p-6 rounded-lg"
      style={{ backgroundColor: "#956876" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Input required register={register} errors={errors} disabled={isEditing} name="nombre_area" label="Nombre del área" maxLength={30}/>
        <Input required register={register} errors={errors} disabled={isEditing} name="clave_area" label="Clave del área" maxLength={8}/>
        <Input required register={register} errors={errors} disabled={isEditing} name="codigo_gral" label="Clave general" maxLength={8}/>
        <Input required register={register} errors={errors} disabled={isEditing} name="codigo_aux" label="Clave auxiliar" maxLength={8}/>
        <Input required register={register} errors={errors} disabled={isEditing} name="telefono" label="Teléfono" maxLength={10}/>
        <Input register={register} errors={errors} disabled={isEditing} name="ext" label="Extensión" maxLength={5} valueAsNumber/>
        <Input required register={register} errors={errors} disabled={isEditing} name="calle" label="Calle" maxLength={30}/>
        <Input required register={register} errors={errors} disabled={isEditing} name="no_ext" label="Número exterior" maxLength={5}/>
        <Input register={register} errors={errors} disabled={isEditing} name="no_int" label="Número Interior" maxLength={5}/>
        <Input required register={register} errors={errors} disabled={isEditing} name="colonia" label="Colonia" maxLength={30}/>
        <Input required register={register} errors={errors} disabled={isEditing} name="municipio" label="Municipio/Alcaldia" maxLength={30}/>
        <Select 
          required
          register={register}
          errors={errors}
          disabled={isEditing}
          name="id_entidad"
          label="Entidad Federativa"
          valueAsNumber
          data={dataE.data}
          renderItem={x=>
            <option key={x.id} value={x.id}>
              {x.entidad}
            </option>}
        />
        <Input required register={register} errors={errors} disabled={isEditing} name="cp" label="Codigo Postal" maxLength={5} valueAsNumber/>
        {defaultValues?.id && (
          <Select 
            required
            register={register}
            errors={errors}
            disabled={isEditing}
            name="id_titular"
            label="Titual del área"
            valueAsNumber
            data={dataU.data}
            renderItem={x=>
              <option
                key={x.id}
                value={x.id}
                disabled={defaultValues?.id_titular == x.id}
              >
                {x.nombre}
              </option>
              }
          />
        )}
        <Select
          register={register}
          errors={errors}
          disabled={isEditing}
          name="id_padre"
          label="Area que depende"
          valueAsNumber
          data={dataA.data}
          renderItem={(x) => (
            <option
              key={x.id}
              value={x.id}
              disabled={defaultValues?.id == x.id}
            >
              {x.nombre_area}
            </option>
          )}
        />
      </div>
      <p className="flex justify-end text-sm text-white">
        *Campos Obligatorios
      </p>
      <div className="flex justify-end gap-4 mt-4">
        <Link to="/configuracion/areas/listado">
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
  );
}
export default AreaCreate;
