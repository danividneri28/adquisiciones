import React from "react";
import { Link } from "react-router-dom";

export default function HistorialEntregable() {
    const columns = React.useMemo(
        () => [
            {
                accessorKey: "numero_requisicion",
                label: "Número de requisición",
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "fecha_requisicion",
                label: "Fecha de requisición",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "area",
                label: "Área",
                cell: (info) => info.getValue(),
                filterFn: "equalsString",
            },
            {
                accessorKey: "proveedor",
                label: "Proveedor",
                cell: (info) => info.getValue(),
                filterFn: "equalsString",
            },
            {
                accessorKey: "tipo",
                label: "Tipo",
                cell: (info) => info.getValue(),
                filterFn: "equalsString",
            },
            {
                accessorKey: "monto",
                label: "Monto con IVA",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "fecha_entrega",
                label: "Fecha de entrega",
                cell: (info) => info.getValue(),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "estado",
                label: "Estado",
                cell: (info) => (
                    <span
                        className={`px-1 py-1 rounded text-white text-xs ${
                            info.row.original.estado === "Proceso 0"
                            ? "bg-customGreen"
                            : "bg-gray-400"
                        }`}
                    >
                    {info.row.original.Estado}
                    </span>
                ),
                filterFn: "includesStringSensitive",
            },
            {
                accessorKey: "Acciones",
                label: "Acciones",
                cell: (info) => (
                    <div>
                        <Link
                            to={``}
                            className="bg-customRed text-white px-2 py-1 rounded"
                        >
                            Ver
                        </Link>
                    </div>
                ),
                filterFn: "includesStringSensitive"
            },
        ],
        []
    );

    const data = React.useMemo(
        () =>
            Array.from({ length: 5}, (_, i) => {

                return {
                    id: i,
                    numero_requisicion: `ORD/2024/000${i}`,
                    fecha_requisicion: `0${i}/01/2024`,
                    area: `Nombre ${i}`,
                    proveedor: `GOBTI S.A. DE C.V. ${i}`,
                    tipo: `Comsumible ${i}`,
                    monto: `$48${i}.00`,
                    fecha_entrega: `1${i}/10/2024`,
                    estado: `Proceso ${i}`,
                    acciones: `Ver/Editar`
                }
            })
    )
}