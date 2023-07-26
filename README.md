# ejercicio1backend

## Pasos para crear un nuevo proyecto backend

`npm init -y`

1- instanciamos carpeta public <br>
2- carpeta source <br>
3- dentro de source: routes, models, controllers<br>
4- libreria externa nodemon para actualizar automaticamente el backend<br>
5- instalar express ("npm install express --save")<br>
6- instalar babel ("npm i babel-cli babel-preset-env express-validator mongoose cors morgan dotenv") ayuda a traducir js a node<br>
7- instanciar .babelrc, y agregar `"presets":["env"]`<br>
8- añadir a package.json en la zona de scripts los comandos `"start": "babel-node index.js", "dev": "nodemon --exec babel-node index.js"`<br>
9- realizar la conexion a la base de datos (config.js y dbConnection.js)<br>
10- realizamos el modelo a usar<br>
11- manejamos el modelo a partir de los controladores<br>
12- configuramos las rutas y las funciones a ejecutar de los controladores al index.js<br>

## Consigna

1. Lista de tareas - Dificultad: 🟢
   Crear un proyecto de backend con los endpoints necesarios para poder agregar
   una tarea, listar todas las tareas existentes, borrar una tarea, editar una tarea y
   obtener una tarea por el nombre o identificador único. Modelar la base de datos
   necesaria con MongoDB.

## Librerías Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuario.
- [React DOM](https://reactjs.org/docs/react-dom.html) - Provee métodos específicos para interactuar con el DOM.
- [React Bootstrap](https://react-bootstrap.github.io/) - Componentes de Bootstrap reescritos en React.
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para diseño y estilos.
- [React Hook Form](https://react-hook-form.com/) - Librería para manejar formularios en React.
- [SweetAlert2](https://sweetalert2.github.io/) - Librería para mostrar bonitas alertas y diálogos modales en JavaScript.
- [SweetAlert2 React Content](https://www.npmjs.com/package/sweetalert2-react-content) - Integración de SweetAlert2 con React.

## Clonar repositorio

```
git clone https://github.com/maxivega0/listaTareas-front-backend.git
```

## Peticiones a:

```
http://localhost:4005/apitareas/tareas/
```

### Autor:

Vega Maximiliano Leonel
