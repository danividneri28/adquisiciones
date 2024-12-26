import React from 'react'
import TutorialEstadistica from '../../components/Tutorial'
import TutorialEstadisticas from '../../assets/tutorialesArchivos/ejemploArchivo.pdf'
export default function EstadisticaIndex() {
  return (
    <>
      <TutorialEstadistica
          fileUrl={TutorialEstadisticas}
          buttonText={"DESCARGAR"}
        />
    </>
  )
}
