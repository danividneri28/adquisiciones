import React from "react";
import TutorialViewer from "../../components/Tutorial";
import TutorialEjemplo from '../../../src/assets/tutorialesArchivos/ejemploArchivo.pdf'
export default function FuncionesIndex() {
  return (
    <>
      <TutorialViewer
        fileUrl={TutorialEjemplo}
        buttonText={"DESCARGAR"}
      />
    </>
  );
}
