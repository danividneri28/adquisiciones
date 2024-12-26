import React from "react";
import { Link } from "react-router-dom";
import NuevoSubCapitulo from "../../../../../../assets/images/configuracion/presupuestales/clasificacion_por_gastos/nuevo_subcapítulo.png";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import CustomTable from "../../../../../../components/CustomTable";
import Regresar from "../../../../../../components/Regresar";

export default function SubCapituloIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "Nombre",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "Codigo",
        label: "Código",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Descripcion",
        label: "Descripción",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Capitulo",
        label: "Capitulo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded text-white ${
              info.row.original.Estado === "Activa 0"
                ? "bg-customGreen"
                : "bg-gray-500"
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
              to={`/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo/edit`}
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
        Nombre: `Nombre ${i}`,
        Codigo: `0${i}`,
        Descripcion: `Coordinación de la politica de Gobierno, Relaciones exteriores, seguridad nacional, seguridad nacional, otros servicios... ${i}`,
        Capitulo: `100${i}`,
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
          { text: "REGISTROS DE SUBCAPITULOS" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales/objetoGasto'/>
      <Titulo text={"REGISTROS DE SUBCAPITULOS"} className="mt-14"/>
      <div className="container mx-auto">
        <Link
          to="/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo/create"
          className="inline-block"
        >
          <img
            src={NuevoSubCapitulo}
            alt="Área de Configuración"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">REGISTROS DE SUBCAPITULOS</h3>
          </div>

          <CustomTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
