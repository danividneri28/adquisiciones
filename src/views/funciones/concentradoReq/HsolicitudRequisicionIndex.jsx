import React from "react";

import Regresar from "../../../components/Regresar";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";

export default function HsolicitudRequisicionIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "PartidaEspecifica",
        label: "Partida especifica",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "numeroRequisicion",
        label: "Numero de requisición",
        filterFn: "equalsString",
      },
      {
        accessorKey: "MontoAcumulado",
        label: "Monto Acumulado",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "ProcedimientoAdministrativo",
        label: "Procedimiento Administrativo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Perido",
        label: "Periodo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },

      {
        accessorKey: "Estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`p-2 rounded-lg text-white text-sm ${
              {
                Autorizado: "bg-lime-500",
               
              }[info.row.original.Estado] || "bg-gray-400"
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
              to={`/funciones/consolidado/registros/listado`}
              className="bg-customRed text-white p-2 rounded-lg"
            >
              Ver
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
      Array.from({ length: 1000 }, (_, i) => {
        let estado;
        if (i % 4 === 0) {
          estado = "Autorizado";
        } else {
          estado = "Autorizado";
        }

        return {
          id: i,
          PartidaEspecifica: `Papeleria-2111`,
          numeroRequisicion: `10`,
          MontoAcumulado: `$2,500,000.00`,
          ProcedimientoAdministrativo: `Invitación registrada`,
          Perido: `1`,
          Estado: estado,
          Acciones: `Ver/Editar`,
        };
      }),
    []
  );

  return (
    <>
      <Breadcrumb
        items={[
          { href: "/funciones", text: "FUNCIONES" },
          {href: "/funciones/concentrado/listado", text: "CONCENTRADO DE SOLICITUDES DE REQUISICION"},
          {href:"/funciones/consolidado/listado", text: "APARTADO DE CONSOLIDADOS"},
          {text: "HISTORIAL DE CONSOLIDADOS"},
        ]}
      />
      <Regresar enlace="/funciones/consolidado/listado" />

      <Titulo text={"HISTORIAL DE CONSOLIDADOS"} className="my-14" />

      <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
        <div className="bg-customRed rounded p-2">
          <h3 className="text-white font-bold">
            HISTORIAL SOLICITUDES DE REQUISICIÒN - ETAPA 2
          </h3>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
}
