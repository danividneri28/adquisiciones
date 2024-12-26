import React from "react";
import { Link } from "react-router-dom";
import Area from "../../assets/images/imagesConfiguracion/areas.png";
import Catalogos from "../../assets/images/imagesConfiguracion/catálogos.png";
import Usuarios from "../../assets/images/imagesConfiguracion/usuarios.png";
import Breadcrumb from "../../components/Breadcrumb";
import Titulo from "../../components/Titulo";

const MenuConfiguracion = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { text: "CONFIGURACIÓN" },
        ]}
      />
      <Titulo text={'CONFIGURACIÓN'} className='lg:mt-14'/>
      <div className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
          <Link to="/configuracion/areas/listado" className="group">
            <img
              src={Area}
              alt="Área de Configuración"
              className="w-96 object-contain"
            />
          </Link>

          <Link to="/configuracion/usuarios/listado" className="group">
            <img
              src={Usuarios}
              alt="Usuarios de Configuración"
              className="w-96 object-contain"
            />
          </Link>

          <Link to="/configuracion/catalogos/menu" className="group">
            <img
              src={Catalogos}
              alt="Catálogos de Configuración"
              className="w-96 object-contain"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuConfiguracion;
