import { useMemo } from "react";
import { Link, Navigate } from "react-router-dom";

import CustomTable from "../../../../../components/CustomTable";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import NfuenteFinanciamiento from "../../../../../assets/images/configuracion/presupuestales/FuenteFinanciamiento/NfuenteFinanciamiento.png";
import Regresar from "../../../../../components/Regresar";

import { useQuery } from "@tanstack/react-query";

import { getFinanciamientos } from "../../../../../api/configuracion/ApiFinanciamiento";
import Spinner from "../../../../../components/Spinner";

export default function FuenteFinanciamientoIndex() {

  const  { data, isLoading, isError } = useQuery({
    queryKey: ['getFinanciamientos'],
    queryFn: getFinanciamientos,
  });

  const columns = useMemo(
    () => [
      {
        accessorKey: "nombre",
        label: "Nombre",
        cell: (info) => info.getValue(),
        filterFn: "equalsString",
      },
      {
        accessorKey: "description",
        label: "Descripción",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "codigo",
        label: "Codigo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-6 py-2 rounded text-white align-middle 
              ${ info.row.original.estado === "Activo"
                ? "bg-customGreen"
                : "bg-gray-400"
            }`}
          >
          {info.row.original.estado}
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
              to={`/configuracion/catalogos/presupuestales/FuenteFinanciamiento/edit/${info.getValue()}`}
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
          nombre: item.nombre_financiemiento,
          description: item.desc_financiamiento,
          codigo: item.codigo_financiemiento,
          estado: item.estado,
          Acciones: item.id_financiamiento,
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
          { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATALOGOS PRESUPUESTALES",
          },

          { text: "REGISTROS DE FUENTES DE FINANCIAMIENTO" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales'/>
      <Titulo text={"REGISTROS DE FUENTES DE FINANCIAMIENTO"} />
      <div className="">
        <Link
          to="/configuracion/catalogos/presupuestales/FuenteFinanciamiento/create"
          className="inline-block"
        >
          <img
            src={NfuenteFinanciamiento}
            alt="Área de Configuración"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">
              REGISTROS DE CLASIFICACIÓN FUNCIONAL
            </h3>
          </div>

          <CustomTable columns={columns} data={dataTable} />
        </div>
      </div>
    </>
  );
}
