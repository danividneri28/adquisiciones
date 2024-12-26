import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../components/Spinner";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import CustomTable from "../../../../../../components/CustomTable";
import Regresar from "../../../../../../components/Regresar";
import { obtenerPartidasGenericas } from "../../../../../../api/configuracion/ApiPartidaGenerica";
import NuevaPartidaGenerica from "../../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/nuevaPartidaGenerica.png";

export default function PartidaGIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "nombre_partida_g",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "codigo_partida_g",
        label: "Código",
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "desc_partida_g",
        label: "Descripción",
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "id_subcapitulo",
        label: "Subcapítulo",
        filterFn: "equalsString",
      },
      {
        accessorKey: "estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded text-white ${
              info.row.original.estado === "Activo" ? "bg-customGreen" : "bg-customRed"
            }`}
          >
            {info.row.original.estado === "Activo" ? "Activa" : "Inactiva"}
          </span>
        ),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "acciones",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`${info.row.original.id_partida_g}`}
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

  // Solicitud de datos usando useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ["obtenerPartidasGenericas"],
    queryFn: obtenerPartidasGenericas,
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>Error al cargar las partidas genéricas.</div>;

  return (
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATÁLOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATÁLOGOS PRESUPUESTALES",
          },
          {
            href: "/configuracion/catalogos/presupuestales/objetoGasto",
            text: "CLASIFICACIÓN POR OBJETO DE GASTO",
          },
          { text: "REGISTROS DE PARTIDAS GENÉRICAS" },
        ]}
      />
      <Regresar enlace="/configuracion/catalogos/presupuestales/objetoGasto" />
      <Titulo text={"REGISTROS DE PARTIDAS GENÉRICAS"} className="mt-14" />
      <div className="container mx-auto">
        <Link
          to="/configuracion/catalogos/presupuestales/objetoGasto/partidaGenerica/create"
          className="inline-block"
        >
          <img
            src={NuevaPartidaGenerica}
            alt="Área de Configuración"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">REGISTROS DE PARTIDAS GENÉRICAS</h3>
          </div>

          {/* Renderización de tabla */}
          <CustomTable columns={columns} data={data.partidas}/>
        </div>
      </div>
    </>
  );
}
