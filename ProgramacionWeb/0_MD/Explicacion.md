# App.js
Al modifica el archivo **App.js** se actualizara todo el contenido en la pagina web automaticamente sein necesidad de refrescar la pagina

* Se agregan **Hooks**
    **useState** tiene un valor inicar de *any* es decir, se le puede asignar cualquier valor. Se le asigna un valor numerico 
    ** 
    **setContador** Debido a la encapsulacion, se debe aplicar un set

*  Para que en el html se detecte que cierta variable es de JS, se encierra la variable entre llaves **{contador}**

* Agregamos **<button>** que llamen la funcion de evento boton

* Agrega el Renderizado Condicional para 
```jsx
      {
        contador%2 == 0?
        (<p>El contador es par</p>) :
        (<p>El contador es impar</p>)
      }
```

