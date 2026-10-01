# Ejercicio 12 - Creature Lab

Integracion final del cuaderno. React Native carga criaturas, permite seleccionar una y enviar likes; NestJS concentra las operaciones del recurso.

## Aprendizajes

- Integrar lectura de colecciones, detalle y escritura en una sola experiencia.
- Usar `FlatList`, `Pressable`, `useEffect` y `useState`.
- Seguir el recorrido completo: pantalla -> `fetch` -> controller -> service -> JSON -> estado -> interfaz.

## Estructura

- `backend/`: API NestJS del recurso `criaturas`.
- `frontend/`: aplicacion Expo/React Native.

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

- `GET /criaturas`: lista todas las criaturas.
- `GET /criaturas/:id`: devuelve una criatura.
- `PATCH /criaturas/:id/like`: incrementa sus likes.

## Nota

La fuente de datos sigue siendo un array en memoria. La integracion demuestra el flujo Full Stack, pero todavia no ofrece persistencia.