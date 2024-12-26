import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../components/Breadcrumb";
import Titulo from "../../../../../components/Titulo";

const BienesServicisoCreate = () => {
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
              href: "/configuracion/catalogos/presupuestales/BienesServicios",
              text: "REGISTROS DE BIENES Y SERVICIOS",
            },
            { text: "BIENES Y SERVICIOS" },
          ]}
        />

        <Titulo text={"BIENES Y SERVICIOS"} className="mt-14" />
        
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <h3 className="text-white font-bold uppercase text-xl">
              BIENES Y SERVICIOS
            </h3>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  *Capitulo:
                </label>

                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="" hidden>
                    Selecciona un capitulo
                  </option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Subcapitulo:
                </label>

                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="" hidden>
                    Selecciona un subcapitulo
                  </option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Partida Generica:
                </label>

                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="" hidden>
                    Selecciona una partida generica
                  </option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Partida Específica:
                </label>

                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="" hidden>
                    Selecciona una partida específica
                  </option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Nombre del articulo:
                </label>

                <input
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Tipo de Bien:
                </label>

                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="" hidden>
                    Selecciona un Bien
                  </option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Stock minimo:
                </label>

                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                >
                  <option value="" hidden>
                    Selecciona stock
                  </option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                </select>
              </div>
            </div>
            <p className="flex justify-end text-sm text-white">
              *Campos Obligatorios
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/BienesServicios">
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

export default BienesServicisoCreate;
