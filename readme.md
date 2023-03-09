# Guia de rutas del proyecto

## Rutas 
### Crear un nuevo producto
POST http://localhost:8080/api/products/

Ejemplo de datos a poner en el postman
```
{
    "nombre": "producto",
    "descripcion": "descripcion del producto",
    "precio": "100",
    "codigo": "codigoDelProducto",
    "stock": "10",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_621491-MLA48680897402_122021-O.jpg"
}
```

### Ver todos los productos
GET http://localhost:8080/api/productos/

### Obtener un producto
GET http://localhost:8080/api/productos/idDelProducto

Ejemplo
GET http://localhost:8080/api/productos/6388e73d142de044480b2ba2

### Borrar un producto
DELETE http://localhost:8080/api/productos/idDelProducto

Ejemplo
DELETE http://localhost:8080/api/productos/6388e73d142de044480b2ba2

## .env ejemplo
MONGO_ATLAS = urlDeMongoAtlas
PORT = 8080