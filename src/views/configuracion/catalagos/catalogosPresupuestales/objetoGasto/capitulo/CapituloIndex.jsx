import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import NuevoCapitulo from "../../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/nuevoCapitulo.png";
import Titulo from "../../../../../../components/Titulo";
import CustomTable from "../../../../../../components/CustomTable";
import Regresar from "../../../../../../components/Regresar";
import { getCapitulos } from "../../../../../../api/configuracion/capitulos/ApiCapitulos";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../../components/Spinner";

export default function CapituloIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "nombre_capitulo",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "codigo_capitulo",
        label: "Codigo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "desc_capitulo",
        label: "Descripción",
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
              to={`/configuracion/catalogos/presupuestales/objetoGasto/capitulo/edit/${info.row.original.id_capitulo}`}
              className="bg-customRed text-white px-6 py-2 rounded"
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
    queryKey: ["getCapitulos"],
    queryFn: getCapitulos,
  });

  // console.log(data.data);

  if (isLoading) return <Spinner />;
  if (data.success)
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
          { text: "REGISTROS DE CAPITULOS" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales/objetoGasto'/>
      <Titulo text={"REGISTROS DE CAPITULOS"} />
      <div className="">
        <Link
          to="/configuracion/catalogos/presupuestales/objetoGasto/capitulo/create"
          className="inline-block"
        >
          <img
            src={NuevoCapitulo}
            alt="Área de Configuración"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">REGISTROS DE CAPITULOS</h3>
          </div>

          <CustomTable columns={columns} data={data.data} />
        </div>
      </div>
    </>
  );
}
