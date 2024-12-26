import React from 'react';
import MensajeError from './MensajeError';

const InputField = ({ id, label, type = "text", register, errors, validationRules, disabled, maxLength = "50" }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-white">{label}</label>
            <input
                maxLength={maxLength}
                type={type}
                id={id}
                className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${errors[id] ? 'border-red-600' : 'border-gray-300'}`}
                {...register(id, validationRules)}
                disabled={disabled}
            />
            {errors[id] && (
                <MensajeError>{errors[id].message}</MensajeError>
            )}
        </div>
    );
};

export default InputField;