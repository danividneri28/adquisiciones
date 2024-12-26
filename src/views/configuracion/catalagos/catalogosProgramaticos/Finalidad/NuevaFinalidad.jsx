import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Titulo from "../../../../../components/Titulo";
import Breadcrumb from "../../../../../components/Breadcrumb";
import FormFinalidad from "../../../../../components/configuracion/catalogosProgramaticos/FormFinalidad";
import { useQuery } from "@tanstack/react-query";
import { getFinalidad } from "../../../../../api/configuracion/ApiFinalidad";
import Spinner from "../../../../../components/Spinner";

const NuevaFinalidad = () => {
  const params = useParams();
  const param = !!params.id;

  const { data, isLoading, isError, fetchStatus } = useQuery({
    queryKey: ["getFinalidad", params.id],
    queryFn: getFinalidad,
    enabled: param,
    retry: false,
  });

  if (isLoading || fetchStatus == "fetching") return <Spinner />;
  if (isError) return <Navigate to="/404" />;
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
            href: `${param?'../':''}../../../catalogos/programaticos/finalidad`,
            text: "REGISTRO DE FINALIDADES",
          },
          { text: "FINALIDAD" },
        ]}
      />

      <Titulo text="FINALIDAD" className="mt-14" />

      <div className="flex flex-col w-full h-full mt-20 text-gray-700 rounded-lg bg-clip-border mb-20">
        <div className="bg-customRed2 rounded p-2">
          <h3 className="text-white font-bold">NUEVA FINALIDAD</h3>
        </div>

        <FormFinalidad defaultValues={data?.data} update={param} />
      </div>
    </>
  );
};

export default NuevaFinalidad;
