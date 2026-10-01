# Ejercicio 01 - Hello Backend

Primer contacto con NestJS. El objetivo es crear una API minima y reconocer la estructura de un proyecto: modulo, controller y punto de entrada.

## Aprendizajes

- Crear y arrancar un proyecto NestJS con TypeScript.
- Entender que un controller recibe peticiones HTTP.
- Crear la ruta base `GET /` y el controller `hola`.

## Estructura

- `backend/`: API NestJS.
- `backend/src/hola/`: controller del primer recurso.

## Puesta en marcha

```bash
cd backend
npm install
npm run start:dev
```

La API queda disponible en `http://localhost:3000`.

## Resultado

Este ejercicio deja preparada la base del recorrido: una peticion HTTP entra en NestJS y un controller decide que respuesta devolver.