import { useMemo } from "react";
import { Link, Navigate } from "react-router-dom";
import CustomTable from "../../../../../components/CustomTable";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import NuevobienServicio from "../../../../../assets/images/configuracion/presupuestales/BienesServicios/NuevobienServicio.png";
import Regresar from "../../../../../components/Regresar";
import { useQuery } from "@tanstack/react-query";
import { getBienesServicios } from "../../../../../api/configuracion/ApiBienesServicios";
import Spinner from "../../../../../components/Spinner";

export default function BienesServicisoIndex() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getBienesServicios"],
    queryFn: getBienesServicios,
  })

  const columns = useMemo(
    () => [
      {
        accessorKey: "created_at",
        label: "Fecha de alta",
        cell: (info) => info.getValue(),
        filterFn: "equalsString",
      },
      {
        accessorKey: "capitulo",
        label: "Capítulo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "subcapitulo",
        label: "Subcapitulo",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "generica",
        label: "Generica",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "especifica",
        label: "Especifica",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "nombre_articulo",
        label: "Nombre",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "tipo_bien",
        label: "Tipo de Bien",
        cell: (info) => info.getValue(),
        filterFn: "equalsString",
      },
      {
        accessorKey: "Acciones",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/configuracion/catalogos/presupuestales/BienesServicios/edit/${info.getValue()}`}
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
    if(data){
      return data.map((item) => {
        const capitulo = item.partidas?.[0]?.partidas_generales?.[0]?.sub_capitulos?.[0]?.capitulos?.[0]?.nombre_capitulo || '';
        const codigo_capitulo = item.partidas?.[0]?.partidas_generales?.[0]?.sub_capitulos?.[0]?.capitulos?.[0]?.codigo_capitulo || '';
        const subcapitulo = item.partidas?.[0]?.partidas_generales?.[0]?.sub_capitulos?.[0]?.nombre_subcapitulo || '';
        const codigo_subcapitulo = item.partidas?.[0]?.partidas_generales?.[0]?.sub_capitulos?.[0]?.codigo_subcapitulo || '';
        const generica = item.partidas?.[0]?.partidas_generales?.[0]?.nombre_partida_g || '';
        const codigo_generica = item.partidas?.[0]?.partidas_generales?.[0]?.codigo_partida_g || '';
        const especifica = item.partidas?.[0]?.nombre_partida_e || '';
        const codigo_especifica = item.partidas?.[0]?.codigo_partida_e || '';
        return {
          nombre_articulo: item.nombre_articulo,
          tipo_bien: item.tipo_bien,
          capitulo:`${codigo_capitulo} - ${capitulo}`,
          subcapitulo:`${codigo_subcapitulo} - ${subcapitulo}`,
          generica:`${codigo_generica} - ${generica}`,
          especifica:`${codigo_especifica} - ${especifica}`,
          created_at: item.created_at.slice(0,10),
          Acciones: item.id_bien_servicio,
        };
      });
    }
    return [];
  }, [data]);
  
  if(isLoading) return <Spinner />;
  if (isError) return <Navigate to="/404" />;
  
  if(data) return(
    <>
      <Breadcrumb
        items={[
          { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
          { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
          {
            href: "/configuracion/catalogos/presupuestales",
            text: "CATALOGOS PRESUPUESTALES",
          },

          { text: "REGISTROS DE BIENES Y SERVICIOS" },
        ]}
      />
      <Regresar enlace='/configuracion/catalogos/presupuestales'/>
      <Titulo text={"REGISTRO DE BIENES Y SERVICIOS"} />

      <div className="">
        <div className="flex xl:gap-96 lg:gap-80 md:gap-10 gap-24 items-center">
          <Link
            to="/configuracion/catalogos/presupuestales/BienesServicios/create"
            className="inline-block"
          >
            <img
              src={NuevobienServicio}
              alt="Área de Configuración"
              className="w-52 object-contain"
            />
          </Link>
          <div>
            <p className="text-customRed text-xl my-2 font-bold text-center">
              Tipo:
            </p>
            <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
              <option selected="">Seleccione una opción</option>
              <option>Consumible</option>
              <option>Inventariable</option>
              <option>Servicio</option>
              <option>Todos</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
          <div className="bg-customRed rounded p-2">
            <h3 className="text-white font-bold">
              REGISTROS DE BIENES Y SERVICIOS
            </h3>
          </div>

          <CustomTable columns={columns} data={dataTable} />
        </div>
      </div>
    </>
  );
}
