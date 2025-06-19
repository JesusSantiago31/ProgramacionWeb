import { useState } from "react";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import { login, register } from "../js/formularioLogin";

const Form = ({ ruta}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const manejarFormulario = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isRegister) {
        await register(email, password);
        alert("Usuario registrado correctamente, ahora inicia sesión.");
        setIsRegister(false);
      } else {
        await login(email, password);
        alert("Inicio de sesión exitoso");
        ruta("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={manejarFormulario}
      className="h-fit my-auto shadow-xl p-6 rounded-xl bg-gray-800 flex flex-col items-center gap-5 w-full max-w-md mx-auto"
    >
      <h1 className="text-sky-400 text-3xl text-center font-bold">
        {isRegister ? "¡Regístrate!" : "Inicia Sesión"}
      </h1>

      <p className="text-sm text-gray-200">
        {isRegister ? "¿Ya tienes una cuenta? " : "¿Aún no te registras? "}
        <span
          className="text-sky-300 underline cursor-pointer hover:text-sky-200 transition"
          onClick={() => {
            setError(null);
            setIsRegister(!isRegister);
          }}
        >
          Da clic aquí
        </span>
      </p>

      {error && (
        <p className="text-red-500 text-sm bg-red-100 border border-red-300 p-2 rounded w-full text-center font-medium">
          {error}
        </p>
      )}

      <div className="text-white bg-gray-700 rounded-lg shadow-inner w-full h-auto flex flex-col p-4 gap-4">
        <label className="text-sm font-semibold">Email</label>
        <InputForm
          evt={(e) => setEmail(e.target.value)}
          type="email"
          placeHolder="correo@ejemplo.com"
          isRequired={true}
        />

        <label className="text-sm font-semibold">Contraseña</label>
        <InputForm
          evt={(e) => setPassword(e.target.value)}
          type="password"
          placeHolder="*****"
          isRequired={true}
        />

        <Button text={isRegister ? "Crear Cuenta" : "Ingresar"} />
      </div>
    </form>
  );
};

export default Form;
