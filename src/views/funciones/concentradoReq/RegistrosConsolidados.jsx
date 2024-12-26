import React from "react";

// import Historialconsolidados from "../../../assets/images/funciones/concentradoReq/Historialconsolidados.png";
import Regresar from "../../../components/Regresar";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/CustomTable";

export default function RegistrosConsolidados() {
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
          Perido: `1`,
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
          {href:"/funciones/consolidado/historialRequisicion/listado", text: "HISTORIAL DE CONSOLIDADOS"},
          {text: "REGISTRO DE CONSOLIDADOS"},
        ]}
      />
      <div className="flex items-center justify-between">
        <Regresar enlace="/funciones/consolidado/historialRequisicion/listado" />
        <div className="flex items-center gap-4 my-5">
          <p className="text-customRed font-bold">Oficio de autorización</p>
          <a href='/home' className="bg-customRed text-white px-7 rounded-lg">Ver PDF</a>
        </div>
      </div>

      <Titulo text={"REGISTROS DE CONSOLIDADOS"} className="my-14" />

      <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-12">
        <div className="bg-customRed rounded p-2">
          <h3 className="text-white font-bold">
            REGISTROS DE CONSOLIDADOS - ETAPA 2
          </h3>
        </div>
        <CustomTable columns={columns} data={data}/>
      </div>
      <div className="bg-gray-100 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
              datos del procedimiento administrativo
            </h3>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
          >
            <div className="grid grid-cols-1">
              <div className="my-4">
                <label className="block mb-1 text-sm font-medium text-white">
                  Observaciones:
                </label>
                <textarea name="area" id="area" className="w-full p-2 opacity-1  text-lg bg-gray-300 rounded-lg" disabled>Ejemplo 1</textarea>
              </div>
            </div>
          </form>
        </div>
    </>
  );
}
