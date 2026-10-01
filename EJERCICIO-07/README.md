# Ejercicio 07 - Carga automatica

La aplicacion deja de depender de un boton: al aparecer la pantalla, solicita automaticamente el mensaje del backend.

## Aprendizajes

- Usar `useEffect` para iniciar una carga.
- Combinar `useEffect` y `useState` en una peticion remota.
- Mostrar un estado de carga mientras llega la respuesta.

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

El backend expone `GET /mensaje`.

## Idea clave

`useEffect` permite sincronizar la pantalla con un efecto externo, como una peticion HTTP, cuando el componente se monta.