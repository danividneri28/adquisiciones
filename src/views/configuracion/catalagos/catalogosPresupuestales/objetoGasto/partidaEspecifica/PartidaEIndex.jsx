import { Link } from "react-router-dom";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../components/Spinner";
import NuevaPartidaEspecifica from "../../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/npartidaespecífica.png";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import CustomTable from "../../../../../../components/CustomTable";
import Titulo from "../../../../../../components/Titulo";
import { obtenerPartidasEspecificas } from "../../../../../../api/configuracion/ApiPartidasEspecificas";
import Regresar from "../../../../../../components/Regresar";

export default function PartidaEIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "nombre_partida_e",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "codigo_partida_e",
        label: "Código",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "desc_partida_e",
        label: "Descripción",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded text-white ${
              info.row.original.estado === "Activo"
                ? "bg-customGreen"
                : "bg-gray-500"
            }`}
          >
            {info.row.original.estado}
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
              to={`/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica/edit/${info.row.original.id_partida_e}`}
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

  const { data, isLoading, error } = useQuery({
    queryKey: ["obtenerPartidasEspecificas"],
    queryFn: obtenerPartidasEspecificas,
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>Error al cargar las partidas específicas.</div>;

  // Valida si los datos están vacíos
  // if (!data || !data.partidas || data.partidas.length === 0) {
  //   return <div>No hay datos para mostrar.</div>;
  // }

  return (
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATALOGOS PRESUPUESTALES",
          },
          {
            href: "/configuracion/catalogos/presupuestales/objetoGasto",
            text: "CLASIFICACIÓN POR OBJETO DE GASTO",
          },
          {
            text: "REGISTROS DE PARTIDAS ESPECÍFICAS",
          },
        ]}
      />
      <Regresar enlace="/configuracion/catalogos/presupuestales/objetoGasto" />
      <Titulo text={"REGISTROS DE PARTIDAS ESPECÍFICAS"} className="mt-14" />
      <div className="container mx-auto">
        <Link
          to="/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica/create"
          className="inline-block"
        >
          <img
            src={NuevaPartidaEspecifica}
            alt="Área de Configuración"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">
              REGISTROS DE PARTIDAS ESPECÍFICAS
            </h3>
          </div>

          <CustomTable columns={columns} data={data.partidas} />
        </div>
      </div>
    </>
  );
}
