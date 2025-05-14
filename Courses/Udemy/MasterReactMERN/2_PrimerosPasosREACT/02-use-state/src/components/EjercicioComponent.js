import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponent = ({year}) => {
    
    const fecha = new Date();
    const yearActual = fecha.getFullYear();

    const [yearNow, setYearNow] = useState(year);

    const nextY = e =>{
        setYearNow(yearNow + 1);
    }
    const beforeY = (e) =>{
        setYearNow(yearNow - 1);
    }
    const cambiar = (e) =>{
        let yearC =  parseInt(e.target.value)
        if(Number.isInteger(yearC)){
            setYearNow(yearC);
        }else{
            setYearNow(year);
        }
    }
    
  return (
    <div>
        <h3> Ejercicio de años</h3>

        <strong className={yearNow == yearActual ? 'green' : yearNow < yearActual ? 'red' : 'yellow'}>
            {yearNow}
        </strong>
        <button onClick={nextY}>Siguiente </button>
        <button onClick={beforeY}>Anterior </button>

        <p>Cambiar año</p>
        <input type="text" onChange={e => cambiar(e)} placeholder='Introduce la fecha'></input>
    </div>
  )
}

EjercicioComponent.propTypes ={
year: PropTypes.number.isRequired
}
