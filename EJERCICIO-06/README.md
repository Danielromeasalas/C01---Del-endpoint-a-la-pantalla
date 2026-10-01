# Ejercicio 06 - Estado de conexion

La pantalla movil permite comprobar el estado de la comunicacion con el backend y actualizarlo mediante una accion del usuario.

## Aprendizajes

- Gestionar datos remotos con `useState`.
- Ejecutar `fetch` al pulsar un boton.
- Mostrar estados de conexion, respuesta y error en React Native.

## Estructura

- `backend/`: expone `GET /mensaje`.
- `frontend/`: aplicacion Expo con la pantalla de comprobacion.

## Puesta en marcha

En dos terminales:

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

Si se usa un movil fisico, configura en la pantalla la IP accesible del backend en lugar de `localhost`.

## Idea clave

El estado de la interfaz representa el resultado de una operacion asincrona; no se debe asumir que la respuesta llega inmediatamente.