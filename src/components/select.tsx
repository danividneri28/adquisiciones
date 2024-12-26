import React from "react";
import MensajeError from "./MensajeError";
import { UseFormRegister } from "react-hook-form";
interface CustomSelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: string;
  maxLength?: number;
  valueAsNumber?: boolean;
  label?: string;
  required?: boolean;
  errors: object;
  data: any[];
  register: UseFormRegister<any>;
  renderItem: (x: any) => React.ReactElement;
}
const Select = ({
  label = "Campo",
  maxLength,
  data,
  valueAsNumber,
  name,
  required = false,
  errors,
  register,
  renderItem,
  ...props
}: CustomSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-white">
        {(required ? "*" : "") + label}:
      </label>

      <select
        className={`mt-1 block w-full rounded-md ${
          errors[name] ? "border-2" : ""
        } border-red-500 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm`}
        defaultValue=""
        {...props}
        {...register(name, {
          required: { value: required, message: "Campo vacío" },
          valueAsNumber,
          maxLength: maxLength
            ? {
                value: maxLength,
                message: `El campo "${label}" no debe contener más de ${maxLength} caracteres.`,
              }
            : undefined,
        })}
      >
        <option value="" disabled>
          Selecciona una opcion
        </option>
        {data.map(renderItem)}
      </select>

      {errors[name] && <MensajeError>{errors[name].message}</MensajeError>}
    </div>
  );
};

export default Select;
