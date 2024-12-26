import React from 'react'

import imgFondoLogin from "../../assets/images/login/fondo_login.png"
import imgLogo from "../../assets/images/login/logo.png"
import { Link } from 'react-router-dom'

const RememberPassword = () => {
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
                    <h1 className="mt-6 text-5xl text-customRed font-bold">¿Olvido su contraseña?</h1>
                    <h1 className="text-2xl md:text-2xl font-bold text-customYellow mt-1">
                        Para reestablecer su contraseña, ingrese la dirección de correo electrónico asociada a su cuenta. 
                    </h1>

                    <form
                        className='space-y-4 mt-6'
                    >
                        <div>
                            <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 ">Correo</label>
                            <input 
                                type="correo" 
                                name="correo" 
                                id="correo" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                placeholder="name@company.com" 
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-30 text-white font-bold bg-customRed hover:bg-customRed2 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center "
                        >
                            ENVIAR CORREO
                        </button>
                        <Link to="/auth/password-email" className="text-customRed font-bold text-sm">Regresar al login</Link>
                    </form>
                </section>
            </div>
            
            <img src={imgFondoLogin} alt="Fondo login" className="hidden xl:w-1/2 xl:block"/>
        </div>
    )
}

export default RememberPassword