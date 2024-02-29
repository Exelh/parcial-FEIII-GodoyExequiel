import React from 'react'

const Card = ({ estudiante }) => {
  return (
    <div>
        <h4>Hola, {estudiante.nombre}!</h4>
        <p>Sabemos que estás estudiando {estudiante.carrera.toUpperCase()} y te deseamos muchos éxitos.</p>
        
    </div>
);
}

export default Card
