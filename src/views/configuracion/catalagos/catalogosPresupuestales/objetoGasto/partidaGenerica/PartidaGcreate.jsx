import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import axios from "../../../../../../api/configuracion/ApiPartidaGenerica";
import AlertSuccess from "../../../../../../components/AlertSuccess";
import { useForm } from "react-hook-form"; 

const PartidaGcreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Se usa useForm para manejar validaciones
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    id_subcapitulo: "",
    nombre_partida_g: "",
    codigo_partida_g: "",
    desc_partida_g: "",
    estado: "Activo", // Valor por defecto para estado
  });
  const [subcapitulos, setSubcapitulos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get("/configuracion/partidas_genericas")
      .then((response) => {
        setSubcapitulos(response.data.subcapitulos || []);
      })
      .catch((error) => {
        console.error("Error al obtener los subcapítulos:", error);
        setError("Error al cargar los subcapítulos. Intenta de nuevo.");
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
    try {
      const response = await axios.post("/configuracion/partida-generica", data);
      console.log("Respuesta de la API:", response);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error al crear la partida:", error);
      setError("Error al crear la partida. Revisa los datos ingresados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showSuccess && (
        <AlertSuccess route="/configuracion/catalogos/presupuestales/objetoGasto/partidaGenerica" />
      )}
      <div>
        <Breadcrumb
          items={[
            { href: "/configuracion/menu", text: "CONFIGURACIÓN" },
            { href: "/configuracion/catalogos/menu", text: "CATALOGOS" },
            { href: "/configuracion/catalogos/presupuestales", text: "CATALOGOS PRESUPUESTALES" },
            { href: "/configuracion/catalogos/presupuestales/objetoGasto", text: "CLASIFICACIÓN POR OBJETO DE GASTO" },
            { href: "/configuracion/catalogos/presupuestales/objetoGasto/partidaGenerica", text: "REGISTROS DE PARTIDAS GENÉRICAS" },
            { text: "PARTIDA GENÉRICA" },
          ]}
        />
        <Titulo text={"PARTIDA GENERICA"} className="mt-14" />
        <div className="bg-gray-100 mt-8 rounded-lg">
          <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }}>
            <h3 className="text-white font-bold uppercase text-xl">Nueva Partida Genérica</h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)} // Usamos handleSubmit de react-hook-form
            className="w-full p-6 rounded-lg"
            style={{ backgroundColor: "#956876" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Nombre de la partida genérica:
                </label>
                <input
                  type="text"
                  {...register("nombre_partida_g", { required: "Este campo es obligatorio", maxLength: { value: 30, message: "Máximo 30 caracteres" } })}
                  name="nombre_partida_g"
                  value={formData.nombre_partida_g}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                />
                {errors.nombre_partida_g && <span className="text-red-500">{errors.nombre_partida_g.message}</span>}
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Código de la partida genérica:
                </label>
                <input
                  type="text"
                  {...register("codigo_partida_g", { required: "Este campo es obligatorio", maxLength: { value: 4, message: "Máximo 4 caracteres" } })}
                  name="codigo_partida_g"
                  value={formData.codigo_partida_g}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                />
                {errors.codigo_partida_g && <span className="text-red-500">{errors.codigo_partida_g.message}</span>}
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">
                  *Descripción:
                </label>
                <textarea
                  {...register("desc_partida_g", { required: "Este campo es obligatorio" })}
                  name="desc_partida_g"
                  value={formData.desc_partida_g}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3"
                />
                {errors.desc_partida_g && <span className="text-red-500">{errors.desc_partida_g.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  *Subcapítulo:
                </label>
                <select
                  name="id_subcapitulo"
                  {...register("id_subcapitulo", { required: "Este campo es obligatorio" })}
                  value={formData.id_subcapitulo}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                >
                  <option value="" hidden>
                    Selecciona un subcapítulo
                  </option>
                  {subcapitulos.length === 0 ? (
                    <option value="">No hay capítulos disponibles</option>
                  ) : (
                    subcapitulos.map((subcapitulo) => (
                      <option key={subcapitulo.id_subcapitulo} value={subcapitulo.id_subcapitulo}>
                        {subcapitulo.nombre_subcapitulo}
                      </option>
                    ))
                  )}
                </select>
                {errors.id_subcapitulo && <span className="text-red-500">{errors.id_subcapitulo.message}</span>}
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium text-white">*Estado:</label>
                <div className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register("estado", { required: "Este campo es obligatorio" })}
                    name="estado"
                    value="Activo"
                    checked={formData.estado === "Activo"}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Activo</span>
                </div>
                <div className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    {...register("estado", { required: "Este campo es obligatorio" })}
                    name="estado"
                    value="Inactivo"
                    checked={formData.estado === "Inactivo"}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Inactivo</span>
                </div>
                {errors.estado && <span className="text-red-500">{errors.estado.message}</span>}
              </div>
            </div>

            <p className="flex justify-end text-sm text-white">*Campos Obligatorios</p>
            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/objetoGasto/partidaGenerica">
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
                className="text-white px-4 py-2 rounded-md shadow"
                style={{ backgroundColor: "#bc965c" }}
                disabled={loading}
              >
                {loading ? "Guardando..." : "Guardar"}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default PartidaGcreate;
