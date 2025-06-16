import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        alert("El componente esta montado")
        return() =>{
            alert("Componente desmontado");
        }
    },[]);

return (
    <div>20 iteraciones detectadas</div>
)
}
