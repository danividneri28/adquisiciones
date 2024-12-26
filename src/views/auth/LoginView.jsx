import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";

import { authenticateUser } from "../../api/auth/AuthApi";
import MensajeError from "../../components/MensajeError";
import imgFondoLogin from "../../assets/images/login/fondo_login.png"
import imgLogo from "../../assets/images/login/logo.png"
import ReCAPTCHA from "react-google-recaptcha";

const LoginView = () => {
    const recaptcha = useRef();
    const [errorRecaptcha, setErrorRecaptcha] = useState("");
    const [errorResponse, setErrorResponse] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
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
        const captchaValue = recaptcha.current.getValue()
        if (!captchaValue) {
            setErrorRecaptcha("Por favor, verifica que no eres un robot");
        } else {
            const data = {
                ...formData,
                captcha: captchaValue,
            }
            setErrorRecaptcha("");
            mutate(data);
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='bg-white flex items-center h-auto mx-auto w-full xl:w-max py-6 xl:py-0'>
            <div className="w-full xl:w-1/2 px-10">
                <div className="flex mt-2">
                    <img
                        src={imgLogo}
                        alt="Logo"
                        width="120"
                        height="120"
                    />
                </div>
                <section>
                    <h1 className="mt-6 text-5xl text-customRed font-bold">¡Bienvenido!</h1>
                    <h1 className="text-2xl md:text-2xl font-bold text-customYellow mt-1">Sistema de Adquisiciones</h1>
                    <form 
                        className="space-y-4 mt-6" 
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
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
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
                                <button 
                                    type="button" 
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" 
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
                                </button>
                            </div>

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
                                    <label htmlFor="remember" className="text-gray-500 ">Recordar</label>
                                </div>
                            </div>
                            <Link to="/auth/remember-password" className="text-sm font-medium text-primary-600 hover:underline ">¿Olvidaste tu contraseña?</Link>
                        </div>
                        
                        <div className="flex items-center justify-center"> <ReCAPTCHA ref={recaptcha} sitekey={import.meta.env.VITE_SITE_KEY} /> </div>
                        <div className="flex items-center justify-center"> {errorRecaptcha && ( <MensajeError>{ errorRecaptcha }</MensajeError> )} </div>

                        <button 
                            type="submit" 
                            className="w-full text-white font-bold bg-customRed hover:bg-customRed2 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                            Entrar
                        </button>

                    </form>
                </section>
            </div>
            
            <img src={imgFondoLogin} alt="Fondo login" className="hidden xl:w-1/2 xl:block"/>
        </div>
    )
}

export default LoginView