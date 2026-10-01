# Ejercicio 04 - Filtra videojuegos

La API combina busqueda por identificador y filtrado opcional por genero mediante query params.

## Aprendizajes

- Usar `GET /juegos/:id` para consultar un juego concreto.
- Usar `GET /juegos?genero=aventura` para filtrar una coleccion.
- Diferenciar path params de query params.

## Puesta en marcha

```bash
cd backend
npm install
npm run start:dev
```

Rutas principales:

- `GET /juegos`: devuelve todos los juegos.
- `GET /juegos?genero=...`: devuelve solo los del genero indicado.
- `GET /juegos/:id`: devuelve un juego por id.

## Idea clave

Los query params son opcionales y permiten modificar una consulta sin cambiar la ruta del recurso.