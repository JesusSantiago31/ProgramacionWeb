const Button = (props) =>{
    //Dentro de  una funcion (Todo lo que es de raect se declara en App)
    const eventoBoton = (incremento) => {
        //Debido a la encapsulacion, se debe aplicar un set
        setContador(contador + incremento)
    
        //Para que cuando contador este en 8, se reinicie el contador usando if
        if (contador ==  8 || contador == -8) setContador(0);
    
        // Usando el operador logico &&
        //(contador == 9 || contador == -9) && setContador(0)
        // Usando operador ternario anidado
        /*
        (contador + 1) == 9 '
          setContador(0) :
          (contador - 1) == -9 ? 
            setContador(0):
            setContador(contador + incremento)
        */
      }
      return(
    <button onClick ={()=> eventoBoton(props.contador)}>
        {props.mensaje}
    </button>
    )
}

export default Button