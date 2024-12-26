import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";

const CapituloEdit = () => {
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
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Nombre del capítulo:
                </label>
                <input
                  type="text"
                  name="nombreArea"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                />
              </div>
               <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Codigo del capítulo:
                </label>
                <input
                  type="text"
                  name="claveArea"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                />
              </div>

               <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Descripción:
                </label>
                <textarea
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3"
                  required
                />
              </div>
              <div className="mt-3">
              <label className="block text-sm font-medium text-white">
                  *Estado:
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="estado"
                    value="activo"
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Activo</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="estado"
                    value="inactivo"
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Inactivo</span>
                </label>
              </div>
            </div>
            <p className="flex justify-end text-sm text-white">
              *Campos Obligatorios
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/objetoGasto/capitulo">
                <button
                  type="button"
                  className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                  aria-label="Regresar a listado de áreas"
                >
                  Regresar
                </button>
              </Link>

              <button
                type="submit"
                className=" text-white px-4 py-2 rounded-md shadow"
                style={{ backgroundColor: "#bc965c" }}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CapituloEdit;
