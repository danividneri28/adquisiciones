import React from "react";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";
import { Link, useParams } from "react-router-dom";
import FormFuncion from "../../../../../components/configuracion/catalogosProgramaticos/FormFuncion";
import Spinner from "../../../../../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getFuncion } from "../../../../../api/configuracion/ApiFuncion";
import { getFinalidades } from "../../../../../api/configuracion/ApiFinalidad";

const NuevaFuncion = () => {
  const params = useParams();
  const param = !!params.id;

  const { data, isLoading, fetchStatus } = useQuery({
    queryKey: ["getFuncion", params.id],
    queryFn: getFuncion,
    enabled: param,
  });

  const { data: dataF, isLoading: isLoadingF } = useQuery({
    queryKey: ["getFinalidades", "Activo"],
    queryFn: getFinalidades,
  });

  if (isLoading || isLoadingF || fetchStatus == "fetching") return <Spinner />;

  return (
    <>
      <Breadcrumb
        items={[
          { href: `${param?'../':''}../../../menu`, text: "CONFIGURACIÓN" },
          { href: `${param?'../':''}../../../catalogos/menu`, text: "CATÁLAGOS" },
          {
            href: `${param?'../':''}../../../menu/catalogos/programaticos`,
            text: "CATÁLAGOS PROGRAMÁTICOS",
          },
          {
            href: `${param?'../':''}../../../catalogos/programaticos/funcion`,
            text: "REGISTRO DE FUNCIONES",
          },
          { text: "FUNCIÓN" },
        ]}
      />

      <Titulo text="FUNCIÓN" className="mt-14" />

      <div className="flex flex-col w-full h-full mt-20 text-gray-700 rounded-lg bg-clip-border mb-20">
        <div className="bg-customRed2 rounded p-2">
          <h3 className="text-white font-bold">FUNCIÓN</h3>
        </div>

        <FormFuncion defaultValues={data?.data} update={param} dataF={dataF} />
      </div>
    </>
  );
};

export default NuevaFuncion;
