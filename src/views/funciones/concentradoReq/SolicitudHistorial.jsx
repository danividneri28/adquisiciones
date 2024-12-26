import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";

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
          { text: "REGISTROS DE SOLICITUDES DE REQUISICIÓN"},
          { text: "HISTORIAL DE SOLICITUDES DE REQUISICIÓN"},
        ]}
      />
      <a
        href="/home"
        className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer"
      >
        REGRESAR
      </a>
      <Titulo text={"HISTORIAL DE SOLICITUDES  DE REQUISICIÓN"} className="mb-28"/>
      <div>
        <div className="flex justify-between">
          
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
