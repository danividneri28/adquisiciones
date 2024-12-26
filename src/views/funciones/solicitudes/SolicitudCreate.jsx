import { Link } from "react-router-dom";
import Titulo from "../../../components/Titulo";
import Breadcrumb from "../../../components/Breadcrumb";
import Regresar from "../../../components/Regresar";

const SolicitudCreate = () => {
  return (
    <>
      <div>
        <Breadcrumb
          items={[
            { href: "/funciones", text: "FUNCIONES" },
            {
              href: "/funciones/solicitudes/listado",
              text: "REGISTROS DE SOLICITUDES DE REQUISICIÓN",
            },
            { text: "SOLICITUD DE REQUISICIÓN" },
          ]}
        />
        <Regresar enlace="/funciones/solicitudes/listado"/>
        <Titulo text={"SOLICITUD DE REQUISICIÓN"} className="mt-14" />
        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded flex justify-between p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            <p className="text-white font-bold uppercase text-xl">
              solicitud de requisición
            </p>
            <p className="text-white font-bold uppercase text-xl">
              área: dirección de administración
            </p>
          </div>
          <form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
          >
            <p className="text-white font-bold uppercase text-xl pb-3">
              Datos Generales
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  *Consolidada:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Fuente de financiamiento:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    Fuente de Financiamiento
                  </option>
                  <option value="Fuente de Financiamiento">
                    Fuente de Financiamiento
                  </option>
                  <option value="Fuente de Financiamiento">
                    Fuente de Financiamiento
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Seleccionar Capitulo:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros{" "}
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div className="">
                <label className="block text-sm font-medium text-white">
                  Fecha:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Seleccionar Subcapitulo:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros{" "}
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Clave programatica:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    2000 Materias y suministros
                  </option>
                  <option value="FuentedeFinanciamiento">
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Seleccionar partida generica:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros{" "}
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Numero de control:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros{" "}
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Seleccionar partida especifica:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros{" "}
                  </option>
                  <option value="FuentedeFinanciamiento">
                    {" "}
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div className="">
                <label className="block text-sm font-medium text-white">
                  Evento especial:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3"
                />
              </div>
            </div>
            <hr className="w-full mt-7" />
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-7 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Tipo:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Nombre del Bien o servicio:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-2 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    2000 Materias y suministros
                  </option>
                  <option value="FuentedeFinanciamiento">
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Cantidad:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Unidad de medida:
                </label>
                <select
                  name="entidadFederativa"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-2 sm:text-sm"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Fuente de Financiamiento">
                    1000 Servicios Personales
                  </option>
                  <option value="FuentedeFinanciamiento">
                    2000 Materias y suministros
                  </option>
                  <option value="FuentedeFinanciamiento">
                    2000 Materias y suministros
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Precio Unitario:
                </label>
                <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span class="bg-gray-100 text-gray-600 p-2">$</span>
                  <input
                    type="text"
                    class="flex-1 p-2 text-gray-800 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Monto con IVA:
                </label>
                <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span class="bg-gray-100 text-gray-600 p-2">$</span>
                  <input
                    type="text"
                    class="flex-1 p-2 text-gray-800 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <Link to="/configuracion/catalogos/presupuestales/objetoGasto/capitulo">
                  <button
                    type="button"
                    className="bg-[#6a1c32] text-white px-4 mt-6 text-xs py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                    aria-label="Regresar a listado de áreas"
                  >
                    Agregar mas conceptos
                  </button>
                </Link>
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  Comentarios:
                </label>
                <textarea
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-2"
                ></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="mt-4">
                <label className="block text-sm font-medium text-white">
                  Número de Orden de trabajo:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-white">
                  Número de Orden de servicio:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-white">
                  Lugar de entraga:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-white">
                  Numero de entrega:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
            </div>
            <p className=" my-4 text-lg font-bold text-white">Responsable</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="mt-4">
                <label className="block text-sm font-medium text-white">
                  Número de Orden de trabajo:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-white">
                  Autoriza:
                </label>
                <input
                  type="text"
                  name="descripcion"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-white mb-1">
                  Oficio de suficiencia presupuestal:
                </label>
                <input
                  class="block w-full text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                  id="file_input"
                  type="file"
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
            <div className="flex justify-center gap-4 mt-4">
              <Link to="">
                <button
                  type="button"
                  className="bg-[#bc965c] text-white px-4 py-2 rounded-md shadow hover:bg-[#bc965c] transition"
                  aria-label="Regresar a listado de áreas"
                >
                  Visualizar
                </button>
              </Link>

              <button
                type="submit"
                className=" text-white px-4 py-2 rounded-md shadow"
                style={{ backgroundColor: "#6a1c32" }}
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

export default SolicitudCreate;
