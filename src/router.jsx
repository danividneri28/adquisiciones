import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import ConfigRoutes from "./ConfigRoutes";
import FunctionsRoutes from "./FunctionsRoutes";
import LoginView from "./views/auth/LoginView";
import AuthLayout from "./layout/AuthLayout";
import NoEncontrado from "./views/HttpError/NoEncontrado";
import Home from "./views/MesaControl"

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
        </Route>

        <Route element={ <AuthLayout /> }>
          <Route path="/auth/login" element={ <LoginView /> } />
        </Route>

        {/* Errores */}
        <Route element={ <AuthLayout />}>
          <Route path="/404" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
