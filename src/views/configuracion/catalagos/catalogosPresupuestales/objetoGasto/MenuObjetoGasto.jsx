import { Link } from "react-router-dom";
import Capitulo from "../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/capitulo.png";
import Subcapitulo from "../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/subcapitulo.png";
import PartidaG from "../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/partida_generica.png";
import PartidaE from "../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/partidaespecifica.png";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import Regresar from "../../../../../components/Regresar";

const MenuObjetoGasto = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATALOGOS PRESUPUESTALES",
          },
          { text: "CLASIFICACIÓN POR OBJETO DE GASTO" },
        ]}
      />

      <Regresar enlace='/configuracion/catalogos/presupuestales'/>

      <Titulo text={"CLASIFICACIÓN POR OBJETO DE GASTO"} />

      <div className="flex flex-col md:flex-row items-center gap-12 md:justify-center my-12">
        <div>
          <Link
            to="/configuracion/catalogos/presupuestales/objetoGasto/capitulo"
            className="group"
          >
            <img
              src={Capitulo}
              alt="Área de Configuración"
              className="w-96 object-cover"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo"
            className="group"
          >
            <img
              src={Subcapitulo}
              alt="Usuarios de Configuración"
              className="w-96 object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12 md:justify-center mb-12">
        <div>
          <Link
            to="/configuracion/catalogos/presupuestales/objetoGasto/partidaGenerica"
            className="group"
          >
            <img
              src={PartidaG}
              alt="Catálogos de Configuración"
              className="w-96 object-cover"
            />
          </Link>
        </div>
        <div>
          <Link
            to="/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica"
            className="group"
          >
            <img
              src={PartidaE}
              alt="Catálogos de Configuración"
              className="w-96 object-cover"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuObjetoGasto;
