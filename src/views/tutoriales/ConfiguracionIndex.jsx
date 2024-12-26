import React from 'react'
import TutorialConfiguracion from '../../components/Tutorial'
import TutorialConfiguraciones from '../../assets/tutorialesArchivos/ejemploArchivo.pdf'
export default function ConfiguracionIndex() {
  return (
    <>
     <TutorialConfiguracion
        fileUrl={TutorialConfiguraciones}
        buttonText={"DESCARGAR"}
      />
    </>
  )
}
