import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import Nuevarequisicion from "../../../assets/images/funciones/solicitudRequisicion/Nuevarequisicion.png";
import Historial from "../../../assets/images/funciones/solicitudRequisicion/historial.png";
import Regresar from "../../../components/Regresar";

export default function SolicitudIndex() {
  
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
        <span
          className={`px-2 py-1 rounded text-white text-sm ${
            {
              "Enviado": "bg-yellow-400",
              "Borrador": "bg-gray-300",
              "Reenviado": "bg-orange-400",
              "Proceso": "bg-purple-400",
              "Rechazado": "bg-red-500"
            }[info.row.original.Estado] || "bg-gray-400" // Clase por defecto
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
              to={`/funciones/solicitudes/edit`}
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
      Array.from({ length: 1000 }, (_, i) => {

        let estado;
        if (i % 4 === 0) {
          estado = "Borrador";
        } else if (i % 4 === 1) {
          estado = "Reenviado";
        } else if (i % 4 === 2) {
          estado = "Rechazado";
        } else if (i % 4 === 3) {
          estado = "Proceso";
        } 
        else {
          estado = "Enviado";
        }
  
        return {
          id: i,
          numeroRequisicion: `DCS/001/2024 ${i}`,
          FechaRequisicion: `15/01/2023`,
          Area: `Dirección de salud Pública `,
          PartidaEspecifica: `2141`,
          Tipo: `Consumible `,
          FuenteFinanciamiento: `Financiamiento Interno `,
          Consolidado: `Si`,
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
            text: "REGISTROS DE SOLICITUDES DE REQUISICIÓN",
          },
        ]}
      />
     <Regresar enlace='/funciones'/>
      <Titulo text={"REGISTROS DE SOLICITUDES DE REQUISICIÓN"} className="mb-8 lg:mb-14 " />
      <div>
        <div className="flex justify-between">
          <Link
            to="/funciones/solicitudes/create"
            className="inline-block"
          >
            <img
              src={Nuevarequisicion}
              alt="Área de Configuración"
              className="w-52 object-contain"
            />
          </Link>
          <Link
            to="/funciones/solicitudes/historial"
            className="inline-block"
          >
            <img
              src={Historial}
              alt="Área de Configuración"
              className="w-52 object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">
              REGISTROS DE SOLICITUDES DE REQUISICIÓN - ETAPA 1
            </h3>
          </div>
          <CustomTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
