import { Link } from "react-router-dom";
import Titulo from "../../../components/Titulo";
import Breadcrumb from "../../../components/Breadcrumb";
import Regresar from "../../../components/Regresar";

const RequisicionInformativo = () => {
  return (
    <>
      <div>
        <Breadcrumb
          items={[
            { href: "/funciones", text: "FUNCIONES" },
            {href: "/funciones/concentrado/listado", text: "CONCENTRADO DE SOLICITUDES DE REQUISICIÓN"},
            {href:"/funciones/solicitudes/historial", text: "HISTORIAL DE SOLICITUDES DE REQUISICIÓN"},
            // {href:"/funciones/consolidado/listado/registros", text: "REGISTRO DE CONSOLIDADOS"},
            {text: "REQUISICIÓN"},
          ]}
        />
        <Regresar enlace="/funciones/solicitudes/listado"/>
        <Titulo text={"REQUISICIÓN"} className="mt-14 mb-4" />
        <div className="bg-white  md:px-0 flex flex-col">
          <div
            className="rounded flex  p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <p className="text-white font-bold uppercase text-xl">
              DATOS GENERALES DE LA REQUISICION
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-3 md:my-4">
            <p className="text-customRed px-2 text-sm font-bold">
              No. de Requisición:
              <span className="text-black font-normal"> 0026/2023</span>
            </p>
            <p className="text-customRed px-2 text-sm font-bold">
              Fecha de Requisición:
              <span className="text-black font-normal"> 15/12/2023</span>
            </p>
            <p className="text-customRed px-2 text-sm font-bold">
              Clave Programatica:
              <span className="text-black font-normal">
                A00 A00 01 08 05 01 03 11 01 01 E
              </span>
            </p>
            <div className="hidden lg:flex flex-col gap-4 mx-auto">
              <div className="flex gap-4">
                <p className="text-customRed font-bold text-sm">
                  Requisición de Compra:{" "}
                </p>
                <button className="bg-customRed text-white px-4 rounded-lg lg:text-base">
                  Descargar
                </button>
              </div>
              <div className="flex gap-4">
                <p className="text-customRed font-bold text-sm">
                  Requisición de Compra:{" "}
                </p>
                <button className="bg-customRed text-white px-4 rounded-lg lg:text-base">
                  Descargar
                </button>
              </div>
              <div className="flex gap-4">
                <p className="text-customRed font-bold text-sm">
                  Oficio de autorización:{" "}
                </p>
                <button className="bg-customRed text-white px-4 rounded-lg lg:text-base">
                  Descargar
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 md:my-4">
            <p className="text-customRed px-2 text-sm font-bold">
              Área:
              <span className="text-black font-normal">
                {" "}
                Subdirección de Tecnologías
              </span>
            </p>
            <p className="text-customRed px-2 text-sm font-bold">
              Partida Especifica:
              <span className="text-black font-normal">
                {" "}
                5151-1 Equipo de cómputo y tecnologías de la información
              </span>
            </p>
            <p className="text-customRed px-2 text-sm font-bold">
              Consolidado por el área:
              <span className="text-black font-normal">Sí</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:my-4">
            <p className="text-customRed px-2 text-sm font-bold">
              Tipo:
              <span className="text-black font-normal"> Consumible</span>
            </p>
            <p className="text-customRed px-2 text-sm font-bold">
              Monto:
              <span className="text-black font-normal">$ 35,250.00</span>
            </p>
            <p className="text-customRed px-2 text-sm font-bold">
              Fuente de financiamiento:
              <span className="text-black font-normal">
                Financiamiento Interno
              </span>
            </p>
          </div>
          <div className="md:flex lg:hidden md:flex-col md:gap-4 lg:gap-32 p-2 my-4">
            <div className="flex gap-4 my-5 md:my-0">
              <p className="text-customRed font-bold text-sm">
                Requisición de Compra:{" "}
              </p>
              <button className="bg-customRed text-white px-4 rounded-lg lg:text-base font-bold">
                Ver PDF
              </button>
            </div>
            <div className="flex gap-4">
              <p className="text-customRed font-bold text-sm">
                Requisición de Compra:{" "}
              </p>
              <button className="bg-customRed text-white px-4 rounded-lg lg:text-base font-bold">
                Ver PDF
              </button>
            </div>
            <div className="flex gap-4 my-4">
              <p className="text-customRed font-bold text-sm">
                Oficio de autorización:{" "}
              </p>
              <button className="bg-customRed text-white px-4 rounded-lg lg:text-base font-bold">
                Ver PDF
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded flex  p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <p className="text-white font-bold uppercase text-xl">
              DATOS DE REGISTRO
            </p>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
          >
            <div className="grid grid-cols-1  md:grid-cols-1 gap-4">
              <div className="">
                <label className="block text-sm font-medium text-white">
                  Compra consolidada:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3"
                />
              </div>
              <div className="">
                <label className="block text-sm font-medium text-white">
                  Tipo de compra:
                </label>
                <textarea
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequisicionInformativo;
