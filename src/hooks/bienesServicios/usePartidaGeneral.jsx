import { useQuery } from "@tanstack/react-query";
import { generica } from "../../api/configuracion/ApiBienesServicios";

const usePartidaGeneral = (id_subcapitulo) => {
  return useQuery({
    queryKey: ["generica", id_subcapitulo],
    queryFn: () => generica(id_subcapitulo),
    enabled: !!id_subcapitulo, // Solo ejecuta la query si hay un id_capitulo
  });
};

export default usePartidaGeneral;
