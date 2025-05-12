import logo from './logo.svg';
import './App.css';
import {MiPrimerEstado} from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {

  const fecha = new Date();
    const yearActual =2025
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      
<h1>El estado en REACT - HOOK State</h1>
  <MiPrimerEstado/>
  <hr/>
  <EjercicioComponent 
  year={yearActual}/>

      </header>
    </div>
  );
}

export default App;
