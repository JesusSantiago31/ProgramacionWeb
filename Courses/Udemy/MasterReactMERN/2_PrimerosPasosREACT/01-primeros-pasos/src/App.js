import React from 'react'; // ¡Agrega esta línea!
import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

function App() {
  const ficha_medica={
    altura:"165cm",
    grupo:"O+",
    estado:"Bueno",
    alergias:"Ninguna"
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
      <div className="components">
          
        <hr/>
        <TercerComponente 
        
        apellido="Santiago" 
        ficha={ficha_medica}/>
        <hr/>
        
        <EventosComponente/>
        <hr/>
        <MiComponente/>
        <hr/>
        <SegundoComponente/>
        </div>
        </header>
        
      </div>
    
  );
}

export default App;
