import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

  const establecerU = () => {
    setUsuarios([
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
      }
    ]);
  };

  const getUsuariosAjaxProm = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(respuesta => respuesta.json())
        .then(resultado_final => {
          console.log(resultado_final)
          setUsuarios(resultado_final);
        },
          error => {
            console.log(error)
          })
    } catch (error) {
      console.log("error")
    }

  }

  const getUsuariosAwait = () => {

    setTimeout(async () => {
      try {
        const peticion = await fetch("https://jsonplaceholder.typicode.com/todos")
        // ⚠️ Verificamos si fue exitosa
        if (!peticion.ok) {
          throw new Error(`Error ${peticion.status}: Recurso no encontrado`);
        }
        const response = await peticion.json();

        setUsuarios(response)




      } catch (error) {
        console.log(error)
        setErrores(error.message)
      } finally {
        setCargando(false)
      }

    }, 2000);


  };


  useEffect(() => {
    //establecerU();
    // getUsuariosAjaxProm();
    getUsuariosAwait();
  }, []);

  if (errores !== "") {
    //Cuando está todo carganfo
    return (
      <div>{errores}</div>
    );
  }
  else if (cargando) {
    //Cuando está todo carganfo
    return (
      <div>Cargando datos</div>
    );
  } else {
    return (
      <div>
        <h2>Listado de usuarios via ajax</h2>
        <ol className='usuarios'>
          {Array.isArray(usuarios) && usuarios.map(usuario => (
            <li key={usuario.id}>
              {usuario.title} {usuario.body}
            </li>
          ))}
        </ol>
      </div>
    );
  };
}