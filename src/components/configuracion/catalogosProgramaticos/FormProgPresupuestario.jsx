import React, { useEffect, useState } from "react";
import Input from "../../input";
import Select from "../../select";
const FormProgPresupuestario = ({ register,dataP,datasub, errors, disabled, existe }) => {
  
  return (
    <>
      <Input
        required
        register={register}
        errors={errors}
        disabled={disabled}
        name="nombre_presupuestario"
        label="Nombre del programa presupuestario"
        maxLength={30}
      />

      <label className="font-semibold text-white" htmlFor="descripcion">
        *Descripción:
      </label>

      <textarea
        id="descripcion"
        name="descripcion"
        className={`border border-gray-300 rounded px-2 ${'descripcion' in errors ? "border-2 border-red-500" : ""}`}
        rows="6"
        disabled={disabled}
        {...register("descripcion", { 
          required: 'Campo vacío'
       })
      }  
      ></textarea>

      {errors.descripcion && (
        <p className="text-start text-customRed font-bold uppercase text-sm">
          {errors.descripcion.message}
        </p>
      )}

      <Input
        required
        register={register}
        errors={errors}
        disabled={existe ? existe : disabled}
        name="codigo_presupuestario"
        label="Código del programa presupuestario"
        maxLength={2}
        isNumber
      />
      
      <Select
          required
          register={register}
          errors={errors}
          disabled={disabled}
          name="pilar"
          label="Pilar"
          valueAsNumber
          data={dataP.data}
          renderItem={(x) => (
            <option
              key={x.id_pilar}
              value={x.id_pilar}
            >
              {x.descripcion}
            </option>
          )}
        />

      <Select
          required
          register={register}
          errors={errors}
          disabled={disabled}
          name="id_subfuncion"
          label="Subfunción"
          valueAsNumber
          data={datasub.data}
          renderItem={(x) => (
            <option
              key={x.id_subfuncion}
              value={x.id_subfuncion}
            >
              {x.nombre_subfuncion}
            </option>
          )}
        />

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
          { ...register("estado", { 
            required: !existe ? "Campo vacío" : false,
            })
          }  
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
          disabled={ existe ? existe : disabled}
          {...register("estado", { 
            required: !existe ? "Campo vacío" : false,
            })
          } 
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
    </>
  );
};

export default FormProgPresupuestario;
