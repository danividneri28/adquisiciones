import React from 'react'
import { Link } from 'react-router-dom'

const NoEncontrado = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>No se encontro la pagina</h2>
      <Link to="/">Regresar al inicio</Link>
    </div>
  )
}

export default NoEncontrado