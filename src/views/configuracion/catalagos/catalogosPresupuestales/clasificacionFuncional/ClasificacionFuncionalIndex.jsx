import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "../../../../../components/Breadcrumb";
import ClasificacionNFuncional from "../../../../../assets/images/configuracion/presupuestales/clasificacionFuncional/clasificacionNFuncional.png";
import Titulo from "../../../../../components/Titulo";
import CustomTable from "../../../../../components/CustomTable";
import Spinner from "../../../../../components/Spinner";
import { obtenerClasificaciones } from "../../../../../api/configuracion/catalogos/presupuestales/ApiClasificacion";
import { useMemo } from "react";
import Regresar from "../../../../../components/Regresar";



export default function ClasificacionFuncionalIndex() {
  const { data, isLoading, isError} = useQuery({
    queryKey:["obtenerClasificaciones"],
    queryFn: obtenerClasificaciones,
  });


  const columns = useMemo(
    () => [
      {
        accessorKey: "nombre_c_funcional",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "desc_c_funcional",
        label: "Descripción",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "codigo_c_funcional",
        label: "Código",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },

      {
        accessorKey: "estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded text-white 
              ${
                info.getValue() === 'Activo' ? "bg-customGreen"
                  : "bg-gray-400"
              }`}
          >
            {info.getValue()}
          </span>
        ),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Acciones",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/configuracion/catalogos/presupuestales/clasificacionFuncional/edit/${info.getValue()}`}
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
      return data.data.map((item) => {
        return {
          nombre_c_funcional: item.nombre_c_funcional,
          desc_c_funcional: item.desc_c_funcional,
          codigo_c_funcional: item.codigo_c_funcional,
          estado: item.estado,
          Acciones: item.id_c_funcional,
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
          { href: "/configuracion/catalogos/menu", text: "CATÁLOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATÁLOGOS PRESUPUESTALES",
          },
          { text: "REGISTROS DE CLASIFICACIÓN FUNCIONAL" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales'/>
      <Titulo text={"REGISTROS DE CLASIFICACIÓN FUNCIONAL"} />
      <div className="">
        <Link
          to="/configuracion/catalogos/presupuestales/clasificacionFuncional/create"
          className="inline-block"
        >
          <img
            src={ClasificacionNFuncional}
            alt="Área de Configuración"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">REGISTROS DE CLASIFICACIÓN FUNCIONAL</h3>
          </div>

          <CustomTable columns={columns} data={dataTable} />
        </div>
      </div>
    </>
  );
}
