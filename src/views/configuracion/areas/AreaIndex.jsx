import React from "react";
import { Link } from "react-router-dom";
import NuevaArea from "../../../assets/images/imagesConfiguracion/nueva_area.png";
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import { useQuery } from "@tanstack/react-query";
import { getAreas } from "../../../api/configuracion/ApiAreas";
import Flecha from "../../../assets/images/iconosMenu/Flecha.png";
import Regresar from "../../../components/Regresar";
import Spinner from "../../../components/Spinner";

export default function AreaIndex() {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "nombre_area",
        label: "Nombre del área",
        filterFn: "equalsString",
      },
      {
        accessorKey: "clave_area",
        label: "Clave del área",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "direccion",
        label: "Dirección",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "telefono",
        label: "Teléfono",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive",
      },
      {
        accessorKey: "id",
        label: "Acciones",
        cell: (info) => (
          <div>
            <Link
              to={`/configuracion/areas/${info.getValue()}`}
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

  const { data, isLoading } = useQuery({
    queryKey: ["getAreas"],
    queryFn: getAreas,
  });
      

  if (isLoading) return <Spinner />;
  if (data.success)
    return (
      <>
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { text: "REGISTROS DE ÁREAS" },
          ]}
        />

      <div>
        <Regresar enlace="/configuracion/menu"/>
        <Titulo text="REGISTRO DE ÁREAS" className="mb-10 lg:mb-14" />
        
        <div>
          <Link to="/configuracion/areas/create" className="inline-block">
            <img
              src={NuevaArea}
              alt="Área de Configuración"
              className="w-52 object-contain"
            />
          </Link>

          <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
            <div className="bg-customRed rounded p-2">
              <h3 className="text-white font-bold">REGISTROS DE ÁREAS </h3>
            </div>

            <CustomTable columns={columns} data={data.data} />
          </div>
          </div>
        </div>
      </>
    );
}
