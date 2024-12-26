import React from "react";
import Titulo from "../../../../../components/Titulo";
import Breadcrumb from "../../../../../components/Breadcrumb";
import { Link, Navigate, useParams } from "react-router-dom";
import FormSubfuncion from "../../../../../components/configuracion/catalogosProgramaticos/FormSubfuncion";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../components/Spinner";
import { getSubfuncion } from "../../../../../api/configuracion/ApiSubfuncion";
import { getFunciones } from "../../../../../api/configuracion/ApiFuncion";

const NuevaSubfuncion = () => {
  const params = useParams();
  const param = !!params.id;

  const { data, isLoading, isError, fetchStatus } = useQuery({
    queryKey: ["getSubfuncion", params.id],
    queryFn: getSubfuncion,
    enabled: param,
    retry: false,
  });
  const {
    data: dataF,
    isLoading: isLoadingF,
    isError: isErrorF,
  } = useQuery({
    queryKey: ["getFunciones", "Activo"],
    queryFn: getFunciones,
  });

  if (isLoadingF || isLoading || fetchStatus == "fetching") return <Spinner />;
  if (isError || isErrorF) return <Navigate to="/404" />;
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
          { href: `${param?'../':''}../../../catalogos/programaticos/subfuncion`, text: "REGISTRO DE SUBFUNCIONES" },
          { text: "SUBFUNCIÓN" },
        ]}
      />

      <Titulo text="SUBFUNCIÓN" className="mt-14" />

      <div className="flex flex-col w-full h-full mt-20 text-gray-700 rounded-lg bg-clip-border mb-20">
        <div className="bg-customRed2 rounded p-2">
          <h3 className="text-white font-bold">FUNCIÓN</h3>
        </div>

        <FormSubfuncion
          defaultValues={data?.data}
          update={param}
          dataF={dataF}
        />
      </div>
    </>
  );
};

export default NuevaSubfuncion;
