import logo from './logo.svg';
import './App.css';
import {PruebasComponent } from "./components/PruebasComponent.js"
import {AjaxComponent} from './components/AjaxComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasComponent/>
        <hr/>
        
        <AjaxComponent/>
      </header>
    </div>
  );
}

export default App;
