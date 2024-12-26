import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Breadcrumb from "../../../components/Breadcrumb";
import NuevoUsuario from "../../../assets/images/imagesConfiguracion/nuevo_usuario.png";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import Spinner from "../../../components/Spinner";
import { obtenerUsuarios } from "../../../api/configuracion/ApiUsers";
import { useMemo } from "react";
import Regresar from "../../../components/Regresar";

export default function UsuarioIndex() {
  const  { data, isLoading, isError } = useQuery({
    queryKey: ['obtenerUsuarios'],
    queryFn: obtenerUsuarios,
  });

  
  const columns = useMemo(
    () => [
      {
        accessorKey: "nombre",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "correo",
        label: "Correo electrónico",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "tipo",
        label: "Tipo usuario",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "clasificacion",
        label: "Clasificación de usuario",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Acciones",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/configuracion/usuarios/edit/${info.getValue()}`}
              className="bg-customRed text-white px-2 py-1 rounded"
            >
              Ver/Editar
            </Link>
          </div>
        ),
        filterFn: "includesStringSensitive",
      },
    ],
    []
  );

  const dataTable = useMemo(() => {
    if (data) {
      return data.map((item) => {
        return {
          nombre: item.nombre,
          correo: item.correo,
          tipo: item.tipo,
          clasificacion: "item.clasificacion",
          Acciones: item.id,
        };
      });
    }
    return [];
  }, [data]);

  if (isLoading) return <Spinner />;
  if (isError) return <Navigate to="/404" />;

  if(data) return (
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { text: "REGISTROS DE USUARIOS" },
        ]}
      />

      <Regresar enlace='/configuracion/menu'/>
      <Titulo text="REGISTRO DE USUARIOS" />
      <div className="">
        <Link to="/configuracion/usuarios/create" className="inline-block">
          <img
            src={NuevoUsuario}
            alt="usuarios"
            className="w-52 object-contain"
          />
        </Link>
        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">REGISTROS DE USUARIOS </h3>
          </div>

          <CustomTable columns={columns} data={dataTable} />
        </div>
      </div>
    </>
  );
}
