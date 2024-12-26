import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';

import imgPresupuestal from '../../../assets/images/configuracion/catalogos/CatalogosPresupuestales.png';
import imgProgramaticos from '../../../assets/images/configuracion/catalogos/CatalogosProgramaticos.png';
import { Link } from 'react-router-dom';
import Titulo from '../../../components/Titulo';
import Regresar from "../../../components/Regresar";
const MenuCatalogos = () => {
  return (
    <>
        <Breadcrumb
            items ={[
                { href: '/home', text: 'CONFIGURACIÓN' },
                { text: 'CATÁLAGOS' }
            ]}
        />
        <Regresar enlace='/configuracion/menu'/>
        <Titulo text='CATÁLAGOS' />

        <div className='min-h-[50vh] flex flex-col items-center justify-center'>
            <div className='px-0 py-0 md:px-40 block md:flex md:justify-center md:items-center md:gap-10'>
                <Link
                    to={'/configuracion/menu/catalogos/programaticos'}
                >
                    <img src={ imgProgramaticos } alt="Icono menu Programaticos" className='w-96 mt-28 md:mt-0' />
                </Link>

                <Link
                    to={'/configuracion/catalogos/presupuestales'}
                >
                    <img src={ imgPresupuestal } alt="Icono menu Presupuestal" className='w-96 mt-28 md:mt-0' />
                </Link>
            </div>
        </div>
    </>
  )
}

export default MenuCatalogos