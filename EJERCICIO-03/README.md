# Ejercicio 03 - Busca mascota

La API incorpora parametros de ruta para buscar una mascota concreta a partir de su identificador.

## Aprendizajes

- Definir una ruta dinamica con `GET /mascotas/:id`.
- Leer el valor de `:id` con `@Param`.
- Delegar la busqueda en un service con datos en memoria.

## Estructura

- `backend/src/mascotas/`: controller y service del recurso.
- `backend/`: proyecto NestJS independiente.

## Puesta en marcha

```bash
cd backend
npm install
npm run start:dev
```

Ejemplo: `GET http://localhost:3000/mascotas/1`.

## Idea clave

Un path param forma parte de la URL y sirve para identificar un recurso concreto. Al reiniciar el servidor, los datos simulados vuelven a su estado inicial.