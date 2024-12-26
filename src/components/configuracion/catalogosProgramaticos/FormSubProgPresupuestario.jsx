import React, { useEffect, useState } from "react";
import Input from "../../input";
import Select from "../../select";
import { getProgramasPresupuestarios } from "../../../api/configuracion/ApiSubProgramaPresupuestario";

const FormSubProgPresupuestario = ({ register,dataPP, errors, disabled,existe }) => {
  console.log(existe);

  return (
    <>
      <div className="block md:flex">
        <div className="w-full md:w-1/2 px-2">
          <Input
            required
            register={register}
            errors={errors}
            disabled={disabled}
            name="nombre"
            label="Nombre del programa presupuestario"
            maxLength={30}
          />
        </div>

        <div className="w-full md:w-1/2 px-2">
          <Input
            required
            register={register}
            errors={errors}
            disabled={existe ? existe : disabled}
            name="codigo_presupuestario"
            label="Código del programa presupuestario"
            maxLength={2}
          />
        </div>
      </div>

      <div className="px-2">
        <Select
          required
          register={register}
          errors={errors}
          disabled={existe}
          name="id_programa_presupuestario"
          label="Programa presupuestario"
          valueAsNumber
          data={dataPP.data}
          renderItem={(x) => (
            <option
              key={x.id_programa_prespuestario}
              value={x.id_programa_prespuestario}
            >
              {x.nombre_presupuestario}
            </option>
          )}
        />
      </div>

      <div className="w-full md:w-1/2 px-2">
        <label className="font-semibold text-white" htmlFor="estado">
          *Estado:
        </label>

        <div className="flex">
        <input
          type="radio"
          id="activo"
          name="estado"
          value="Activo"
          className="mr-1"
          disabled={existe ? existe : disabled}
          defaultChecked
          {...register("estado", {
            required: !existe ? "Campo vacío" : false,
          })}
        />
          <label htmlFor="activo" className="mr-4 text-white">
            Activo
          </label>

          <input
            type="radio"
            id="inactivo"
            name="estado"
            value="Inactivo"
            className="mr-1"
            disabled={disabled}
            {...register("estado", {
              required: !existe ? "Campo vacío" : false,
            })}
          />
          <label htmlFor="inactivo" className="text-white">
            Inactivo
          </label>
        </div>
        {errors.estado && (
          <p className="block text-start text-customRed font-bold uppercase text-sm">
            {errors.estado.message}
          </p>
        )}
      </div>
    </>
  );
};

export default FormSubProgPresupuestario;
