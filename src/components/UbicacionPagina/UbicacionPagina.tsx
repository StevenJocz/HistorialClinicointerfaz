import React from 'react'
import './UbicacionPagina.css'

interface UbicacionProps {
    ubicacion: string;
}
const UbicacionPagina: React.FC<UbicacionProps> = ({ubicacion}) => {
    return (
        <p className='Ubicacion'>Dashboard <span>/</span> {ubicacion}</p>
    )
}

export default UbicacionPagina