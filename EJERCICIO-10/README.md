# Ejercicio 10 - Likes

La aplicacion consulta una mascota y permite incrementar sus likes mediante una operacion `PATCH`.

## Aprendizajes

- Diferenciar una lectura `GET` de una modificacion `PATCH`.
- Enviar una accion desde React Native al backend.
- Actualizar el estado visual con la respuesta modificada.

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

Endpoint de escritura: `PATCH /mascotas/1/like`.

## Nota

Los likes se guardan en memoria. Se pierden al reiniciar NestJS porque todavia no hay base de datos.