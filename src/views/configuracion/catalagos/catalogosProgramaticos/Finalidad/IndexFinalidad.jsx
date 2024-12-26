import React from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import imgNuevaFinalidad from "../../../../../assets/images/configuracion/programaticos/nuevafinalidad.png";
import CustomTable from "../../../../../components/CustomTable";
import Regresar from "../../../../../components/Regresar";
import { useQuery } from "@tanstack/react-query";
import { getFinalidades } from "../../../../../api/configuracion/ApiFinalidad";
import Spinner from "../../../../../components/Spinner";

const IndexFinalidad = () => {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "nombre_finalidad",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "descripcion",
        label: "Descripción",
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "codigo_finalidad",
        label: "Código",
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-1 py-1 rounded text-white text-xs ${
              info.getValue() === 'Activo' ? "bg-customGreen" : "bg-customRed"
            }`}
          >
            {info.getValue()}
          </span>
        ),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "id_finalidad",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/configuracion/catalogos/programaticos/editar/finalidad/${info.getValue()}`}
              className="bg-customRed text-white px-2 py-1 rounded text-xs"
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

  const { data, isLoading } = useQuery({
    queryKey: ["getFinalidades"],
    queryFn: getFinalidades,
  });

  const dataTable = React.useMemo(() => {
    if (data) return data.data;
    return [];
  }, [data]);
  if (isLoading) return <Spinner />;
  if (data.success)
    return (
      <>
        <Breadcrumb
          items={[
            { href: "../../menu", text: "CONFIGURACIÓN" },
            { href: "../../catalogos/menu", text: "CATÁLAGOS" },
            {
              href: "../../menu/catalogos/programaticos",
              text: "CATÁLAGOS PROGRAMÁTICOS",
            },
            { text: "REGISTRO DE FINALIDADES" },
          ]}
        />

        <Regresar enlace="../menu/catalogos/programaticos" />

        <Titulo text="REGISTRO DE FINALIDADES" />

        <Link
          to="/configuracion/catalogos/programaticos/nueva/finalidad"
          className="inline-block mt-2"
        >
          <img
            src={imgNuevaFinalidad}
            alt="nueva finalidad"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">REGISTROS DE FINALIDADES</h3>
          </div>

          <CustomTable columns={columns} data={dataTable} />
        </div>
      </>
    );
};

export default IndexFinalidad;
