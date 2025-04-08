import { useEffect, useState } from "react";

function useLocalStorage(key, valorInicial){
    const[valor, setValor] = useState(()=>{
        const datosGuardados = localStorage.getItem(key);
        return datosGuardados?
        JSON.parse(datosGuardados):
        valorInicial
    });
    useEffect(()=>{
        localStorage.setItem(
            key,
            JSON.stringify(valor)
        );
    },[key, valor]);// Atentos a combios externos, cambios de pagina, salto de linea, cambio de variables, etc
    return [valor, setValor];
}

export default useLocalStorage;
/*
// gUARDAR
localStorage.setItem("llave", "hola") //! Siempre va a recibir cadenas de texto o cadenas de texto dentro de objtetos
localStorage.setItem("llave",{"saludo": "hola"})
localStorage.setItem("llave",["hola", "mundo","localstorage"])
localStorage.setItem("llave",[
    {"saludo":"hola"},
    {"saludo":"hola"},
    {"saludo":"hola"}
]);
// Obtener
localStorage.getItem("llave");
//Limipar item
localStorage.removeItem("llave");
// Limpiar Local Storage cpompleto
localStorage.clear()*/