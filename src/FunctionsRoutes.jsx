import { Route, Routes } from "react-router-dom";
import MenuFunciones from "./views/funciones/MenuFunciones";
import SolicitudIndex from "./views/funciones/solicitudes/SolicitudIndex";
import SolicitudHistorial from "./views/funciones/solicitudes/SolicitudHistorial";
import SolicitudCreate from "./views/funciones/solicitudes/SolicitudCreate";
import SolicitudEdit from "./views/funciones/solicitudes/SolicitudEdit";
import ConcentradoIndex from "./views/funciones/concentradoReq/ConcentradoIndex";
import ConsolidadoIndex from "./views/funciones/concentradoReq/ConsolidadoIndex";
import HsolicitudRequisicionIndex from "./views/funciones/concentradoReq/HsolicitudRequisicionIndex";
import RegistrosConsolidados from "./views/funciones/concentradoReq/RegistrosConsolidados";
import RequisicionInfo from "./views/funciones/concentradoReq/RequisicionInfo";
import Requisicion from "./views/funciones/concentradoReq/Requisicion";
import ListadoConsolidados from "./views/funciones/concentradoReq/ListadoConsolidados";
import RequisicionInformativo from "./views/funciones/concentradoReq/RequisicionInformativo";

// PROCEDIMIENTOS ADMINISTRATIVOS
import ProcedAdminIndex from "./views/funciones/procedimientos_administrativo/ProcedAdminIndex";
import AdministrativoConsolidados from "./views/funciones/procedimientos_administrativo/consolidados/AdministrativoConsolidados";
import AdministrativoHistorialConsolidados from "./views/funciones/procedimientos_administrativo/consolidados/AdministrativoHistorialConsolidados";
import AdministrativoEditarConsolidados from "./views/funciones/procedimientos_administrativo/consolidados/AdministrativoEditarConsolidados";
import AdministrativoVerConsolidados  from "./views/funciones/procedimientos_administrativo/consolidados/AdministrativoVerConsolidados";
import AdministrativoReadOnlyConsolidados from "./views/funciones/procedimientos_administrativo/consolidados/AdministrativoReadOnlyConsolidados";
import AdministrativoShowConsolidados from "./views/funciones/procedimientos_administrativo/consolidados/AdministrativoShowConsolidados";
import ProcedAdminUpdate from "./views/funciones/procedimientos_administrativo/ProcedAdminUpdate";
import ProcedAdminHistorial from "./views/funciones/procedimientos_administrativo/ProcedAdminHistorial";
import ProcedAdminView from "./views/funciones/procedimientos_administrativo/ProcedAdminView";
// import ProcedAdminUpdate from "./views/funciones/ProcedAdminUpdate";
// PAGOS
import PagosIndex from "./views/funciones/pagos/PagosIndex";
import PagosUpdate from "./views/funciones/pagos/PagosUpdate";


import EntregableIndex from "./views/funciones/entregable/EntregableIndex";
import ConsolidadosIndex from "./views/funciones/entregable/ConsolidadosIndex";
import HistorialConsolidados from "./views/funciones/entregable/HistorialConsolidados";
// ----------PROVEEDORES------------------------
import ProveedoresCreate from "./views/proveedores/Createproveedores";
import ProveedoresNew from "./views/proveedores/Newproveedores";
import ConsultaProveedores from "./views/proveedores/ConsultaProveedores";
import ShowProveedor from "./views/proveedores/ShowProveedor";
import EditProveedor from "./views/proveedores/EditProveedor";
import ConsultaEdit from "./views/proveedores/ConsultaEdit";
import ComprobacionFacturas from "./views/comprobacionFacturas/Index";

import ProveedorContratoIndex from "./views/funciones/proveedor/ProveedorContratoIndex";
import ProveedorConsolidados from "./views/funciones/proveedor/ProveedorConsolidados";
import ProveedorConsolidadoHistorial from "./views/funciones/proveedor/ProveedorConsolidadoHistorial";
import ProveedorConsolidadoHistorialShow  from "./views/funciones/proveedor/ProveedorConsolidadoHistorialShow";
import ProveedorConsolidadoHistorialRegistros from "./views/funciones/proveedor/ProveedorConsolidadoHistorialRegistros";
import ProveedorContratoCreate from "./views/funciones/proveedor/ProveedorContratoCreate";
import ProveedorContratoHistorial from "./views/funciones/proveedor/proveedorContratoHistorial";

import FacturasIndex from "./views/funciones/facturas/FacturasIndex";
import FacturasConsolidados from "./views/funciones/facturas/FacturasConsolidados";
import FacturasConsolidadosHistorial from "./views/funciones/facturas/FacturasConsolidadosHistorial";
import FacturasConsolidadosHistorialRegistros from "./views/funciones/facturas/FacturasConsolidadosHistorialRegistros";
import FacturasConsolidadosHistorialShow from "./views/funciones/facturas/FacturasConsolidadosHistorialShow";
import FacturasCreate from "./views/funciones/facturas/FacturasCreate";
import FacturasHistorial from "./views/funciones/facturas/FacturasHistorial";
import FacturasHistorialRegistros from "./views/funciones/facturas/FacturasHistorialRegistros";

export default function FunctionsRoutes() {
    return (
        <Routes>
            <Route index element={ <MenuFunciones />} />

            {/* Solicitudes Requisicion */}
            <Route path="solicitudes/listado" element={<SolicitudIndex />} />
            <Route path="solicitudes/historial" element={<SolicitudHistorial />} />
            <Route path="solicitudes/create" element={<SolicitudCreate />} />
            <Route path="solicitudes/edit" element={<SolicitudEdit />} />

            {/* Concentrado de Requisiciones */}
            <Route path="concentrado/listado" element={<ConcentradoIndex />} />
            <Route path="consolidado/listado" element={<ConsolidadoIndex />} />
            <Route path="consolidado/listado/registros" element={<ListadoConsolidados />} />
            <Route path="consolidado/historialRequisicion/listado" element={<HsolicitudRequisicionIndex />} />
            <Route path="consolidado/registros/listado" element={<RegistrosConsolidados />} />
            <Route path="consolidados/requesicionAlta" element={<Requisicion />} />
            <Route path="consolidados/requesicion" element={<RequisicionInfo />} />
            <Route path="consolidados/requesicion/info" element={<RequisicionInformativo />} />

            
            {/* Procedimientos Administrativos */}
            <Route path="procedimientos/listado" element={<ProcedAdminIndex />} />
            <Route path="procedimientos/listado/actualizar" element={<ProcedAdminUpdate />} />
            <Route path="procedimientos/listado/historial" element={<ProcedAdminHistorial />} />
            <Route path="procedimientos/listado/show" element={<ProcedAdminView />} />
            <Route path="procedimientos/listado/consolidados" element={<AdministrativoConsolidados />} />
            <Route path="procedimientos/listado/consolidados/historial" element={<AdministrativoHistorialConsolidados />} />
            <Route path="procedimientos/listado/consolidados/editar" element={<AdministrativoEditarConsolidados />} />
            <Route path="procedimientos/listado/consolidados/actualizar" element={<AdministrativoVerConsolidados />} />
            <Route path="procedimientos/listado/consolidados/ver" element={<AdministrativoReadOnlyConsolidados />} />
            <Route path="procedimientos/listado/consolidados/show" element={<AdministrativoShowConsolidados />} />

            {/* Pagos */}
            <Route path="pagos/listado" element={<PagosIndex />} />
            <Route path="pagos/editar" element={<PagosUpdate />} />

            {/* Entregables */}
            <Route path="/entregable/listado" element={<EntregableIndex />} />

            {/* Consolidados */}
            <Route path="/entregable/consolidados" element={<ConsolidadosIndex />} />
            <Route path="/entregable/historial" element={<HistorialConsolidados />} />
            
            {/* ---------------------------------------------------- */}
            {/* PROVEEDORES */}
            <Route path="proveedores/create" element={<ProveedoresCreate />} />
            <Route path="proveedores/create-proveedor" element={<ProveedoresNew />} />
            <Route path="consultaproveedores/consulta-proveedor" element={<ConsultaProveedores />} />
            <Route path="verProveedor/show-proveedor" element={<ShowProveedor/>} />
            <Route path="editProveedor/edit-proveedor" element={<EditProveedor/>} />
            <Route path="consultaEdit/edit-consulta" element={<ConsultaEdit/>} />

            {/*------------ Comprobacion y Facturas -----------------*/}
            <Route path="comprobacionFacturas/Index" element={<ComprobacionFacturas/>} />

            {/* <Route path="solicitudes/edit" element={<AreaEdit />} /> */}

            {/* Proveedor y Contratos */}
            <Route path="proveedor/listado" element={<ProveedorContratoIndex />} />
            <Route path="proveedor/consolidados" element={<ProveedorConsolidados />} />
            <Route path="proveedor/consolidados/historial" element={<ProveedorConsolidadoHistorial />} />
            <Route path="proveedor/consolidados/historial/registros" element={<ProveedorConsolidadoHistorialRegistros />} />
            <Route path="proveedor/consolidados/historial/show" element={<ProveedorConsolidadoHistorialShow />} />
            <Route path="proveedor/create" element={<ProveedorContratoCreate />} />
            <Route path="proveedor/historial" element={<ProveedorContratoHistorial />} />

            {/* Facturas */}
            <Route path="facturas/listado" element={<FacturasIndex />} />
            <Route path="facturas/consolidados" element={<FacturasConsolidados />} />
            <Route path="facturas/consolidados/historial" element={<FacturasConsolidadosHistorial />} />
            <Route path="facturas/consolidados/historial/registros" element={<FacturasConsolidadosHistorialRegistros />} />
            <Route path="facturas/consolidados/historial/show" element={<FacturasConsolidadosHistorialShow />} />
            <Route path="facturas/create" element={<FacturasCreate />} />
            <Route path="facturas/historial" element={<FacturasHistorial />} />
            <Route path="facturas/historial/registros" element={<FacturasHistorialRegistros />} />
            
        </Routes>
      

    );
}