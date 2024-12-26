import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Titulo from "../../components/Titulo";

import imgSolicitudRequisicion from "../../assets/images/funciones/solicitudesRequisicion.png";
import imgConcentrado from "../../assets/images/funciones/concentradoRequisiciones.png";
import imgProcAdministrativo from "../../assets/images/funciones/procedAdministrativos.png";
import imgProvContratos from "../../assets/images/funciones/proveedorContrato.png";
import imgEntregable from "../../assets/images/funciones/entregable.png";
import imgCompFacturas from "../../assets/images/funciones/comprobacionFactura.png";
import imgPagos from "../../assets/images/funciones/pagos.png";
import imgRegistroProveedores from "../../assets/images/funciones/registroProveedores.png";
import { Link } from "react-router-dom";

const MenuFunciones = () => {
  return (
    <>
      <Breadcrumb items={[{ text: "FUNCIONES" }]} />

      <Titulo text="CATÁLAGOS PROGRAMÁTICOS" className="mt-14" />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 px-0 py-0 place-items-center">
          <Link
            to={"/funciones/solicitudes/listado"}
           
          >
            <img
              src={imgSolicitudRequisicion}
              alt="Icono menú Programáticos"
              className="w-96 object-cover"
            />
          </Link>
          <Link to={"/funciones/concentrado/listado"}>
            <img
              src={imgConcentrado}
              alt="Icono menú Presupuestal"
              className="w-96 object-cover"
            />
          </Link>
          <Link to={"procedimientos/listado"}>
            <img
              src={imgProcAdministrativo}
              alt="Icono menú Programáticos"
              className="w-96 object-cover"
            />
          </Link>
          
          <Link to={"/funciones/proveedor/listado"}>
            <img
              src={imgProvContratos}
              alt="Icono menú Presupuestal"
              className="w-96 object-cover"
            />
          </Link>
          <Link to={"/funciones/entregable/listado"}>
            <img
              src={imgEntregable}
              alt="Icono menú Programáticos"
              className="w-96 object-cover"
            />
          </Link>
          <Link to={"/funciones/facturas/listado"}>
            <img
              src={imgCompFacturas}
              alt="Icono menú Presupuestal"
              className="w-96 object-cover"
            />
          </Link>
          <Link to={"/funciones/pagos/listado"}>
            <img
              src={imgPagos}
              alt="Icono menú Programáticos"
              className="w-96 object-cover"
            />
          </Link>
          <Link to={"/funciones/proveedores/create"}>
            <img
              src={imgRegistroProveedores}
              alt="Icono menú Presupuestal"
              className="w-96 object-cover"
            />
          </Link>
        </div>
     
    </>
  );
};

export default MenuFunciones;
