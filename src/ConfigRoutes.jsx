// src/ConfigRoutes.jsx
import { Route, Routes } from 'react-router-dom';

import AreaIndex from './views/configuracion/areas/AreaIndex';
import AreaCreate from './views/configuracion/areas/AreaCreate';
import UsuarioIndex from './views/configuracion/usuarios/UsuarioIndex';
import UsuarioCreate from './views/configuracion/usuarios/UsuarioCreate';
import UsuarioEdit from './views/configuracion/usuarios/UsuarioEdit';

import MenuCatalogos from './views/configuracion/catalagos/MenuCatalogos';

import MenuCatalogosProgramaticos from './views/configuracion/catalagos/catalogosProgramaticos/MenuCatalogosProgramaticos';
import IndexFinalidad from './views/configuracion/catalagos/catalogosProgramaticos/Finalidad/IndexFinalidad';
import NuevaFinalidad from './views/configuracion/catalagos/catalogosProgramaticos/Finalidad/NuevaFinalidad';
import IndexFuncion from './views/configuracion/catalagos/catalogosProgramaticos/funcion/IndexFuncion';
import NuevaFuncion from './views/configuracion/catalagos/catalogosProgramaticos/funcion/NuevaFuncion';

import IndexSubfuncion from './views/configuracion/catalagos/catalogosProgramaticos/subfuncion/IndexSubfuncion';
import NuevaSubfuncion from './views/configuracion/catalagos/catalogosProgramaticos/subfuncion/NuevaSubfuncion';

import IndexPresup from './views/configuracion/catalagos/catalogosProgramaticos/progPresupuestario/IndexPresup';

import NuevoProgPresupuestario from './views/configuracion/catalagos/catalogosProgramaticos/progPresupuestario/NuevoProgPresupuestario';
import EditarProgPresupuestario from './views/configuracion/catalagos/catalogosProgramaticos/progPresupuestario/EditarProgPresupuestario';
import IndexSubProgPresupuestario from './views/configuracion/catalagos/catalogosProgramaticos/subProgPresupuestario/IndexSubProgPresupuestario';

import NuevoPrograma from './views/configuracion/catalagos/catalogosProgramaticos/subProgPresupuestario/NuevoPrograma';
import EditarPrograma from './views/configuracion/catalagos/catalogosProgramaticos/subProgPresupuestario/EditarPrograma';

import IndiceProyecto from './views/configuracion/catalagos/catalogosProgramaticos/proyecto/IndiceProyecto';
import NuevoProyecto from './views/configuracion/catalagos/catalogosProgramaticos/proyecto/NuevoProyecto';
import EditarProyecto from './views/configuracion/catalagos/catalogosProgramaticos/proyecto/EditarProyecto';

import IndiceActividades from './views/configuracion/catalagos/catalogosProgramaticos/actividades/IndiceActividades';
import NuevaActividad from './views/configuracion/catalagos/catalogosProgramaticos/actividades/NuevaActividad';
import EditarActividad from './views/configuracion/catalagos/catalogosProgramaticos/actividades/EditarActividad';

import MenuCatalogosPresupuestales from './views/configuracion/catalagos/catalogosPresupuestales/MenuCatalogosPresupuestales';

import MenuObjetoGasto from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/MenuObjetoGasto';

import CapituloIndex from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/capitulo/CapituloIndex';
import CapituloCreate from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/capitulo/CapituloCreate';
import CapituloEdit from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/capitulo/CapituloEdit';

import SubCapituloIndex from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/subcapitulo/SubCapituloIndex';
import SubCapituloCreate from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/subcapitulo/SubCapituloCreate';
import SubCapituloEdit from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/subcapitulo/SubCapituloEdit';

import PartidaGIndex from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/partidaGenerica/PartidaGIndex';
import PartidaGcreate from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/partidaGenerica/PartidaGcreate';
import PartidaGedit from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/partidaGenerica/PartidaGEdit';

import PartidaEIndex from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/partidaEspecifica/PartidaEIndex';
import PartidaEcreate from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/partidaEspecifica/PartidaEcreate';
import PartidaEEdit from './views/configuracion/catalagos/catalogosPresupuestales/objetoGasto/partidaEspecifica/PartidaEEdit';

import TipoGastoIndex from './views/configuracion/catalagos/catalogosPresupuestales/TipoGasto/TipoGastoIndex';
import TipoGastoCreate from './views/configuracion/catalagos/catalogosPresupuestales/TipoGasto/TipoGastoCreate';
import TipoGastoEdit from './views/configuracion/catalagos/catalogosPresupuestales/TipoGasto/TipoGastoEdit';

import ClasificacionFuncionalIndex from './views/configuracion/catalagos/catalogosPresupuestales/clasificacionFuncional/ClasificacionFuncionalIndex';
import ClasificacionFuncionalCreate from './views/configuracion/catalagos/catalogosPresupuestales/clasificacionFuncional/ClasificacionFuncionalCreate';
import ClasificacionFuncionalEdit from './views/configuracion/catalagos/catalogosPresupuestales/clasificacionFuncional/ClasificacionFuncionalEdit';

import FuenteFinanciamientoCreate from './views/configuracion/catalagos/catalogosPresupuestales/FuenteFinanciamiento/FuenteFinanciamientoCreate';
import FuenteFinanciamientoEdit from './views/configuracion/catalagos/catalogosPresupuestales/FuenteFinanciamiento/FuenteFinanciamientoEdit';
import FuenteFinanciamientoIndex from './views/configuracion/catalagos/catalogosPresupuestales/FuenteFinanciamiento/FuenteFinanciamientoIndex';

import BienesServicisoCreate from './views/configuracion/catalagos/catalogosPresupuestales/BienesServicios/BienesServiciosCreate';
import BienesServicisoIndex from './views/configuracion/catalagos/catalogosPresupuestales/BienesServicios/BienesServiciosIndex';
import BienesServicisosEdit from './views/configuracion/catalagos/catalogosPresupuestales/BienesServicios/BienesServiciosEdit';

import MenuConfiguracion from './views/configuracion/MenuConfiguracion';


export default function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/menu" element={<MenuConfiguracion />} />

      <Route path="areas/listado" element={<AreaIndex />} />
      <Route path="areas/create" element={<AreaCreate />} />
      <Route path="areas/:id" element={<AreaCreate />} />
      
      {/* configuracion usuarios */}
      <Route path="usuarios/listado" element={<UsuarioIndex />} />
      <Route path="usuarios/create" element={<UsuarioCreate />} />
      <Route path="usuarios/edit/:id" element={<UsuarioEdit />} />  

      {/* configuracion catalogos */}
      <Route path="catalogos/menu" element={<MenuCatalogos />} />
      <Route path="menu/catalogos/programaticos" element={<MenuCatalogosProgramaticos />} />

      {/* Finalidad */}
      <Route path="catalogos/programaticos/finalidad" element={<IndexFinalidad />} />
      <Route path="catalogos/programaticos/nueva/finalidad" element={<NuevaFinalidad />} />
      <Route path="catalogos/programaticos/editar/finalidad/:id" element={<NuevaFinalidad />} />

      {/* Funcion */}
      <Route path="catalogos/programaticos/funcion" element={<IndexFuncion />} />
      <Route path="catalogos/programaticos/nueva/funcion" element={<NuevaFuncion />} />
      <Route path="catalogos/programaticos/editar/funcion/:id" element={<NuevaFuncion />} />

      {/* Subfuncion */}
      <Route path="catalogos/programaticos/subfuncion" element={<IndexSubfuncion />} />
      <Route path="catalogos/programaticos/nueva/subfuncion" element={<NuevaSubfuncion />} />
      <Route path="catalogos/programaticos/editar/subfuncion/:id" element={<NuevaSubfuncion />} />

      {/* Programa presupuestario */}
      <Route path="catalogos/programaticos/programaPresupuestario" element={<IndexPresup />} />
      <Route path="catalogos/programaticos/nueva/progPresupuestario" element={<NuevoProgPresupuestario />} />
      <Route path="catalogos/programaticos/editar/progPresupuestario/:id" element={<EditarProgPresupuestario />} />

      {/* Subprograma presupuestario */}
      <Route path="catalogos/programaticos/subprogramaPresupuestario" element={<IndexSubProgPresupuestario />} />
      <Route path="catalogos/programaticos/nueva/subprogPresupuestario" element={<NuevoPrograma />} />
      <Route path="catalogos/programaticos/editar/subprogPresupuestario/:id" element={<EditarPrograma />} />

      {/* Proyecto */}
      <Route path="catalogos/programaticos/proyecto" element={<IndiceProyecto />} />
      <Route path="catalogos/programaticos/nueva/proyecto" element={<NuevoProyecto />} />
      <Route path="catalogos/programaticos/editar/proyecto/:id" element={<EditarProyecto />} />
      
      {/* Actvidades */}
      <Route path="catalogos/programaticos/actividades" element={<IndiceActividades />} />
      <Route path="catalogos/programaticos/nueva/actividad" element={<NuevaActividad />} />
      <Route path="catalogos/programaticos/editar/actividad/:id" element={<EditarActividad />} />

      {/* Menu Catalogos Presupuestales */}
      <Route path="catalogos/presupuestales" element={<MenuCatalogosPresupuestales />} />
      
      {/* Menu Catalogos Presupuestales objetoGasto */}
      <Route path="catalogos/presupuestales/objetoGasto" element={<MenuObjetoGasto />} />
      
      <Route path="catalogos/presupuestales/objetoGasto/capitulo" element={<CapituloIndex />} />
      <Route path="catalogos/presupuestales/objetoGasto/capitulo/create" element={<CapituloCreate />} />
      <Route path="catalogos/presupuestales/objetoGasto/capitulo/edit/:id" element={<CapituloEdit />} />
      
      {/* Subcapitulo */}
      <Route path="catalogos/presupuestales/objetoGasto/subcapitulo" element={<SubCapituloIndex />} />
      <Route path="catalogos/presupuestales/objetoGasto/subcapitulo/create" element={<SubCapituloCreate />} />
      <Route path="catalogos/presupuestales/objetoGasto/subcapitulo/edit/:id" element={<SubCapituloEdit />} />

      {/* Partida Generica */}
      <Route path="catalogos/presupuestales/objetoGasto/partidaGenerica" element={<PartidaGIndex />} />
      <Route path="catalogos/presupuestales/objetoGasto/partidaGenerica/create" element={<PartidaGcreate />} />
      <Route path="catalogos/presupuestales/objetoGasto/partidaGenerica/:id" element={<PartidaGedit />} />
      
      {/* Partida Especifica */}
      <Route path="catalogos/presupuestales/objetoGasto/partidaEspecifica" element={<PartidaEIndex />} />
      <Route path="catalogos/presupuestales/objetoGasto/partidaEspecifica/create" element={<PartidaEcreate />} />
      <Route path="catalogos/presupuestales/objetoGasto/partidaEspecifica/edit/:id" element={<PartidaEEdit />} />
      
      {/* Tipo del Gasto */}
      <Route path="catalogos/presupuestales/tipoGasto" element={<TipoGastoIndex />} />
      <Route path="catalogos/presupuestales/tipoGasto/create" element={<TipoGastoCreate />} />
      <Route path="catalogos/presupuestales/tipoGasto/edit/:id" element={<TipoGastoEdit />} />
      
      {/* clasificacion funcional */}
      <Route path="catalogos/presupuestales/clasificacionFuncional" element={<ClasificacionFuncionalIndex />} />
      <Route path="catalogos/presupuestales/clasificacionFuncional/create" element={<ClasificacionFuncionalCreate />} />
      <Route path="catalogos/presupuestales/clasificacionFuncional/edit/:id" element={<ClasificacionFuncionalEdit />} />
      
      {/* Fuente Finanziamiento */}
      <Route path="catalogos/presupuestales/FuenteFinanciamiento" element={<FuenteFinanciamientoIndex />} />
      <Route path="catalogos/presupuestales/FuenteFinanciamiento/create" element={<FuenteFinanciamientoCreate />} />
      <Route path="catalogos/presupuestales/FuenteFinanciamiento/edit/:id" element={<FuenteFinanciamientoEdit />} />
      
      {/* Bienes y Servicios */}
      <Route path="catalogos/presupuestales/BienesServicios" element={<BienesServicisoIndex />} />
      <Route path="catalogos/presupuestales/BienesServicios/create" element={<BienesServicisoCreate />} />
      <Route path="catalogos/presupuestales/BienesServicios/edit/:id" element={<BienesServicisosEdit />} />
    </Routes>
  );
}