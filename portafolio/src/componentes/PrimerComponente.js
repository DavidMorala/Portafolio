import React from 'react'

export const PrimerComponente = () => {

    let nombre = "David Morala"

  return (
    <>
    <p>
        Hola, soy 
        <strong id='nombre'> {nombre}</strong>.
        <strong id='tag1'> Disponible para trabajar</strong>
    </p>
    <p id='bio'>Estudiante de desarrollo web, y ciberseguridad. <strong id='lugar'>De Madrid, España</strong>. <strong id='desweb'> Desarrollador web full stack</strong>.</p>
    </>
    
  )
}
