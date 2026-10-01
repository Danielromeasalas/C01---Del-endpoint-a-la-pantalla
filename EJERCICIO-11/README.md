# Ejercicio 11 - Mini tienda

La aplicacion muestra los productos existentes y permite crear uno nuevo desde un formulario movil.

## Aprendizajes

- Enviar datos JSON con una peticion `POST`.
- Leer el cuerpo de la peticion con `@Body` en NestJS.
- Recargar la lista despues de crear un producto.

## Puesta en marcha

```bash
cd backend
npm install
npm run start:dev
```

```bash
cd frontend
npm install
npx expo start
```

Rutas principales:

- `GET /productos`: lista los productos.
- `POST /productos`: crea un producto con `nombre` y `precio`.

## Nota

El catalogo es un array en memoria; los nuevos productos desaparecen cuando se reinicia el backend.