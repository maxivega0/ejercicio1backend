# ejercicio1backend

## Pasos para crear un nuevo proyecto backend

1- instanciamos carpeta public
2- carpeta source
3- dentro de source: routes, models, controllers
4- libreria externa nodemon para actualizar automaticamente el backend
5- instalar express ("npm install express --save")
6- instalar babel ("npm i babel-cli babel-preset-env express-validator mongoose cors morgan dotenv") ayuda a traducir js a node
7- instanciar .babelrc, y agregar `"presets":["env"]`
8- añadir a package.json en la zona de scripts los comandos `"start": "babel-node index.js", "dev": "nodemon --exec babel-node index.js"`
9- realizar la conexion a la base de datos (config.js y dbConnection.js)
10- realizamos el modelo a usar
11- manejamos el modelo a partir de los controladores
12- configuramos las rutas y las funciones a ejecutar de los controladores al index.js

## Consigna
1. Lista de tareas - Dificultad: 🟢
Crear un proyecto de backend con los endpoints necesarios para poder agregar
una tarea, listar todas las tareas existentes, borrar una tarea, editar una tarea y
obtener una tarea por el nombre o identificador único. Modelar la base de datos
necesaria con MongoDB.


## Peticiones a:
````
http://localhost:4005/apitareas/tareas/
````