import { use, useState } from "react"
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import { login, register } from "../js/formularioLogin";


const Form = ({ruta}) => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const manejarFormulario = (e) =>{
      e.preventDefault();

      if(isRegister){
        register(email,password);
        setIsRegister(false)
      }else{
        login(email, password);
        ruta("/dashboard")
      }
    }

  return (
    <form onSubmit={manejarFormulario}
    className="h-fit my-auto shadow-lg p-4 rounded bg-gray-700 flex flex-col items-center gap-5">
        <h1
        className="text-emerald-600 text-3xl text-center font-bold">
        {isRegister?"Registrate !!":"Iniciar Sesión"}</h1>
        <p className="text-xs text-white">
          {isRegister?"Ya tienes una cuenta. ":"Aún no te registras? "} 
          <span 
          className="text-emerald-300 cursor-pointer"
           onClick={()=>setIsRegister(!isRegister)}>
            Da click aquí
            </span></p>
            <div
            className="text-white bg-gray-600 rounded shadow w-full h-auto flex flex-col p-4 gap-2">

              <label >Email</label>
              <InputForm
              evt= {(e)=>setEmail(e.target.value)} //
              type={"email"} 
              placeHolder={"correo@ejemplo.com"} 
              isRequired={true}/>

              <label > Password</label>
              <InputForm
              evt={(e)=>setPassword(e.target.value)}
              type={"password"}
              placeHolder={""}
              isRequired={true}/>

              <Button text={isRegister?"Crear Cuenta":"Ingresar"}/>
            </div>
    </form>
  )
}

export default Form