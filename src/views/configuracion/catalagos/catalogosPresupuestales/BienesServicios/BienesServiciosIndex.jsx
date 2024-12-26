import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../../../../components/CustomTable";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import NuevobienServicio from "../../../../../assets/images/configuracion/presupuestales/BienesServicios/NuevobienServicio.png";
import Regresar from "../../../../../components/Regresar";

export default function BienesServicisoIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "Fecha_de_alta",
        label: "Fecha de alta",
        filterFn: "equalsString",
      },
      {
        accessorKey: "no_de_articulo",
        label: "No. de Articulo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Nombre",
        label: "Nombre",
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
        accessorKey: "PartidaEspecifica",
        label: "Partida especifica",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Unidad_de_medida",
        label: "Unidad de medida",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Acciones",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/configuracion/catalogos/presupuestales/BienesServicios/edit`}
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
        Fecha_de_alta: `10/10/2024`,
        no_de_articulo: `20261022${i}`,
        Nombre: `Gas`,
        Descripción: `Caja con 150 paquetes de 6 pzas`,
        PartidaEspecifica: `2411 - Productos Minerales`,
        Unidad_de_medida: `Caja`,
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

          { text: "REGISTROS DE BIENES Y SERVICIOS" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales'/>
      <Titulo text={"REGISTRO DE BIENES Y SERVICIOS"} />

      <div className="">
        <div className="flex xl:gap-96 lg:gap-80 md:gap-10 gap-24 items-center">
          <Link
            to="/configuracion/catalogos/presupuestales/BienesServicios/create"
            className="inline-block"
          >
            <img
              src={NuevobienServicio}
              alt="Área de Configuración"
              className="w-52 object-contain"
            />
          </Link>
          <div>
            <p className="text-customRed text-xl my-2 font-bold text-center">
              Tipo:
            </p>
            <select class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
              <option selected="">Seleccione una opción</option>
              <option>Consumible</option>
              <option>Inventariable</option>
              <option>Servicio</option>
              <option>Todos</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">
              REGISTROS DE BIENES Y SERVICIOS
            </h3>
          </div>

          <CustomTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
