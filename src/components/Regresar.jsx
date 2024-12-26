import React from 'react'

import { Link } from 'react-router-dom';
import Flecha from '../assets/images/iconosMenu/Flecha.png'

export default function Regresar({ enlace = '', className = '' }) {
  return (
    <Link to={enlace} className='inline-block'>
      <div className={`hidden lg:flex items-center${className} `}>
        <div>
          <img src={Flecha} alt="flecha" className="w-14" />
        </div>
        <p className="w-24 h-10 pl-2 mt-5 font-bold text-xl text-black hover:cursor-pointer">
          REGRESAR
        </p>  
      </div>
    </Link>
  );
}
