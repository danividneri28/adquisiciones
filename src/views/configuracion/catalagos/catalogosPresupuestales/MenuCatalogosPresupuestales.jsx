import Breadcrumb from "../../../../components/Breadcrumb";
import { Link } from "react-router-dom";
import ClasificacionOG from "../../../../assets/images/configuracion/presupuestales/clasificacion_por_objeto_del_gasto.png";
import TipoDGasto from "../../../../assets/images/configuracion/presupuestales/tipo_del_gasto.png";
import ClasificacionFuncional from "../../../../assets/images/configuracion/presupuestales/clasificacionFuncional/ClasificacionFuncional.png";
import Financiamiento from "../../../../assets/images/configuracion/presupuestales/FuenteFinanciamiento/FuenteFinanciamiento.png";
import BienesyServicios from "../../../../assets/images/configuracion/presupuestales/BienesServicios/BienesyServicios.png";
import Titulos from "../../../../components/Titulo";
import Regresar from "../../../../components/Regresar";

const MenuCatalogosPresupuestales = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATÁLAGOS PRESUPUESTALES",
          },
          { text: "REGISTROS TIPOS DE GASTOS" },
        ]}
      />

      <Regresar enlace='/configuracion/catalogos/menu'/>

      <Titulos text="CATÁLAGOS PRESUPUESTALES" />

      <div className="min-h-[50vh] flex flex-col items-center justify-center md:mt-10">
        <div className="px-0 py-0 md:px-40 block md:flex md:justify-center md:items-center md:gap-10">
          <Link
            to="/configuracion/catalogos/presupuestales/objetoGasto"
            className="w-72 md:w-40 xl:w-80 mt-28 md:mt-0"
          >
            <img
              src={ClasificacionOG}
              alt="Área de Configuración"
              className="w-96 mt-28 md:mt-0"
            />
          </Link>

          <Link
            to="/configuracion/catalogos/presupuestales/tipoGasto"
            className="w-72 md:w-40 xl:w-80 mt-28 md:mt-0"
          >
            <img
              src={TipoDGasto}
              alt="Usuarios de Configuración"
              className="w-96 mt-28 md:mt-0"
            />
          </Link>

          <Link
            to="/configuracion/catalogos/presupuestales/clasificacionFuncional"
            className="w-72 md:w-40 xl:w-80 mt-28 md:mt-0"
          >
            <img
              src={ClasificacionFuncional}
              alt="Catálogos de Configuración"
              className="w-96 mt-28 md:mt-0"
            />
          </Link>
        </div>
        <div className="px-0 py-0 md:px-40 block md:flex md:justify-center md:items-center md:gap-10 md:mt-24">
          <Link
            to="/configuracion/catalogos/presupuestales/FuenteFinanciamiento"
            className="w-72 md:w-40 xl:w-80 mt-28 md:mt-0"
          >
            <img
              src={Financiamiento}
              alt="Área de Configuración"
              className="w-96 mt-28 md:mt-0"
            />
          </Link>

          <Link
            to="/configuracion/catalogos/presupuestales/BienesServicios"
            className="w-72 md:w-40 xl:w-80 mt-28 md:mt-0"
          >
            <img
              src={BienesyServicios}
              alt="Usuarios de Configuración"
              className="w-96 mt-28 md:mt-0"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuCatalogosPresupuestales;
