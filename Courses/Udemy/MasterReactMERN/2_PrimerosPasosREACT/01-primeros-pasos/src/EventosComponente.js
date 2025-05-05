import React from 'react'

export const EventosComponente = () => {
    const hasClick  = (e, nombre) =>{
        alert("Haz dado clic al boton")
    };

    const dobleClick = (e, nombre) =>{
        alert("Haz dado doble click "+ nombre)
    }

    const hasEntrado = (e, accion) =>{
        console.log(`Haz entrado entrado a la caja con el mouse`);
            }

    const hasSalido = (e, accion) => {
        console.log("Haz salido entrado a la caja con el mouse");
        
    }

    const estasDentro = e =>{
        console.log("Esras dentro del input, mete tu nombre")
    }

    const estasFuera = e =>{
        console.log("Esras fuera del input, mete tu nombre")
    }
  return (
    <div>
        <h1>Eventos en React</h1>
        {/*Evento Click */}
        <button onClick={e => hasClick(e, "Jesus")}>Click Aqui</button>
        <button onDoubleClick={e => dobleClick(e, "Doble")}>Doble Click</button>


        
            <div id='caja'
             onMouseEnter={e => hasEntrado(" entrado ")}
            onMouseLeave={e => hasSalido(" salido ")}>
                {/*Evento onMouseEnter onMouseLeave*/}
                Pasa por encima
            </div>
        <p>
            {/*Evento Focus t Blur */}
            <input type="text" onFocus={e => estasDentro()} onBlur={e =>estasFuera()} placeholder='Introduce tu nombre'></input>
        </p>
    </div>
  )
}
