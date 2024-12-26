import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import HistorialConsolidados from "../../../assets/images/funciones/proveedorContrato/historialConsolidados.png";


const ProveedorConsolidados = () => {
  const columns = React.useMemo(
      () => [
        {
          accessorKey: "PartidaEspecifica",
          label: "Partida especifica",
          filterFn: "equalsString",
        },
        {
          accessorKey: "NumRequisicion",
          label: "Número de requisición",
          cell: (info) => info.getValue(),
          filterFn: "includesStringSensitive",
        },
        {
          accessorKey: "MontoAcumulado",
          label: "Monto acumulado",
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
          accessorKey: "ProcedimientoAdministrativo",
          label: "Procedimiento administrativo",
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
          accessorKey: "Estado",
          label: "Estado",
          cell: (info) => (
            <span
              className={`px-2 py-1 rounded text-white 
                ${
                  info.row.original.Estado === "Nuevo"
                    ? "bg-cyan-500"
                    : "bg-purple-600"
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
                to={`/funciones/proveedor/consolidados/historial/registros`}
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
      PartidaEspecifica: `Papeleria - 2141`,
      NumRequisicion: `10`,
      MontoAcumulado: `2,500,000.00`,
      FuenteFinanciamiento: `Financiamiento Interno `,
      ProcedimientoAdministrativo: `Invitacion Restringida`,
      Periodo: `1`,
      Estado: `Proceso`,
      Acciones: `Ver/Editar`,
      })),
  []
  );

  return (
  <>
      <Breadcrumb
      items={[
          { href: "/funciones", text: "FUNCIONES" },
          { href: "/funciones/proveedor/listado",text: "REGISTROS DE PROVEEDORES Y CONTRATOS"},
          {text: "APARTADO DE CONSOLIDADOS"},
      ]}
      />
      <a
      href="/funciones/proveedor/listado"
      className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer"
      >
      REGRESAR
      </a>
      <Titulo text={"APARTADO DE CONSOLIDADOS"} />
      <div>
      <div className="flex justify-between">
          <Link>
          </Link>
          <Link
          to="/funciones/proveedor/consolidados/historial"
          className="inline-block"
          >
          <img
              src={HistorialConsolidados}
              alt="Área de Configuración"
              className="w-52 object-contain"
          />
          </Link>
      </div>

      <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
          <h3 className="text-white font-bold">
              APARTADO DE CONSOLIDADOS - ETAPA 4
          </h3>
          </div>
          <CustomTable columns={columns} data={data} />
      </div>
      </div>
  </>
  );
}

export default ProveedorConsolidados
