import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import ConfigRoutes from "./ConfigRoutes";
import FunctionsRoutes from "./FunctionsRoutes";
import LoginView from "./views/auth/LoginView";
import AuthLayout from "./layout/AuthLayout";
import NoEncontrado from "./views/HttpError/NoEncontrado";
import Home from "./views/MesaControl"
import Tutorials from "./Tutorials";
import RememberPassword from "./views/auth/RememberPassword";
import PasswordEmail from "./views/auth/RememberPassword";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* Mesa de control */}
          <Route index path="/" element={<Home />}/>

          {/* Funciones */}
          <Route path="funciones/*" element={<FunctionsRoutes />} />

          {/* Estadisticas */}

          {/* Configuracion */}
          <Route path="configuracion/*" element={<ConfigRoutes />} />

          
          {/* Tutoriales */}
          <Route path="tutoriales/*" element={<Tutorials />} />
        
        </Route>

        
        <Route element={ <AuthLayout /> }>
          <Route path="/auth/login" element={ <LoginView /> } />
          <Route path="/auth/remember-password" element={ <RememberPassword /> } />
          <Route path="/auth/password-email" element={ <PasswordEmail /> } />
        </Route>

        {/* Errores */}
        <Route element={ <AuthLayout />}>
          <Route path="/404" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
