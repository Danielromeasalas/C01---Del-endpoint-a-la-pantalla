# Ejercicio 09 - Busca superheroe

La aplicacion permite introducir un identificador y consultar dinamicamente un heroe concreto.

## Aprendizajes

- Capturar texto con `TextInput`.
- Construir una URL usando el valor introducido.
- Consultar `GET /heroes/:id` y mostrar el resultado o un error.

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

La pantalla consulta `GET /heroes/1` como ejemplo; el id se puede cambiar desde el formulario.

## Idea clave

Una peticion dinamica conecta la accion de la persona usuaria con un path param del backend.