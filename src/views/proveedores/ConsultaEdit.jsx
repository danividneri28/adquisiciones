import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import Titulo from "../../components/Titulo";
import Select from 'react-select'
import PDF from "../../assets/images/funciones/proveedores/boton-pdf.png";
import Regresar from "../../components/Regresar";


const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const EditaProveedor = () => {
    const [isEditable, setIsEditable] = useState(false);

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleSaveClick = () => {
        // Aquí puedes implementar la lógica para guardar los datos.
        console.log("Datos guardados");
        setIsEditable(false);
    };

    return (
        <>
            <div>
                <Breadcrumb
                    items={[
                        { href: "/funciones", text: "FUNCIONES" },
                        { href: "/funciones/proveedores/create", text: "REGISTRO DE PROVEEDORES" },
                        { href: "/funciones/consultaproveedores/consulta-proveedor", text: "CONSULTA DE PROVEEDORES" },
                        { text: "REGISTRO DE PROVEEDOR" },
                    ]}
                />

            <Regresar enlace="/funciones/proveedores/create" />
                

                <Titulo text={'REGISTRO DE PROVEEDOR'} className='mt-14' />
                <div className="bg-gray-100  mt-8 rounded-lg">
                    <div className="rounded p-3 mb-1"
                        style={{ backgroundColor: "#956876" }}>
                        <h3 className="text-white font-bold uppercase text-xl">
                        </h3>
                        <p className="text-white font-bold uppercase text-xl">REGISTRO DE PROVEEDOR</p>
                    </div>
                    <form
                        className="w-full p-6 rounded-lg"
                        style={{ backgroundColor: "#956876" }}
                    >
                        <div className="grid grid-cols-1 gap-4">
                            {/* .-------------------- */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Tipo de proveedor:
                                    </label>
                                    <input
                                        type="text"
                                        name="nombreArea"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *RFC:
                                    </label>
                                    <input
                                        type="text"
                                        name="otroCampo"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>
                            </div>
                            {/* ------------- */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Nombre:
                                    </label>
                                    <input
                                        type="text"
                                        name="nombreArea"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Apellido paterno:
                                    </label>
                                    <input
                                        type="text"
                                        name="otroCampo"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Apellido materno
                                    </label>
                                    <input
                                        type="text"
                                        name="unCampoMas"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>
                            </div>

                            {/* -------------------- */}
                            <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-white">
                                        *Calle:
                                    </label>
                                    <input
                                        type="text"
                                        name="nombreArea"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Numero exterior:
                                    </label>
                                    <input
                                        type="text"
                                        name="otroCampo"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Numero interior:
                                    </label>
                                    <input
                                        type="text"
                                        name="unCampoMas"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        disabled={!isEditable}
                                    />
                                </div>
                            </div>
                            {/* -------------------------------- */}

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Colonia:
                                    </label>
                                    <input
                                        type="text"
                                        name="nombreArea"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Entidad Federativa:
                                    </label>
                                    <input
                                        type="text"
                                        name="otroCampo"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>
                            </div>

                            {/* --------------------- */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Nombre del municipio / alcaldía:
                                    </label>
                                    <input
                                        type="text"
                                        name="nombreArea"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Codigo Postal:
                                    </label>
                                    <input
                                        type="text"
                                        name="otroCampo"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>
                            </div>
                            {/* ----------------------------- */}

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Correo electrónico:
                                    </label>
                                    <input
                                        type="text"
                                        name="nombreArea"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Tipo de proveeduría:
                                    </label>
                                    <Select
                                        options={options}
                                        className="mt-1"
                                        placeholder="Seleccione una opción"
                                        disabled={!isEditable}
                                    />
                                </div>

                            </div>

                            {/* ------------------------------------------------ */}

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Pagina web:
                                    </label>
                                    <input
                                        type="text"
                                        name="nombreArea"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-white">
                                        *Teléfono:
                                    </label>
                                    <input
                                        type="text"
                                        name="otroCampo"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                        required
                                        disabled={!isEditable}
                                    />
                                </div>
                            </div>
                            {/* --------------------------------------------------------------- */}
                            <div className="grid grid-cols-1 gap-4">
                                <label className="block text-sm font-medium text-white">*Descripción</label>
                                <textarea id="w3review" name="w3review" rows="4" cols="50" disabled></textarea>
                            </div>
                            {/* --------------------------------------- */}


                        </div>
                        <p className="flex justify-end text-sm text-white">
                            *Campos Obligatorios
                        </p>
                    </form>


                    <div
                        className="w-full p-6 rounded-lg mt-8 mb-6"
                        style={{ backgroundColor: "#956876" }}>
                        <p className="text-white font-bold uppercase text-xl">DATOS BANCARIOS</p>
                        <hr className="w-full mt-7" style={{ marginBottom: "10px" }} />

                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-white">*Banco</label>
                                <input
                                    type="text"
                                    name="nombreArea"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                    required
                                    disabled={!isEditable}
                                />

                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-white">*Número de Cuenta</label>
                                <input
                                    type="text"
                                    name="nombreArea"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                    required
                                    disabled={!isEditable}
                                />

                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-white">*CLABE interbancaria</label>
                                <input
                                    type="text"
                                    name="nombreArea"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-3 sm:text-sm"
                                    required
                                    disabled={!isEditable}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 rounded-lg mt-8" style={{ backgroundColor: "#956876" }}>
                        <p className="text-white font-bold uppercase text-xl">ADJUNTAR DOCUMENTACIÓN</p>
                        <hr className="w-full mt-3" />

                        <div className="flex flex-wrap md:flex-nowrap gap-3 mt-3">
                            {/* input 1 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*ACTA CONSTITUTIVA (PDF):</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                            {/* input 2 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*PODER DEL REPRESENTANTE LEGAL (PDF):</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                            {/* input 3 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*IDENTIFICACION DEL REPRESENTANTE LEGAL (PDF):</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                            {/* input 4 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*CONSTANCIA DE SITUACIÓN FISCAL (PDF):</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                        </div>
                        <div className="flex flex-wrap md:flex-nowrap gap-3 mt-3">
                            {/* input 1 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*OPINION DEL CUMPLIMIENTO DE OBLIGACIONES (PDF)</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                            {/* input 2 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*COMPROBANTE DE DOMICILIO (PDF)</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                            {/* input 3 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*CURRICULUM ACTULIZADO (PDF):</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                            {/* input 4 */}
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-white">*DATOS BANCARIOS PARA PAGO VÍA TRANSFERENCIA (PDF)</label>
                                <input
                                    type="file"
                                    name="clave"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-ring-black p-2"
                                    style={{
                                        backgroundColor: "#ffffff", border: "solid 1px rgb(198, 198, 209)", borderColor: "solid 1px rgb(198, 198, 209)", borderRadius: "5px", width: "100%", height: "45px",
                                        fontSize: "inherith", textAlign: "center"
                                    }}
                                    disabled={!isEditable}
                                />
                            </div>

                            <div className="">

                            </div>
                        </div>
                        {!isEditable && (
                            <div className="flex items-center gap-4 mt-6 mb-5">
                                <div className="text-center flex flex-col items-start">
                                    <label className="block text-sm font-medium text-white">
                                        Ver registro
                                    </label>
                                </div>

                                <Link
                                    to="/funciones/proveedores/create-proveedor"
                                    className="inline-block"
                                >
                                    <img
                                        src={PDF}
                                        alt="Registro de Proveedor"
                                        className="w-20 object-contain"
                                    />
                                </Link>

                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-9 mt-6 mb-5">
                {!isEditable && (
                    <>
                        <button
                            type="button"
                            onClick={handleEditClick}
                            className="bg-[#6a1c32] text-white px-9 py-3 rounded-md shadow hover:bg-[#5a1528] transition"
                        >
                            Editar
                        </button>
                    </>
                )}
                {isEditable && (
                    <button
                        type="button"
                        onClick={handleSaveClick}
                        className="bg-green-600 text-white px-9 py-3 rounded-md shadow hover:bg-green-700 transition"
                    >
                        Guardar
                    </button>
                )}
            </div>
        </>
    );
};

export default EditaProveedor;
