import { useState } from "react"
import Button from "./components/Button";


const App =()=>{

  const [contador,setContador] = useState(0); //* Al ser un contador se inicializa en 0

  return( // Para que nos detecte que es una variable o parte de js se encierra entre llaves
    // Y se manda llamar la funcion 
    <div>
      {contador}
      <Button contador={1} mensaje={"Aumentar"} />
      <Button contador={-1} mensaje={"Disminuir"} />
  
      <br />

      {
        contador%2 == 0?
        (<p>El contador es par</p>) :
        (<p>El contador es impar</p>)
      }

      { 
        //(contador == 9 || contador == -9) && setContador(0)
        
      }
    </div>
  )
}

export default App