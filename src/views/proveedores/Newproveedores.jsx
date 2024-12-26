// import { Link } from "react-router-dom";
import Titulo from "../../components/Titulo";
import Breadcrumb from "../../components/Breadcrumb";

const ProveedoresNew = () => {
  return (
    <>
      <div>
        <Breadcrumb
          items={
            [
              // { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
              // { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
              // { href: "/configuracion/catalogos/presupuestales", text: "CATALOGOS PRESUPUESTALES" },
              // { href: "/configuracion/catalogos/presupuestales/objetoGasto", text: "CLASIFICACIÓN POR OBJETO DE GASTO" },
              // { href: "/configuracion/catalogos/presupuestales/objetoGasto/capitulo", text: "REGISTROS DE CAPITULOS" },
              // { text: "CAPITULO" },
            ]
          }
        />

    

        <Titulo text={"REGISTRO DE PROVEEDOR"} className="mt-14" />


        <a
        href="/funciones/proveedores/create"
        className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer"
        >
        REGRESAR
        </a>


        <div className="bg-gray-100  mt-8 rounded-lg">
          <div
            className="rounded flex justify-between p-3 mb-1"
            style={{ backgroundColor: "#956876" }}
          >
            
            <p className="text-white font-bold uppercase text-xl">
            REGISTRO DE PROVEEDORES
            </p>
            {/* <p className="text-white font-bold uppercase text-xl">
              área: dirección de administración
            </p> */}
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
                  *Tipo de Proveedor:
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
            </div>
            <hr className="w-full mt-7" />
          </form>

          <div className="w-full p-6 rounded-lg mt-8" style={{ backgroundColor: "#956876" }}>
            <p className="text-white font-bold uppercase text-xl">DATOS BANCARIOS</p>
            <hr className="w-full mt-3" />

            <div className="flex flex-wrap md:flex-nowrap gap-4 mt-4">
              {/* input 1 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*Banco:</label>
                <input
                  type="text"
                  name="banco"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>

              {/* input 2 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*Número de Cuenta:</label>
                <input
                  type="text"
                  name="cuenta"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>

             {/* input 3 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*CLABE interbancaria:</label>
                <input
                  type="text"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                />
              </div>
            </div>
          </div>

          <div className="w-full p-6 rounded-lg mt-8" style={{ backgroundColor: "#956876" }}>
            <p className="text-white font-bold uppercase text-xl">ADJUNTAR DOCUMENTACIÓN</p>
            <hr className="w-full mt-3" />

            <div className="flex flex-wrap md:flex-nowrap gap-3 mt-3">
              {/* input 1 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*ACTA CONSTITUTIVA (PDF):</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>

              {/* input 2 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*PODER DEL REPRESENTANTE LEGAL (PDF):</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>

             {/* input 3 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*IDENTIFICACION DEL REPRESENTANTE LEGAL (PDF):</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>

             {/* input 4 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*CONSTANCIA DE SITUACIÓN FISCAL (PDF):</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>
              
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-3 mt-3">
              {/* input 1 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*OPINION DEL CUMPLIMIENTO DE OBLIGACIONES (PDF)</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>

              {/* input 2 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*COMPROBANTE DE DOMICILIO (PDF)</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>

             {/* input 3 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*CURRICULUM ACTULIZADO (PDF):</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>

             {/* input 4 */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white">*DATOS BANCARIOS PARA PAGO VÍA TRANSFERENCIA (PDF)</label>
                <input
                  type="file"
                  name="clave"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                  style={{ backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                    fontSize: "inherith", textAlign: "center"}}
                  />
              </div>
            </div>           
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
          className="text-white px-9 py-4 rounded" 
          href="#" 
          data-discover="true" 
          style={{ backgroundColor: "rgb(188, 150, 92)" }}
          >
        Guardar
        </a>

        </div>
     
      </div>
    </>
  );
};

export default ProveedoresNew;


