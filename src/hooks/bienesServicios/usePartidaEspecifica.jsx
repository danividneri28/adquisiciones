import { useQuery } from "@tanstack/react-query";
import { especifica } from "../../api/configuracion/ApiBienesServicios";

const usePartidaEspecifica = (id_partida_g) => {
  return useQuery({
    queryKey: ["especifica", id_partida_g],
    queryFn: () => especifica(id_partida_g),
    enabled: !!id_partida_g, // Solo ejecuta la query si hay un id_capitulo
  });
};

export default usePartidaEspecifica;
