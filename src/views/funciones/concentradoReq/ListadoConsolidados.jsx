import React from "react";

// import Historialconsolidados from "../../../assets/images/funciones/concentradoReq/Historialconsolidados.png";
import Regresar from "../../../components/Regresar";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";

export default function ListadoConsolidados() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "noReq",
        label: "No de requisición",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "PartidaEspecifica",
        label: "Partida Especifica",
        filterFn: "equalsString",
      },
      {
        accessorKey: "Año",
        label: "Año",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Periodo",
        label: "Periodo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "Area",
        label: "Area",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "MontoconIVA",
        label: "Monto con IVA",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "PocedimientoAdministrativo",
        label: "Pocedimiento Administrativo",
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
        accessorKey: "Acciones",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/funciones/consolidados/requesicion`}
              className="bg-customRed text-white p-2 rounded-lg"
            >
              Editar/Ver
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
          noReq: `DCS/001/2024`,
          PartidaEspecifica: `Papeleria - 2111`,
          Año: `2024`,
          Periodo: `1`,
          Area: `Dirección General`,
          MontoconIVA: `$2,500.00`,
          PocedimientoAdministrativo: `Invitacion restingida`,
          Tipo: `Consumible`,
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
          {text: "REGISTRO DE CONSOLIDADOS"},
        ]}
      />
      <div className="flex items-center justify-between">
        <Regresar enlace="/funciones/consolidado/listado" />
      </div>

      <Titulo text={"REGISTROS DE CONSOLIDADOS"} className="my-14" />

      <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-12">
        <div className="bg-customRed rounded p-2">
          <h3 className="text-white font-bold">
            REGISTROS DE CONSOLIDADOS - ETAPA 2
          </h3>
        </div>
        <CustomTable columns={columns} data={data}/>
        <form className="w-full p-6 rounded-lg flex justify-center">
          <div>
              <button className="text-white  bg-customYellow p-4 font-bold rounded-lg">Generar Corte</button>
          </div>
          </form>
      </div>
    </>
  );
}
