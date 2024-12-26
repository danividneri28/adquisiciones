import React from "react";
import { Link } from "react-router-dom";
import Configuracion from "../../assets/images/tutoriales/Configuracion.png";
import Estadisticas from "../../assets/images/tutoriales/Estadisticas.png";
import Funciones from "../../assets/images/tutoriales/Funciones.png";
import Breadcrumb from "../../components/Breadcrumb";
import Titulo from "../../components/Titulo";

const MenuTutoriales = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { text: "TUTORIALES" },
        ]}
      />
      <Titulo text={'TUTORIALES'} className='lg:mt-14'/>
      <div className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        <Link to="/tutoriales/funciones" className="group">
            <img
              src={Funciones}
              alt="Catálogos de Configuración"
              className="w-96 object-contain"
            />
          </Link>
          <Link to="/tutoriales/estadisticas" className="group">
            <img
              src={Estadisticas}
              alt="Usuarios de Configuración"
              className="w-96 object-contain"
            />
          </Link>
          <Link to="/tutoriales/configuracion" className="group">
            <img
              src={Configuracion}
              alt="Área de Configuración"
              className="w-96 object-contain"
            />
          </Link>

          

         
        </div>
      </div>
    </>
  );
};

export default MenuTutoriales;
