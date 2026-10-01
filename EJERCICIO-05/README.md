# Ejercicio 05 - Mi primera conexion

Primer puente entre NestJS y React Native. La aplicacion movil solicita un mensaje al backend y muestra la respuesta recibida.

## Aprendizajes

- Hacer una peticion HTTP con `fetch` desde React Native.
- Conectar una pantalla movil con un endpoint NestJS.
- Representar una respuesta JSON en la interfaz.

## Estructura

- `backend/`: API NestJS con `GET /mensaje`.
- `challenge2-front-rn/`: aplicacion Expo/React Native.

## Puesta en marcha

Terminal 1:

```bash
cd backend
npm install
npm run start:dev
```

Terminal 2:

```bash
cd challenge2-front-rn
npm install
npx expo start
```

En un dispositivo fisico, sustituye `localhost` por la IP local del equipo en la URL de la API.

## Idea clave

El backend devuelve JSON y el frontend lo transforma en una experiencia visible para la persona usuaria.