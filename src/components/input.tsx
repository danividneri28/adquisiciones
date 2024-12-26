import React from "react";
import MensajeError from "./MensajeError";
import { UseFormRegister } from "react-hook-form";
interface CustomInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  maxLength?: number;
  minLength?: number;
  max?: number;
  valueAsNumber?: boolean;
  label?: string;
  required?: boolean;
  errors: object;
  register: UseFormRegister<any>;
}
const Input = ({
  label = "Campo",
  maxLength,
  minLength,
  max,
  valueAsNumber,
  name,
  required = false,
  errors,
  register,
  ...props
}: CustomInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-white">
        {(required ? "*" : "") + label}:
      </label>
      <input
        maxLength={maxLength}
        className={`mt-1 block w-full rounded-md ${
          errors[name] ? "border-2" : ""
        } border-red-500 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm`}
        {...props}
        {...register(name, {
          valueAsNumber,
          validate: valueAsNumber
            ? (value) => !isNaN(value) || "Debe ser un número válido"
            : undefined,
          required: { value: required, message: "Campo vacío" },
          // max: max
          //   ? {
          //       value: max,
          //       message: `El campo "${label}" no debe contener más de ${max} caracteres.`,
          //     }
          //   : undefined,
          minLength: minLength
            ? {
                value: minLength,
                message: `El campo "${label}" debe contener al menos ${minLength} caracteres.`,
              }
            : undefined,
        })}
      />

      {errors[name] && <MensajeError>{errors[name].message}</MensajeError>}
    </div>
  );
};

export default Input;
