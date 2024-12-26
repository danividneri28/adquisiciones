import { useEffect } from "react";
import AlertaError from "../../AlertError";
import InputField from "../../InputField";
import MensajeError from "../../MensajeError";
import Spinner from "../../Spinner";

export const FormFinanciamiento = ({ register, errors, disabled }) => {
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      AlertaError({
        title: "¡Campos Vacíos!",
        message: "Para continuar debe completar los campos obligatorios",
      });
    }
  }, [errors]);


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
        <InputField
          id="nombre_financiemiento"
          label="*Tipo de ingreso local o federal"
          name="nombre_financiemiento"
          placeholder="Tipo de ingreso local o federal"
          errors={errors}
          disabled={disabled}
          register={register}
          validationRules={{ required: "Campo vacío" }}
        />
        <label
          htmlFor="desc_financiamiento"
          className="block text-sm font-medium text-white"
        >
          *Descripción
        </label>
        <textarea
          type="text"
          name="desc_financiamiento"
          id="desc_financiamiento"
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm ${
            errors.desc_financiamiento ? "border-red-600" : "border-gray-300"
          }`}
          required
          disabled={disabled}
          {...register("desc_financiamiento", {
            required: "Campo vacío",
          })}
          rows={5}
        />
        {errors.desc_financiamiento && (
          <MensajeError>{errors.desc_financiamiento.message}</MensajeError>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div>
            <label
              htmlFor="codigo_financiamiento"
              className="block text-sm font-medium text-white"
            >
              *Codigo de fuente de financiamiento
            </label>
            <select
              name="codigo_financiemiento"
              id="codigo_financiemiento"
              className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${
                errors.tipo ? "border-red-600" : "border-gray-300"
              }`}
              required
              disabled={disabled}
              {...register("codigo_financiemiento", {
                required: "Campo vacío",
              })}
            >
              <option value="" disabled>
                Seleccione
              </option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
              <option value="4000">4000</option>
              <option value="5000">5000</option>
            </select>
            {errors.codigo_financiemiento && (
              <MensajeError>
                {errors.codigo_financiemiento.message}
              </MensajeError>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              *Estado:
            </label>
            <div className="flex items-center">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  id="estado"
                  value="Activo"
                  className="text-blue-500 focus:ring-blue-500"
                  defaultChecked
                  disabled={disabled}
                  {...register("estado")}
                />
                <span className="ml-2 text-white">Activo</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="estado"
                  value="Inactivo"
                  className="text-blue-500 focus:ring-blue-500"
                  {...register("estado")}
                  disabled={disabled}
                />
                <span className="ml-2 text-white">Inactivo</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
