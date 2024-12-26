import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import Consolidados from "../../../assets/images/funciones/concentradoReq/consolidados.png";
import Historial from "../../../assets/images/funciones/solicitudRequisicion/historial.png";
import Regresar from "../../../components/Regresar";
export default function ConcentradoIndex() {
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
        accessorKey: "PartidaEspecifica",
        label: "Partida especifica",
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
        accessorKey: "ProcedimientoAdministrativo",
        label: "Procedimiento Administrativo",
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
          <span
            className={`p-2 rounded-lg text-white text-sm ${
              {
                Nuevo: "bg-sky-400",
                Proceso: "bg-purple-400",
                Reenviado: "bg-orange-400",
                Rechazado: "bg-red-500",
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
              to={`/funciones/consolidados/requesicionAlta`}
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
        } else if (i % 4 === 1) {
          estado = "Reenviado";
        } else if (i % 4 === 2) {
          estado = "Rechazado";
        } else if (i % 4 === 3) {
          estado = "Proceso";
        } else {
          estado = "Enviado";
        }

        return {
          id: i,
          numeroRequisicion: `DCS/001/2024 ${i}`,
          FechaRequisicion: `15/01/2023`,
          Area: `Dirección de salud Pública `,
          PartidaEspecifica: `2141`,
          Tipo: `Consumible `,
          ProcedimientoAdministrativo: `Invitación registrada `,
          MontoIVA: `2,500,000.00`,
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
          {
            text: "CONCENTRADO DE SOLICITUDES DE REQUISICIÓN",
          },
        ]}
      />
      <Regresar enlace="/funciones" />
      <Titulo text={"CONCENTRADO DE SOLICITUDES DE REQUISICIÓN"} className="mb-10 mt-4" />
      <div className="lg:flex md:justify-between md:items-center md:gap-10 grid sm:grid-rows-2 grid-rows-2">
        <div className="order-1 my-4 mx-auto lg:mx-0 md:my-0">
          <Link to="/funciones/consolidado/listado">
            <img
              src={Consolidados}
              alt="Área de Configuración"
              className="w-80 object-cover"
            />
          </Link>
        </div>

        <div className="order-3 lg:order-2 my-8 md:my-0">
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

        <div className="order-2 lg:order-3 mx-auto lg:mx-0 my-4 md:my-0">
          <Link to="/funciones/solicitudes/historial">
            <img
              src={Historial}
              alt="Área de Configuración"
              className="w-80 object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
        <div className="bg-customRed rounded p-2">
          <h3 className="text-white font-bold">
            CONCENTRAD8O DE SOLICITUDES DE REQUISICIÓN - ETAPA 2
          </h3>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
}
