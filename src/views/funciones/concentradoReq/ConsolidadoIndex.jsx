import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import Historialconsolidados from "../../../assets/images/funciones/concentradoReq/Historialconsolidados.png";
import Regresar from "../../../components/Regresar";
export default function ConcentradoIndex() {
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
                Nuevo: "bg-sky-400",
                Proceso: "bg-purple-400",
               
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
              to={`/funciones/consolidado/listado/registros`}
              className="bg-customRed text-white p-2 rounded-lg"
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
      Array.from({ length: 1000 }, (_, i) => {
        let estado;
        if (i % 4 === 0) {
          estado = "Nuevo";
        }else {
          estado = "Proceso";
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
          {text: "APARTADO DE CONSOLIDADOS"},
        ]}
      />
      <Regresar enlace="/funciones/concentrado/listado" />
      <div className="flex justify-center items-center flex-col">
        <Titulo text={"APARTADO DE CONSOLIDADOS"} className="mt-4" />
        <div className="flex justify-end w-full mt-4">
          <Link to="/funciones/consolidado/historialRequisicion/listado">
            <img
              src={Historialconsolidados}
              alt="Área de Configuración"
              className="w-80 object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
        <div className="bg-customRed rounded p-2">
          <h3 className="text-white font-bold">
            APARTADO DE CONSOLIDADOS - ETAPA 2
          </h3>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
}
