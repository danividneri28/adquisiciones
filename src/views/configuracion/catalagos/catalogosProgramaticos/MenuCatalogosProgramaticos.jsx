import React from 'react'
import Breadcrumb from '../../../../components/Breadcrumb'
import { Link } from 'react-router-dom'

import imgFinalidad from '../../../../assets/images/configuracion/programaticos/finalidad.png';
import imgFuncion from '../../../../assets/images/configuracion/programaticos/funcion.png';
import imgSubfuncion from '../../../../assets/images/configuracion/programaticos/subfuncion.png';
import imgProPresu from '../../../../assets/images/configuracion/programaticos/programaPresupuestario.png';
import imgSubProPresu from '../../../../assets/images/configuracion/programaticos/subprogramaPresupuestario.png';
import imgProyecto from '../../../../assets/images/configuracion/programaticos/proyecto.png';
import imgActividades from '../../../../assets/images/configuracion/programaticos/actividades.png';
import Titulo from '../../../../components/Titulo';
import Regresar from '../../../../components/Regresar';

const MenuCatalogosProgramaticos = () => {
  return (
    <>
        <Breadcrumb
            items ={[
                { href: '/configuracion/menu', text: 'CONFIGURACIÓN' },
                { href: "/configuracion/catalogos/menu", text: 'CATÁLAGOS' },
                { text: 'CATÁLAGOS PROGRAMÁTICOS' }
            ]}
        />

       <Regresar enlace='/configuracion/catalogos/menu'/>
        
        <Titulo text='CATÁLAGOS PROGRAMÁTICOS' />

        <div className='min-h-[50vh] flex flex-col items-center justify-center md:mt-10'>
            <div className='px-0 py-0 md:px-40 block md:flex md:justify-center md:items-center md:gap-10'>
                <Link
                    to={'/configuracion/catalogos/programaticos/finalidad'}
                    className='w-72 md:w-40 xl:w-80 mt-28 md:mt-0'
                >
                    <img src={ imgFinalidad } alt="Icono menu Programaticos" className='w-96 mt-28 md:mt-0' />
                </Link>

                <Link
                    to={'/configuracion/catalogos/programaticos/funcion'}
                    className='w-72 md:w-40 xl:w-80 mt-28 md:mt-0'
                >
                    <img src={ imgFuncion } alt="Icono menu Presupuestal" className='w-96 mt-28 md:mt-0' />
                </Link>
                
                <Link
                    to={'/configuracion/catalogos/programaticos/subfuncion'}
                    className='w-72 md:w-40 xl:w-80 mt-28 md:mt-0'
                >
                    <img src={ imgSubfuncion } alt="Icono menu Programaticos" className='w-96 mt-28 md:mt-0' />
                </Link>

                <Link
                    to={'/configuracion/catalogos/programaticos/programaPresupuestario'}
                    className='w-72 md:w-40 xl:w-80 mt-28 md:mt-0'
                >
                   <img src={ imgProPresu } alt="Icono menu Presupuestal" className='w-96 mt-28 md:mt-0' />
                </Link>
            </div>
            
            <div className='px-0 py-0 md:px-40 block md:flex md:justify-center md:items-center md:gap-10 md:mt-24'>
                <Link
                    to={'/configuracion/catalogos/programaticos/subprogramaPresupuestario'}
                    className='w-72 md:w-40 xl:w-80 mt-28 md:mt-0'
                >
                    <img src={ imgSubProPresu } alt="Icono menu Programaticos" className='w-96 mt-28 md:mt-0' />
                </Link>

                <Link
                    to={'/configuracion/catalogos/programaticos/proyecto'}
                    className='w-72 md:w-40 xl:w-80 mt-28 md:mt-0'
                >
                    <img src={ imgProyecto } alt="Icono menu Presupuestal" className='w-96 mt-28 md:mt-0' />
                </Link>
                
                <Link
                    to={'/configuracion/catalogos/programaticos/actividades'}
                    className='w-72 md:w-40 xl:w-80 mt-28 md:mt-0'
                >
                    <img src={ imgActividades } alt="Icono menu Programaticos" className='w-96 mt-28 md:mt-0' />
                </Link>
            </div>
        </div>
    </>
  )
}

export default MenuCatalogosProgramaticos