import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/Breadcrumb';
import Titulo from '../../../../components/Titulo';
import CustomTableHistorial from '../../../../components/CustomTableHistorial';
import Regresar from '../../../../components/Regresar';

const AdministrativoHistorialConsolidados = () => {
  const columns = React.useMemo(
      () => [
          {
          accessorKey: "Partida_especifica",
          label: "Partida específica",
          filterFn: "equalsString",
          },
          {
            accessorKey: "Periodo",
            label: "Periodo",
            filterFn: "equalsString",
          },
          {
            accessorKey: "Monto_acumulado",
            label: "Monto acumulado",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
          },
          {
            accessorKey: "Procedimiento_administrativo",
            label: "Procedimiento administrativo",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
          },
          {
            accessorKey: "Estado",
            label: "Estado",
            cell: (info) => info.getValue(),
            filterFn: "includesStringSensitive",
          },
          {
          accessorKey: "Acciones",
          label: "Acciones",
          cell: (info) => (
              <div>
                  <Link
                  to={`/funciones/procedimientos/listado/consolidados/ver`}
                  className="bg-customRed text-white px-6 py-1 rounded"
                  >
                  Ver
                  </Link>
              </div>
          ),
          filterFn: "includesStringSensitive",
      },
      ],
      []
  );
  const data = React.useMemo(
    () =>
    Array.from({ length: 10 }, (_, i) => ({
        id: i,
        Partida_especifica: `Papeleria - 2111`,
        Periodo: `1`,
        Monto_acumulado: 2500550,
        Procedimiento_administrativo: `Invitación Restringida`,
        Estado: (
            <span
                className="inline-flex items-center rounded-lg bg-green-600 px-2 py-1 text-sm font-bold
            text-white ring-1 ring-inset"
            >
                AUTORIZADO
            </span>
        ),
        Acciones: `Ver`,
    })),
    []
  );
  const totalAcumulado = React.useMemo(() =>
    data.reduce((acc, curr) => acc + parseFloat(curr.Monto_acumulado), 0),
    [data]
  );
  return (
    <>
      <div>
        <Breadcrumb
          items={[
              { href: "/funciones", text: "FUNCIONES" },
              { href: "/funciones/procedimientos/listado", text: "REGISTRO DE PROCEDIMIENTOS ADMINISTRATIVOS" },
              { href: "/funciones/procedimientos/listado/consolidados", text: "APARTADO DE CONSOLIDADOS" },
              { text: "HISTORIAL DE CONSOLIDADOS" },
          ]}
        />
        <Regresar enlace="/funciones/procedimientos/listado/consolidados"/>
        <Titulo
        text={"HISTORIAL DE CONSOLIDADOS"}
        className="text-lg mt-2 lg:mt-10"
        />
        <div className="flex flex-col w-full h-full mt-4 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20">
            <div className="bg-customRed rounded p-2">
                <h3 className="text-white font-bold">
                  HISTORIAL DE SOLICITUDES DE REQUISICIÓN - ETAPA 3
                </h3>
            </div>
            <CustomTableHistorial columns={columns} data={data} totalAcumulado={totalAcumulado}/>
        </div>
      </div>
    </>
  )
}

export default AdministrativoHistorialConsolidados