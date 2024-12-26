import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../../../../components/CustomTable";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import TipoGasto from "../../../../../assets/images/configuracion/presupuestales/tipoGasto/tipogasto.png";
import Regresar from "../../../../../components/Regresar";

export default function TipoGastoIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "Nombre",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "Descripción",
        label: "Descripción",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Codigo",
        label: "Codigo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },

      {
        accessorKey: "Estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded text-white 
              ${
                info.row.original.Estado === "Activa 0"
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
              to={`/configuracion/catalogos/presupuestales/tipoGasto/edit`}
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
        Descripción: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.. ${i}`,
        Codigo: `100${i}`,
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

          { text: "REGISTROS TIPOS DE GASTOS" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales'/>
      <Titulo text={"REGISTROS TIPOS GASTOS"} />
      <div className="">
        <Link
          to="/configuracion/catalogos/presupuestales/tipoGasto/create"
          className="inline-block"
        >
          <img
            src={TipoGasto}
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
