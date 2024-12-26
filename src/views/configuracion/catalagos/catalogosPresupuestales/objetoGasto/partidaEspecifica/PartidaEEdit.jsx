import { Link } from "react-router-dom";
import Breadcrumb from "../../../../../../components/Breadcrumb";
import Titulo from "../../../../../../components/Titulo";
import axios from "../../../../../../api/configuracion/ApiPartidasEspecificas";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AlertSuccess from '../../../../../../components/AlertSuccess';

const PartidaEEdit = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    id_partida_g: "",
    nombre_partida_e: "",
    codigo_partida_e: "",
    desc_partida_e: "",
    estado: "",
  });
  const [partidasGenericas, setPartidasGenericas] = useState([]); // Renombrado a 'partidasGenericas' para mayor claridad
  const [error, setError] = useState(""); // Para mostrar errores

  // Cargar los datos de la partida al montar el componente
  useEffect(() => {
    const fetchPartida = async () => {
      try {
        const { data } = await axios.get(`/configuracion/partidas_especificas/${id}`);
        setFormData(data.data);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los datos de la partida.");
      }
    };
    fetchPartida();
  }, [id]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Cargar las partidas genéricas
  useEffect(() => {
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

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/configuracion/partidas_especificas/${id}`, formData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica");
      }, 3000);
    } catch (error) {
      console.error(error);
      setError("Error al actualizar la partida. Revisa los datos ingresados.");
    }
  };

  return (
    <>
      {showSuccess && <AlertSuccess route='/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica' />}
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
        <Titulo text={"EDITAR PARTIDA ESPECIFICA"} className="mt-14" />
        <div className="bg-gray-100 mt-8 rounded-lg">
          <div className="rounded p-3 mb-1" style={{ backgroundColor: "#956876" }}>
            <h3 className="text-white font-bold uppercase text-xl">Editar partida Especifica</h3>
          </div>
          <form onSubmit={handleSubmit} className="w-full p-6 rounded-lg" style={{ backgroundColor: "#956876" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">*Nombre de la partida específica:</label>
                <input
                  type="text"
                  name="nombre_partida_e"
                  value={formData.nombre_partida_e}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">*Código de la partida específica:</label>
                <input
                  type="text"
                  name="codigo_partida_e"
                  value={formData.codigo_partida_e}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium text-white">*Descripción:</label>
                <textarea
                  type="text"
                  name="desc_partida_e"
                  value={formData.desc_partida_e}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">*Subcapitulo:</label>
                <select
                  name="id_partida_g"
                  value={formData.id_partida_g}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black p-3 sm:text-sm"
                  required
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
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-white">*Estado:</label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="estado"
                    value="Activo"
                    checked={formData.estado === "Activo"}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Activo</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="estado"
                    value="Inactivo"
                    checked={formData.estado === "Inactivo"}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-white">Inactivo</span>
                </label>
              </div>
            </div>
            <p className="flex justify-end text-sm text-white">*Campos Obligatorios</p>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <div className="flex justify-end gap-4 mt-4">
              <Link to="/configuracion/catalogos/presupuestales/objetoGasto/partidaEspecifica">
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
              >
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartidaEEdit;
