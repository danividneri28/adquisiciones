import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { authenticateUser } from "../../api/auth/AuthApi";
import MensajeError from "../../components/MensajeError";
import { useState } from "react";

const LoginView = () => {
    const [errorResponse, setErrorResponse] = useState(null);
    const navigate = useNavigate();
    const initialValues = {
        correo: '',
        password: '',
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues })

    const { mutate } = useMutation({
    mutationFn: authenticateUser,
        onError: (error) => {
            setErrorResponse(error.message);
        },
        onSuccess: () => {
            navigate('/');
            reset();
        }
    })

    const handleLogin = (formData) => { 
        mutate(formData);
    }

    return (
        <div className='bg-white flex container mx-auto p-10'>
            <div>
                <section className="bg-gray-50 ">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                    Sign in to your account
                                </h1>
                                <form 
                                    className="space-y-4 md:space-y-6" 
                                    onSubmit={handleSubmit(handleLogin)}
                                >
                                    <div>
                                        <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 ">Correo</label>
                                        <input 
                                            type="correo" 
                                            name="correo" 
                                            id="correo" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                            placeholder="name@company.com" 
                                            {...register("correo", {
                                                required: "El correo es obligatorio",
                                                pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Correo no válido",
                                                },
                                            })}
                                        />

                                        {errors.correo && (
                                            <MensajeError>{errors.correo.message}</MensajeError>
                                        )}

                                        {errorResponse && (
                                            <MensajeError>{errorResponse}</MensajeError>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                            required=""
                                            {...register("password", {
                                                required: "La contraseña es obligatoria",
                                                minLength: {
                                                    value: 6,
                                                    message: "La contraseña debe tener al menos 6 caracteres",
                                                },
                                            })}
                                        />

                                        {errors.password && (
                                            <MensajeError>{errors.password.message}</MensajeError>
                                        )}
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                                    </div>
                                    
                                    <button 
                                        type="submit" 
                                        className="w-full text-white font-bold bg-customRed hover:bg-customRed2 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center "
                                    >
                                        Entrar
                                    </button>
                                    
                                    <p className="text-sm font-light text-gray-500 ">
                                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline ">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>1</div>
        </div>
    )
}

export default LoginView