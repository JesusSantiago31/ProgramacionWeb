# Sintaxis de Rutas a Introducir en Postman/Insomnia

## Ruta Base
**http://localhost:3000/**


**RutaBase -> "/"** --> Recibe [name,price,stock]

## GET
**GET -> "/"** --> Regresa todos los productos

**GET -> "/search"** --> Recibe [name] => Query

**GET -> /:id** --> Recibe [:id] => Mongo[_id]

## PUT 
**PUT -> "/:id"** --> Recibe[name?,price?,stock?] y [:id] => Mongo[_id]

## DELETE
**DELETE -> "/:id"** --> Recibe [:id] => Mongo[_id]


# Formato de Inserción de Datos:
```JSON
{
     
    "name": "Prueba",
    "price": 30,
    "stock": 123
}
```