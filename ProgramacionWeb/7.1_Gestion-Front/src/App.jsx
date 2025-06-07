import React, { useState } from 'react'
import Form from './routes/Form'
import Dashboard from './routes/Dashboard';
import NavBar from './components/NavBar';
import { Categorias } from './routes/Categorias';
import Movimientos from './routes/Movimientos';

const App = () => {

  const [ruta, setRuta] = useState("/");


  return (
    <div className='w-screen h-screen bg-slate-50 flex flex-wrap justify-center '>

      {ruta == "/" ? null : <NavBar ruta={ruta} setRuta={setRuta} />}

      {
        ruta == "/" ?
          (<Form ruta={setRuta} />) :
          ruta == "/dashboard" ?
            (<Dashboard />) :
           ruta == "/categorias" ?
            (<Categorias/>) : 
            ruta == "/movimientos"? 
            (<Movimientos/>):
            null
      }
    </div>
  )
}

export default App