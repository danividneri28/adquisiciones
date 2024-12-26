import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import CustomTable from "../../../../../components/CustomTable";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import TipoGasto from "../../../../../assets/images/configuracion/presupuestales/tipoGasto/tipogasto.png";
import Regresar from "../../../../../components/Regresar";
import { useQuery } from "@tanstack/react-query";
import { getTipoGastos } from "../../../../../api/configuracion/catalogos/presupuestales/ApiTipoGasto";
import Spinner from "../../../../../components/Spinner";

export default function TipoGastoIndex() { 
  const { data, isLoading } = useQuery({
  queryKey: ["getTipoGastos"],
  queryFn: getTipoGastos,
 });

 
  const columns = useMemo(
    () => [
      {
        accessorKey: "nombre_gasto",
        label: "Nombre",
        filterFn: "equalsString",
      },
      {
        accessorKey: "desc_gasto",
        label: "Descripción",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "codigo_gasto",
        label: "Código",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "estado",
        label: "Estado",
        cell: (info) => (
          <span
            className={`px-2 py-1 rounded text-white ${
              info.getValue() === 'Activo' ? "bg-customGreen" : "bg-gray-400"
            }`}
          >
            {info.getValue()}
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
              to={`/configuracion/catalogos/presupuestales/tipoGasto/edit/${info.getValue()}`}
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

    const dataTable = useMemo(() => {
      if (data) {
        return data.data.map((item) => {
          return {
            nombre_gasto: item.nombre_gasto,
            desc_gasto: item.desc_gasto,
            codigo_gasto: item.codigo_gasto,
            estado: item.estado,
            Acciones: item.id_tipo_gasto,
          };
        });
      }
      return [];
    }, [data]);
  


 if (isLoading) return <Spinner />;
 if (data.success)

 if(data) return (
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATÁLOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATÁLOGOS PRESUPUESTALES",
          },

          { text: "REGISTROS TIPOS DE GASTOS" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales'/>
      <Titulo text={"REGISTROS TIPOS DE GASTOS"} />
      <div className="">
        <Link
          to="/configuracion/catalogos/presupuestales/tipoGasto/create"
          className="inline-block"
        >
          <img
            src={TipoGasto}
            alt="Área de Configuración"
            className="w-52 object-contain"
          />
        </Link>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">REGISTROS TIPOS DE GASTOS</h3>
          </div>

          <CustomTable columns={columns} data={dataTable} />
        </div>
      </div>
    </>
  );
}
