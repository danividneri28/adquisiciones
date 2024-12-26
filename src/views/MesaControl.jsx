import React from "react";
import Breadcrumb from '../components/Breadcrumb'   
import Titulo from '../components/Titulo'
import GraficaRequisiciones from './graficas/GraficaRequisiciones';
import GraficaContratos from './graficas/GraficaContratos';
import GraficaEntregas from './graficas/GraficaEntregas'
import GraficaProcedimiento from './graficas/GraficaProcedimiento'



export default function Home()  {
    return(
         <>
            <Breadcrumb
                items={[
                    { text: "MESA DE CONTROL" },
                ]}
            />

            <Titulo text='MESA DE CONTROL 2024' className='mt-14'/>
           
            <div className="mt-8 rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 justify-center">
               <div>
                  <div className="rounded p-1 " style={{ backgroundColor: "#6A1C32" }}>
                     <h3 className="text-white font-bold text-lg text-center ">Requisiciones vs Contrataciones</h3>
                  </div>
                  <div className="bg-white pt-3">
                     <div style={{height: '280px'}} >
                        <GraficaRequisiciones />
                     </div>
                     <h1 className="ml-3 p-3 text-sm">Total de Requisiciones: 200 </h1>
                  </div>
               </div>
               <div>
                  <div className="rounded p-1 " style={{ backgroundColor: "#6A1C32" }}>
                     <h3 className="text-white font-bold text-lg text-center">Contratos vs Entregables</h3>
                  </div>
                  <div className="bg-white pt-3">
                     <div style={{height: '280px'}} >
                        <GraficaContratos />
                     </div>
                     <h1 className="ml-3 p-3 text-sm">Total de Contratos: 150 </h1>
                  </div>
               </div>
               <div>
                  <div className="rounded p-1" style={{ backgroundColor: "#6A1C32" }}>
                     <h3 className="text-white font-bold text-lg text-center">Contratos por tipo y procedimiento</h3>
                  </div>
                  <div className="bg-white">
                     <br />
                     <h1 className="font-bold text-center text-xl mb-2">Total de Contratos: 150</h1>
                     <div className="m-5 overflow-auto mb-5">
                         <table className="text-center text-xs font-bold border-solid">
                           <thead style={{ backgroundColor: "#6F1C46"}} className="text-white">
                              <tr>
                                 <th className="border-l-2" style={{borderColor: "#6F1C46"}}>Tipo de procedimiento</th>
                                 <th className="border-x-2" style={{borderColor: "#FFFFF"}}>Servicios</th>
                                 <th className="border-x-2" style={{borderColor: "#FFFFF"}}>Porcentajes de procedimiento</th>
                                 <th className="border-x-2" style={{borderColor: "#FFFFF"}}>Materiales (Bienes y servicios)</th>
                                 <th className="border-r-2" style={{borderColor: "#6F1C46"}}>Porcentajes de procedimiento</th>
                              </tr>
                           </thead>
                           <tbody >
                              <tr className=" h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Invitación Restringida</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>80</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>40%</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>40</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>30%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Adjudicación Directa</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>10</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>15%</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>10</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>10%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Licitación Pública</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>10</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>15%</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>0</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>0%</td>
                              </tr>
                           </tbody>
                           <tfoot style={{ backgroundColor: "#6F1C46", borderColor: "#6F1C46" }} className="text-white h-10 border-x-2"> 
                              <tr>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Total:100</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>100</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>70%</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>50</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>40%</td>
                              </tr>
                            </tfoot>
                        </table>
                        <br/>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-8 rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 justify-center pb-5">
               <div>
                  <div className="rounded p-1 " style={{ backgroundColor: "#6A1C32" }}>
                     <h3 className="text-white font-bold text-lg text-center">Requisiciones por área</h3>
                  </div>
                  <div className="bg-white">
                     <div className="ml-5 mr-5 overflow-auto justify-items-center">
                        <br/>
                         <table className="text-center border-solid">
                           <thead className="font-bold text-xl">
                              <tr>
                                 <th className="border-2" style={{borderColor: "#6F1C46"}}>No.</th>
                                 <th className="border-2" style={{borderColor: "#6F1C46"}}>Área</th>
                                 <th className="border-2" style={{borderColor: "#6F1C46"}}>No.</th>
                                 <th className="border-2" style={{borderColor: "#6F1C46"}}>%</th>
                              </tr>
                           </thead>
                           <tbody className="overflow-auto text-xs">
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>1</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Oficina de la Alcaldía</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>780</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>13%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>2</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Dirección General de Asuntos Jurídicos y de Gobierno</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>210</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>3.6%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>3</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Dirección General de Administración</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>2540</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>4.7%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>4</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Dirección General de Obras y Desarrollo Urbano</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>78</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>1.3%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>5</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Dirección General de Inclusión y Bienestar Social</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>1500</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>25.8%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>6</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Dirección General de Turismo y Fomento Económico</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>300</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>5.1%</td>
                              </tr>
                              <tr className="h-12">
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>7</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>Dirección General de Participación Ciudadana</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>240</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>4.1%</td>
                              </tr>
                           </tbody>
                           <tfoot style={{ backgroundColor: "#6F1C46", borderColor: "#6F1C46" }} className="text-white h-10 border-x-2 text-left text-xs font-bold"> 
                              <tr>
                                 <td colSpan={2} className="border-x-2" style={{borderColor: "#6F1C46"}}>Total</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>5884</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>61.5%</td>
                              </tr>
                              <tr>
                                 <td colSpan={2} className="border-x-2" style={{borderColor: "#6F1C46"}}>Total Global</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>9567</td>
                                 <td className="border-x-2" style={{borderColor: "#6F1C46"}}>100%</td>
                              </tr>
                            </tfoot>
                        </table>
                        <br/>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="rounded p-1 " style={{ backgroundColor: "#6A1C32" }}>
                     <h3 className="text-white font-bold text-lg text-center">Entregas vs Facturas</h3>
                  </div>
                  <div className="bg-white pt-3">
                     <div style={{height: '280px'}} >
                        <GraficaEntregas />
                     </div>
                     <h1 className="ml-3 p-3 text-sm">Total de Entregas: 75 </h1>
                  </div>
               </div>
               <div>
                  <div className="rounded p-1 " style={{ backgroundColor: "#6A1C32" }}>
                     <h3 className="text-white font-bold text-lg text-center">Procedimientos Administrativos por tipo de adjudicación</h3>
                  </div>
                  <div className="bg-white pt-3">
                     <div style={{height: '280px'}} >
                        <GraficaProcedimiento />
                     </div>
                     <h1 className="ml-3 p-3 text-sm">Total de Contratos: 150 </h1>
                  </div>
               </div>
            </div>
         </>
      )
}

