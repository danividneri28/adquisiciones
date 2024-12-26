import { useQuery } from "@tanstack/react-query";
import { SubCapitulos } from "../../api/configuracion/ApiBienesServicios";

const useSubCapitulo = (id_capitulo) => {
  return useQuery({
    queryKey: ["SubCapitulos", id_capitulo],
    queryFn: () => SubCapitulos(id_capitulo),
    enabled: !!id_capitulo, // Solo ejecuta la query si hay un id_capitulo
  });
};

export default useSubCapitulo;
