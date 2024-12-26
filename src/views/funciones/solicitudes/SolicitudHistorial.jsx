import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import Regresar from "../../../components/Regresar";

export default function SolicitudHistorial() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "numeroRequisicion",
        label: "Numero de requisición",
        filterFn: "equalsString",
      },
      {
        accessorKey: "FechaRequisicion",
        label: "Fecha de requisición",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Area",
        label: "Área",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "ClaveProgramatica",
        label: "Clave Programatica",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "PartidaEspecifica",
        label: "Partida especifica del gasto",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Tipo",
        label: "Tipo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "FuenteFinanciamiento",
        label: "Fuente de Financiamiento",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Consolidado",
        label: "Consolidado",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "MontoIVA",
        label: "Monto con IVA",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Estado",
        label: "Estado",
        cell: (info) => (
          <button
            className={`p-1 hover:cursor-none rounded text-white text-sm  
              ${
                info.row.original.Estado === "Autorizado 0"
                  ? "bg-customGreen"
                  : "bg-gray-400"
              }`}
          >
            {info.row.original.Estado}
          </button>
        ),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Acciones",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/funciones/consolidados/requesicion/info`}
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
        numeroRequisicion: `DCS/001/2024 ${i}`,
        FechaRequisicion: `15/01/2023`,
        Area: `Dirección de salud Pública `,
        ClaveProgramatica: `1802147896541236`,
        PartidaEspecifica: `2141`,
        Tipo: `Consumible `,
        FuenteFinanciamiento: `Financiamiento Interno `,
        Consolidado: `Si`,
        MontoIVA: `2,500,000.00`,
        Estado: `Autorizado ${i}`,
        Acciones: `Ver`,
      })),
    []
  );

  return (
    <>
      <Breadcrumb
        items={[
          { href: "/funciones", text: "FUNCIONES" },
          { href:"/funciones/concentrado/listado", text: "CONCENTRADO DE SOLICITUDES DE REQUISICIÓN"},
          { text: "HISTORIAL DE SOLICITUDES DE REQUISICIÓN"},
        ]}
      />
      <Regresar enlace="/funciones/concentrado/listado"/>
      <Titulo text={"HISTORIAL DE SOLICITUDES DE REQUISICIÓN"} />
      <div>
        <div className="flex justify-center">
          <form
            action=""
            className="bg-white mt-8 rounded-lg p-3 w-full max-w-3xl"
          >
            <div className="flex md:flex-row flex-col md:items-end gap-4">
              <div>
                <label className="block text-sm font-medium text-customRed">
                  *Año:
                </label>
                <select
                  name="year"
                  className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Seleccione un año</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-customRed">
                  *Mes:
                </label>
                <select
                  name="month"
                  className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Seleccione un mes</option>
                  <option value="Enero">Enero</option>
                  <option value="Febrero">Febrero</option>
                  <option value="Marzo">Marzo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-customRed">
                  *Área:
                </label>
                <select
                  name="area"
                  className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Seleccione un área</option>
                  <option value="Área 1">Área 1</option>
                  <option value="Área 2">Área 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-customRed">
                  *Tipo:
                </label>
                <select
                  name="type"
                  className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="Tipo 1">Tipo 1</option>
                  <option value="Tipo 2">Tipo 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-customRed">
                  *Estado:
                </label>
                <select
                  name="status"
                  className="mt-1 block w-full rounded-md border border-black shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Seleccione un estado</option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
              <div className="text-center mt-4 lg:mt-0">
                <label className="block text-sm font-medium text-customRed"></label>
                <input
                  className="bg-customRed text-white font-black w-24 p-2 rounded-lg"
                  type="submit"
                  value="Buscar"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">
              HISTORIAL DE SOLICITUDES DE REQUISICIÓN - ETAPA 1
            </h3>
          </div>
          <CustomTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
