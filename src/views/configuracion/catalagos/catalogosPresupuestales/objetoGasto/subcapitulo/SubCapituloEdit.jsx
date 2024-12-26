import { Link, Navigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import { useQuery } from "@tanstack/react-query";
import { getSubcapitulo } from "../../../../../../api/configuracion/catalogos/presupuestales/objetoGasto/subcapitulos/ApiSubcapitulos";
import Spinner from "../../../../../../components/Spinner";
import EditSubcapitulosForm from "../../../../../../components/configuracion/subcapitulos/EditSubcapitulosForm";

const SubCapituloEdit = () => {
  const params = useParams();
  const IdSubcapitulo = params?.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getSubcapitulo", IdSubcapitulo],
    queryFn: async () => getSubcapitulo(IdSubcapitulo),
    retry: false
  });

  if (isLoading) return <Spinner/>;
  if (isError) return <Navigate to="/404" />;
  if(data)
  return (
    <>
      <div>
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
            {
              href: "/configuracion/catalogos/presupuestales",
              text: "CATALOGOS PRESUPUESTALES",
            },
            {
              href: "/configuracion/catalogos/presupuestales/objetoGasto",
              text: "CLASIFICACIÓN POR OBJETO DE GASTO",
            },
            {
              href: "/configuracion/catalogos/presupuestales/objetoGasto/subcapitulo",
              text: "REGISTRO DE SUBCAPÍTULOS",
            },
            { text: "SUBCAPÍTULO" },
          ]}
        />
        <Titulo text={"SUBCAPITULO"} className="mt-14" />
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
              subcapitulo
            </h3>
          </div>
          <div className="w-full">
            <EditSubcapitulosForm data={data} subcapituloId={IdSubcapitulo}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCapituloEdit;
