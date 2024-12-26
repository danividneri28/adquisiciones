import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import NuevoCapitulo from "../../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/nuevoCapitulo.png";
import Titulo from "../../../../../../components/Titulo";
import CustomTable from "../../../../../../components/CustomTable";
import Regresar from "../../../../../../components/Regresar";

export default function CapituloIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "Nombre",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "Codigo",
        label: "Codigo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Descripción",
        label: "Descripción",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded text-white 
              ${ info.row.original.Estado === "Activa 0"
                ? "bg-customGreen"
                : "bg-gray-400"
            }`}
          >
            {info.row.original.Estado}
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
              to={`/configuracion/catalogos/presupuestales/objetoGasto/capitulo/edit`}
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

  const data = React.useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        Nombre: `Servicios Personales ${i}`,
        Codigo: `100${i}`,
        Descripcion: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eligendi a, harum non aliquam maxime? Quibusdam tenetur rerum iure, unde odit aliquam, porro fugit architecto cum ex impedit molestias modi. ${i}`,
        Estado: `Activa ${i}`,
        Acciones: `Ver/Editar`,
      })),
    []
  );

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

          <CustomTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
