# Ejercicio 02 - API de pizzas

La API evoluciona desde una ruta simple hacia un recurso con datos. El controller delega en un service y devuelve una lista de pizzas en formato JSON.

## Aprendizajes

- Separar responsabilidades entre controller y service.
- Crear un endpoint de coleccion con `GET /pizzas`.
- Trabajar con datos simulados guardados en memoria.

## Estructura

- `backend/src/pizzas/pizzas.controller.ts`: expone el endpoint.
- `backend/src/pizzas/pizzas.service.ts`: contiene las pizzas y la logica de consulta.

## Puesta en marcha

```bash
cd backend
npm install
npm run start:dev
```

Consulta `http://localhost:3000/pizzas` para obtener la lista.

## Idea clave

El controller atiende HTTP, pero el service conoce los datos. Esta separacion permite cambiar la fuente de datos sin cambiar la ruta publica.