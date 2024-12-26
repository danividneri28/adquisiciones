import ConfiguracionIndex from "./views/tutoriales/ConfiguracionIndex";
import EstadisticaIndex from "./views/tutoriales/EstadisticaIndex";
import FuncionesIndex from "./views/tutoriales/FuncionesIndex";
import MenuTutoriales from "./views/tutoriales/MenuTutoriales";
import { Route, Routes } from "react-router-dom";
export default function Tutorials() {
  return (
      <Routes>
          <Route index element={ <MenuTutoriales />} />

          <Route path="funciones" element={<FuncionesIndex />} />
          <Route path="configuracion" element={<ConfiguracionIndex />} />
          <Route path="estadisticas" element={<EstadisticaIndex />} />
                    
      </Routes>
    

  );
}