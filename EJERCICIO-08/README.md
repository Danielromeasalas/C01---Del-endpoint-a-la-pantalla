# Ejercicio 08 - Menu del restaurante

La pantalla carga productos desde NestJS y los presenta como una lista movil usando `FlatList`.

## Aprendizajes

- Solicitar una coleccion con `fetch` y `useEffect`.
- Guardar arrays remotos en el estado.
- Renderizar listas eficientemente con `FlatList`.

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

El endpoint de datos es `GET /productos`.

## Idea clave

La interfaz no contiene la lista como fuente principal: la pide al backend y representa el JSON recibido.