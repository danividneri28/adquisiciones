import { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import MensajeError from "../../MensajeError";
import { useCapitulo } from "../../../hooks/bienesServicios/useCapitulo";
import useSubCapitulo from "../../../hooks/bienesServicios/useSubCapitulo";
import AlertaError from "../../AlertError";
import usePartidaGeneral from "../../../hooks/bienesServicios/usePartidaGeneral";
import usePartidaEspecifica from "../../../hooks/bienesServicios/usePartidaEspecifica";
import InputField from "../../InputField";

export const FormBienesServicios = ({ register, errors, disabled, defaultValues }) => {
  const [selectedCapitulo, setSelectedCapitulo] = useState(defaultValues?.id_capitulo || null);
  const [selectedSubCapitulo, setSelectedSubCapitulo] = useState(defaultValues?.id_subcapitulo || null);
  const [selectedPartidaGeneral, setSelectedPartidaGeneral] = useState(defaultValues?.id_partida_g || null);

  const {
    data: capitulos,
    isLoading: isLoadingCapitulos,
    isError: isErrorCapitulos,
  } = useCapitulo();

  const {
    data: subCapitulos,
    isLoading: isLoadingSubCapitulos,
    isError: isErrorSubCapitulos,
  } = useSubCapitulo(selectedCapitulo);

  const {
    data: partidaGeneral,
    isLoading: isLoadingPartidaGeneral,
    isError: isErrorPartidaGeneral,
  } = usePartidaGeneral(selectedSubCapitulo);
  
  const {
    data: partidaEspecifica,
    isLoading: isLoadingPartidaEspecifica,
    isError: isErrorPartidaEspecifica,
  } = usePartidaEspecifica(selectedPartidaGeneral);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      AlertaError({
        title: "¡Campos Vacíos!",
        message: "Para continuar debe completar los campos obligatorios",
      });
    }
  }, [errors]);

  const handleChange = (e) => {
    const id_capitulo = e.target.value;
    setSelectedCapitulo(id_capitulo);
  };

  const handleChangeSubCapitulo = (e) => {
    const id_subcapitulo = e.target.value;
    setSelectedSubCapitulo(id_subcapitulo);
  };

  const handleChangeGenericas = (e) => {
    const id_partida_g = e.target.value;
    setSelectedPartidaGeneral(id_partida_g);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white">
            *Capitulo:
          </label>

          <select
            name="id_capitulo"
            className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${
              errors.id_capitulo ? "border-red-600" : "border-gray-300"
            }`}
            {...register("id_capitulo", {
              required: "Campo vacío",
            })}
            defaultValue={defaultValues?.id_capitulo || ""}
            required
            disabled={disabled}
            onChange={handleChange}
          >
            <option value="" >
              Selecciona un capitulo
            </option>
            {isLoadingCapitulos ? (
              <option value="" disabled>
                Cargando...
              </option>
            ) : isErrorCapitulos ? (
              <option value="" disabled>
                Error al cargar capítulos
              </option>
            ) : (
              capitulos?.map((capitulo) => (
                <option key={capitulo.id_capitulo} value={capitulo.id_capitulo}>
                  {capitulo.nombre_capitulo}
                </option>
              ))
            )}
          </select>

          {errors.id_capitulo && (
            <MensajeError>{errors.id_capitulo.message}</MensajeError>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            *Subcapitulo:
          </label>

          <select
            name="id_subcapitulo"
            className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${
              errors.id_subcapitulo ? "border-red-600" : "border-gray-300"
            }`}
            {...register("id_subcapitulo", {
              required: "Campo vacío",
            })}
            defaultValue={defaultValues?.id_subcapitulo || ""}
            disabled={disabled || !selectedCapitulo}
            onChange={handleChangeSubCapitulo}
          >
            <option value="" >
              Selecciona un subcapitulo
            </option>
            {isLoadingSubCapitulos ? (
              <option value="" disabled>
                Cargando...
              </option>
            ) : isErrorSubCapitulos ? (
              <option value="" disabled>
                Error al cargar subcapítulos
              </option>
            ) : (
              subCapitulos?.map((subcapitulo) => (
                <option
                  key={subcapitulo.id_subcapitulo}
                  value={subcapitulo.id_subcapitulo}
                >
                  {subcapitulo.nombre_subcapitulo}
                </option>
              ))
            )}
          </select>

          {errors.id_subcapitulo && (
            <MensajeError>{errors.id_subcapitulo.message}</MensajeError>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            *Partida Generica:
          </label>

          <select
            name="id_partida_g"
            className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${
              errors.id_partida_g ? "border-red-600" : "border-gray-300"
            }`}
            {...register("id_partida_g", {
              required: "Campo vacío",
            })}
            defaultValue={defaultValues?.id_partida_g || ""}
            disabled={disabled || !selectedSubCapitulo}
            onChange={handleChangeGenericas}
          >
            <option value="" >
              Selecciona una opción
            </option>
            {isLoadingPartidaGeneral ? (
              <option value="" disabled>
                Cargando...
              </option>
            ) : isErrorPartidaGeneral ? (
              <option value="" disabled>
                Error al cargar partidas
              </option>
            ) : (
              partidaGeneral?.map((generica) => (
                <option
                  key={generica.id_partida_g}
                  value={generica.id_partida_g}
                >
                  {generica.nombre_partida_g}
                </option>
              ))
            )}
          </select>

          {errors.id_partida_g && (
            <MensajeError>{errors.id_partida_g.message}</MensajeError>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            *Partida Especifica:
          </label>

          <select
            name="id_partida_e"
            className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${
              errors.id_partida_e ? "border-red-600" : "border-gray-300"
            }`}
            {...register("id_partida_e", {
              required: "Campo vacío",
            })}
            defaultValue={defaultValues?.id_partida_e || ""}
            disabled={disabled || !selectedPartidaGeneral}
          >
            <option value="" >
              Selecciona una opción
            </option>
            {isLoadingPartidaEspecifica ? (
              <option value="" disabled>
                Cargando...
              </option>
            ) : isErrorPartidaEspecifica ? (
              <option value="" disabled>
                Error al cargar partidas
              </option>
            ) : (
              partidaEspecifica?.map((especifica) => (
                <option
                  key={especifica.id_partida_e}
                  value={especifica.id_partida_e}
                >
                  {especifica.nombre_partida_e}
                </option>
              ))
            )}
          </select>

          {errors.id_partida_e && (
            <MensajeError>{errors.id_partida_e.message}</MensajeError>
          )}
        </div>
        <div>
          <InputField
            id="nombre_articulo"
            label="*Nombre del artículo"
            name="nombre_articulo"
            placeholder="Nombre del artículo"
            errors={errors}
            disabled={disabled}
            register={register}
            validationRules={{ required: "Campo vacío" }}
          />
        </div>
        <div>
          <label
            htmlFor="tipo_bien"
            className="block text-sm font-medium text-white"
          >
            *Tipo de Bien
          </label>
          <select
            name="tipo_bien"
            id="tipo_bien"
            className={`mt-1 block w-full rounded-md border-2 shadow-sm p-3 sm:text-sm ${
              errors.tipo_bien ? "border-red-600" : "border-gray-300"
            }`}
            required
            disabled={disabled}
            {...register("tipo_bien", {
              required: "Campo vacío",
            })}
          >
            <option value="" disabled>
              Seleccione
            </option>
            <option value="Consumible">Consumible</option>
            <option value="Inventariable">Inventariable</option>
            <option value="Servicio">Servicio</option>
          </select>
          {errors.tipo_bien && (
            <MensajeError>{errors.tipo_bien.message}</MensajeError>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            *Estado:
          </label>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="estado"
                value="Activo"
                className="text-blue-500 focus:ring-blue-500"
                defaultChecked
                disabled={disabled}
                {...register("estado")}
              />
              <span className="ml-2 text-white">Activo</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                id="estado"
                value="Inactivo"
                className="text-blue-500 focus:ring-blue-500"
                {...register("estado")}
                disabled={disabled}
              />
              <span className="ml-2 text-white">Inactivo</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
