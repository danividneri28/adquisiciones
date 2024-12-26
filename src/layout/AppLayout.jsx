import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logoGobti from '../assets/images/Logo_Gobti.png';
import btnMenu from '../assets/images/iconosNav/Laterales.png';
import campana from '../assets/images/iconosNav/campana.png';
import imgUsuario from '../assets/images/iconosNav/Usuario.png';
import flechaSesion from '../assets/images/flechaSesion.png';

import iconInicio from '../assets/images/iconosMenu/Inicio.png';
import iconFunciones from '../assets/images/iconosMenu/Funciones.png';
import iconEstadisticas from '../assets/images/iconosMenu/Estadisticas.png';
import iconConfiguracion from '../assets/images/iconosMenu/Configuracion.png';
import iconTutoriales from '../assets/images/iconosMenu/Tutoriales.png';
import { useAuth } from '../hooks/useAuth';
import Spinner from '../components/Spinner';

const AppLayout = () => {
    const { data, isLoading, isError } = useAuth();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(() => {
        const savedState = localStorage.getItem('isMenuOpen');
        return savedState !== null ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
        localStorage.setItem('isMenuOpen', JSON.stringify(isMenuOpen));
    }, [isMenuOpen]);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('AUTH_TOKEN');
        return navigate('/auth/login');
    };

    if(isLoading) return <Spinner />
   
    if (isError) return <Navigate to="auth/login" />;
    
    if (data.success === false) return <Navigate to="auth/login" />;

    if (data.success === true) return (
        <>
            <header className='flex shadow-md py-3 px-3 bg-customRed font-[sans-serif] min-h-[70px] tracking-wide fixed top-0 left-0 w-full z-50 gap-10'>
                <button onClick={handleClick} className='text-white'>
                    <img src={btnMenu} alt='menu' className='w-6 h-' />
                </button>

                <div className='flex flex-wrap items-center justify-between gap-3 w-full'>
                    <img 
                        src={logoGobti}
                        alt='logo' 
                        className='w-12 h-12'
                    />               

                    <div>
                        <h1 className='text-xs hidden md:flex md:text-2xl lg:text-4xl font-bold text-white'>Sistema de Adquisiciones</h1>
                    </div>

                    <div className='flex items-center max-lg:ml-auto space-x-3 gap-2'>
                        <button>
                            <img 
                                src={campana} 
                                alt='campana' 
                                className='w-6 h-7 inline-block'
                            />
                        </button>

                        <p className='text-white hidden md:flex font-bold text-sm md:text-[14px]'>
                            Alan Mauricio Reyes Telesforo
                        </p>

                        <div className='flex justify-between  gap-2'>
                            <img 
                                src={imgUsuario}
                                alt='avatar'
                                className='w-10 h-10 rounded-full'
                            />
                            
                            <button onClick={handleLogout}>
                                <ArrowLeftEndOnRectangleIcon className='w-6 h-6 inline-block text-white' />
                            </button>
                        </div>

                        {/* <button>
                            <ArrowLeftEndOnRectangleIcon className='w-6 h-6 inline-block text-white' />
                        </button> */}
                    </div>
                </div>
            </header>

            <aside className={`bg-customYellow text-white w-15 min-h-screen fixed top-0 left-0 transform transition-opacity duration-700 z-40 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <nav className='mt-20'>
                    <ul>
                        <Link to='/'>
                            <li className="p-3 hover:text-customRed cursor-pointer relative group">
                                <img src={iconInicio} alt="iconInicio" className="w-9 h-9" />
                                <span className="absolute left-[86%] top-1/2 transform -translate-y-1/2 ml-2 hidden group-hover:block bg-customRed text-white text-sm px-3 py-1 rounded shadow-lg">
                                Inicio
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 w-0 h-0 border-l-[10px] border-b-8 border-b-customRed border-l-transparent border-r-transparent rotate-12"></span>
                                </span>
                            </li>
                        </Link>

                        <Link to='/funciones'>
                            <li className="p-3 hover:text-customRed cursor-pointer relative group">
                            <img src={iconFunciones} alt="iconInicio" className="w-9 h-9" />
                            <span className="absolute left-[86%] top-1/2 transform -translate-y-1/2 ml-2 hidden group-hover:block bg-customRed text-white text-sm px-3 py-1 rounded shadow-lg">
                            Funciones
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 w-0 h-0 border-l-[10px] border-b-8 border-b-customRed border-l-transparent border-r-transparent rotate-12"></span>
                            </span>
                            </li>
                        </Link>

                        <Link to="">
                            <li className="p-3 hover:text-customRed cursor-pointer relative group">
                                <img
                                src={iconEstadisticas}
                                alt="iconInicio"
                                className="w-9 h-9"
                                />
                                <span className="absolute left-[86%] top-1/2 transform -translate-y-1/2 ml-2 hidden group-hover:block bg-customRed text-white text-sm px-3 py-1 rounded shadow-lg">
                                Estadísticas
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 w-0 h-0 border-l-[10px] border-b-8 border-b-customRed border-l-transparent border-r-transparent rotate-12"></span>
                                </span>
                            </li>
                        </Link>

                        <Link to='/configuracion/menu'>
                            <li className="p-3 hover:text-customRed cursor-pointer relative group">
                                <img
                                src={iconConfiguracion}
                                alt="iconInicio"
                                className="w-9 h-9"
                                />
                                <span className="absolute left-[86%] top-1/2 transform -translate-y-1/2 ml-2 hidden group-hover:block bg-customRed text-white text-sm px-3 py-1 rounded shadow-lg">
                                Configuración
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 w-0 h-0 border-l-[10px] border-b-8 border-b-customRed border-l-transparent border-r-transparent rotate-12"></span>
                                </span>
                            </li>
                        </Link>

                        <Link to="">
                            <li className="p-3 hover:text-customRed cursor-pointer relative group">
                                <img
                                src={iconTutoriales}
                                alt="iconInicio"
                                className="w-9 h-9"
                                />
                                <span className="absolute left-[86%] top-1/2 transform -translate-y-1/2 ml-2 hidden group-hover:block bg-customRed text-white text-sm px-3 py-1 rounded shadow-lg">
                                Tutoriales
                                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 w-0 h-0 border-l-[10px] border-b-8 border-b-customRed border-l-transparent border-r-transparent rotate-12"></span>
                                </span>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </aside>
        
            <div className={`min-h-screen p-5 py-24 md:pl-20 lg:pl-10 md:pr-10 ${isMenuOpen ? 'lg:pl-24 pl-20' : ''}`}>
                <Outlet />
            </div>

            <ToastContainer 
                pauseOnFocusLoss={false}
                pauseOnHover={false}
            />
        </>
    );
};

export default AppLayout;