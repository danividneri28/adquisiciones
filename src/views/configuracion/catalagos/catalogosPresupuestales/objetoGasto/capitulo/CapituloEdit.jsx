import { Link, Navigate, useParams } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import { useQuery } from "@tanstack/react-query";
import { getCapitulo } from "../../../../../../api/configuracion/capitulos/ApiCapitulos";
import Spinner from "../../../../../../components/Spinner";
import EditCapitulosForm from "../../../../../../components/configuracion/capitulos/EditCapitulosForm";

const CapituloEdit = () => {
  const params = useParams();
  const idCapitulo = params?.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCapitulo", idCapitulo],
    queryFn: () => getCapitulo(idCapitulo),
    retry: false,
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
            { href: "/configuracion/catalogos/presupuestales", text: "CATALOGOS PRESUPUESTALES" },
            { href: "/configuracion/catalogos/presupuestales/objetoGasto", text: "CLASIFICACIÓN POR OBJETO DE GASTO" },
            { href: "/configuracion/catalogos/presupuestales/objetoGasto/capitulo", text: "REGISTROS DE CAPITULOS" },
            { text: "CAPITULO" },
          ]}
        />
        <Titulo text={'EDITAR CAPITULO'} className='mt-14'/>
        <div className="bg-gray-100  mt-8 rounded-lg">
        <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
              Editar capitulo
            </h3>
          </div>
          <EditCapitulosForm data={data} capituloId={idCapitulo} />
        </div>
      </div>
    </>
  );
};

export default CapituloEdit;
