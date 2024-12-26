import React from "react";
import {Link} from "react-router-dom"
import Breadcrumb from "../../../components/Breadcrumb";
import Titulo from "../../../components/Titulo";
import CustomTable from "../../../components/CustomTable";
import imgConsolidados from "../../../assets/images/funciones/entregable/apartado_consolidados.png"
import imgHistorial from "../../../assets/images/funciones/entregable/historial.png"

export default function EntregableIndex() {
   const columns = React.useMemo(
		() => [
			{
				accessorKey: "numero_requisicion",
				label: "Número de requisición",
				filterFn: "includesStringSensitive",
			},
			{
				accessorKey: "fecha",
				label: "Fecha de requisición",
				cell: (info) => info.getValue(),
				filterFn: "includesStringSensitive",
			},
			{
				accessorKey: "numero_contrato",
				label: "Número de contrato",
				cell: (info) =>info.getValue(),
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
							? "bg-customBlueSky"
							: "bg-customPurple"
						}`}
					>
						{info.row.original.estado}
					</span>
				),
				filterFn: "equalsString",
			},
			{
				accessorKey: "Acciones",
				label: "Acciones",
				cell: (info) => (
				<div>
					<Link
						to={`/unciones/entregables/${info.row.original.id}`}
						className="bg-customRed text-white px-2 py-1 rounded"
					>
						Ver/Editar
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
				Array.from({ length: 5 }, (_, i) => ({
					numero_requisicion: `ORD/2024/0000${i}`,
					fecha: `0${i}/01/2024`,
					numero_contrato: `0000${i}`,
					area: `Nombre ${i}`,
					proveedor: `GOBTI S.A DE C.V. ${i}`,
					tipo: `Consumible ${i}`,
					monto: `$48${i}.00`,
					fecha_entrega: `1${i}/10/2024`,
					estado: `Proceso ${i}`,
					acciones: `Ver/Editar`
				})), []);
		
		return (
			<>
				<Breadcrumb 
					items={[
						{ href: "/funciones", text: "FUNCIONES"},
						{ text: "REGISTRO DE ENTREGABLES"},
					]}
				/>

				<Link to="/funciones" className="block w-24 h-10 pl-2 mt-5 font-bold text-xl text-black cursor-pointer">REGRESAR</Link>

				<Titulo text="REGISTRO DE ENTREGABLES" />
				<div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
					<div className="sm: text-center md:text-start" >
						<Link to="/funciones/entregable/consolidados" className=" inline-block mt-2" >
							<img 
								src={imgConsolidados} 
								alt="Apartado de Consolidados"
								className="w-52 object-contain"
							/>
						</Link>
					</div>
					<div className="bg-white rounded-lg border-gray-300 border-2 md:grid-cols-6 sm:grid-cols-1 mt-5 grid grid-cols-1 sm:w-full md:w-155 md:-ml-40"  >
						<div className="mt-3 mx-3">
							<label className="text-base text-customRed font-bold">
							Año
							</label>
							<select
								name="anio"
								className="mt-1 block w-full rounded-2xl border-2 border-gray-200 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
								required
							>
								<option value="" hidden>Seleccionar</option>
								<option value="1">2021</option>
								<option value="1">2022</option>
								<option value="1">2023</option>
								<option value="1">2024</option>
								<option value="1">2025</option>
							</select>
						</div>
						<div className="mt-3 mx-3">
							<label className="text-base text-customRed font-bold">
							Mes
							</label>
							<select
								name="mes"
								className="mt-1 block w-full rounded-2xl border-2 border-gray-200 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
								required
							>
								<option value="" hidden>Seleccionar</option>
								<option value="1">Enero</option>
								<option value="2">Febrero</option>
								<option value="3">Marzo</option>
								<option value="4">Abril</option>
								<option value="5">Mayo</option>
								<option value="6">Junio</option>
								<option value="7">Julio</option>
								<option value="8">Agosto</option>
								<option value="9">Septiembre</option>
								<option value="10">Octubre</option>
								<option value="11">Noviembre</option>
								<option value="12">Diciembre</option>
							</select>
						</div>
						<div className="mt-3 mx-3">
							<label className="text-base text-customRed font-bold">
							Área
							</label>
							<select
								name="area"
								className="mt-1 block w-full rounded-2xl border-2 border-gray-200 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
								required
							>
								<option value="" hidden>Seleccionar</option>
								<option value="1">Dirección General de Administración</option>
								<option value="2">Dirección General de Administración 2</option>
								<option value="3">Dirección General de Administración 3</option>
							</select>
						</div>
						<div className="mt-3 mx-3">
							<label className="text-base text-customRed font-bold">
							Tipo
							</label>
							<select
								name="tipo"
								className="mt-1 block w-full rounded-2xl border-2 border-gray-200 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
								required
							>
								<option value="" hidden>Seleccionar</option>
								<option value="1">Consumible</option>
								<option value="2">Servicio</option>
								<option value="3">Inventariable</option>
							</select>
						</div>
						<div className="mt-3 mx-3">
							<label className="text-base text-customRed font-bold">
							Estado
							</label>
							<select
								name="estado"
								className="mt-1 block w-full rounded-2xl border-2 border-gray-200 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
								required
							>
								<option value="" hidden>Seleccionar</option>
								<option value="1">Nuevo</option>
								<option value="2">Proceso</option>
							</select>
						</div>
						<div className="md:mt-10 md:mx-3 sm: my-3 sm: text-center">
							<button
								type="submit"
								className=" text-white px-4 py-2  rounded-md shadow bg-[#6a1c32] "
							>
								Buscar
							</button>
						</div>
					</div>
					<div className="text-center">
						<Link to="/funciones/entregable/historial" className=" inline-block mt-2" >
							<img 
								src={imgHistorial} 
								alt="Historial"
								className="w-52 object-contain"
							/>
						</Link>
					</div>
					
				</div>
			

				<div className="flex flex-col w-full h-full mt-20 text-gray-700 bg-white shadow-md rounded-lg bg-clip-border mb-20 ">
					<div className="bg-customRed rounded p-2">
						<h3 className="text-white font-bold">REGISTRO DE ENTREGABLES-ETAPA 5</h3>
					</div>
					<CustomTable columns={columns} data={data} />
				</div>
			</>
		)
		
}
