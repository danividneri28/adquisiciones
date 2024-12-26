import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import axios from "../../../../../../api/configuracion/ApiPartidasEspecificas";  
import AlertSuccess from "../../../../../../components/AlertSuccess";
import { useForm } from "react-hook-form"; 

const PartidaEcreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Aquí se usa useForm para manejar el formulario
  const [showSuccess, setShowSuccess] = useState(false);
  const [partidasGenericas, setPartidasGenericas] = useState([]); // Renombrado a 'partidasGenericas' para mayor claridad
  const [loading, setLoading] = useState(false); // Para manejar la carga
  const [error, setError] = useState(null); // Para mostrar errores

  useEffect(() => {
    // Solicitud para obtener las partidas genéricas
    axios
      .get("/configuracion/partidas_especificas")  
      .then((response) => {
        setPartidasGenericas(response.data.partidas_genericas || []); 
      })
      .catch((error) => {
        console.error("Error al obtener las partidas genéricas:", error);
        setError("Error al cargar las partidas genéricas. Intenta de nuevo.");
      });
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer); 
    }
  }, [showSuccess]);

  const onSubmit = async (data) => {
    setLoading(true); 
    setError(null); 
    try {
      await axios.post("/configuracion/partidas_especificas", data);
      setShowSuccess(true);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(`Error: ${error.response.data.message}`);
      } else {
        setError("Error al crear la partida. Por favor, inténtalo de nuevo.");
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      {showSuccess && (
        <AlertSuccess route="/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica" />
      )}
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
              href: "/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica",
              text: "REGISTROS DE PARTIDAS ESPECÍFICAS",
            },
            { text: "PARTIDA ESPECÍFICA" },
          ]}
        />
        <Titulo text={"PARTIDA ESPECÍFICA"} className="mt-14" />
        <div className="bg-gray-100 mt-8 rounded-lg">
          <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }}>
            <h3 className="text-white font-bold uppercase text-xl">
              Nueva Partida Específica
            </h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)} 
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Nombre de la partida específica:
                </label>
                <input
                  type="text"
                  {...register('nombre_partida_e', { required: true, maxLength: 30 })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                />
                {errors.nombre_partida_e && <span className="text-red-500">Este campo es obligatorio</span>}
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Código de la partida específica:
                </label>
                <input
                  type="text"
                  {...register('codigo_partida_e', { required: true, maxLength: 4 })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                />
                {errors.codigo_partida_e && <span className="text-red-500">Este campo es obligatorio</span>}
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Descripción:
                </label>
                <textarea
                  {...register('desc_partida_e', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3"
                />
                {errors.desc_partida_e && <span className="text-red-500">Este campo es obligatorio</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  *Partida genérica:
                </label>
                <select
                  {...register('id_partida_g', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                >
                  <option value="" hidden>Selecciona una partida genérica</option>
                  {partidasGenericas.length === 0 ? (
                    <option value="">No hay partidas disponibles</option>
                  ) : (
                    partidasGenericas.map((partida) => (
                      <option key={partida.id_partida_g} value={partida.id_partida_g}>
                        {partida.nombre_partida_g}
                      </option>
                    ))
                  )}
                </select>
                {errors.id_partida_g && <span className="text-red-500">Este campo es obligatorio</span>}
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-white">
                  *Estado:
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register('estado', { required: true })}
                    value="Activo"
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Activo</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    {...register('estado', { required: true })}
                    value="Inactivo"
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Inactivo</span>
                </label>
              </div>
            </div>
            <p className="flex justify-end text-sm text-white">*Campos Obligatorios</p>
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica">
                <button
                  type="button"
                  className="bg-[#6a1c32] text-white px-4 py-2 rounded-md shadow hover:bg-[#5a1528] transition"
                  aria-label="Regresar a listado de partidas"
                >
                  Regresar
                </button>
              </Link>
              <button
                type="submit"
                className="text-white px-4 py-2 rounded-md shadow hover:bg-[#a37f50] transition"
                style={{ backgroundColor: "#bc965c" }}
                disabled={loading} 
              >
                {loading ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartidaEcreate;
