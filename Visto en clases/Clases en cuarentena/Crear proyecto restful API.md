# Configuración de un proyecto restful API

### Comando completo

    npm i mongoose body-parser cors express

### Explicación 

> npm i mongoose

*Aquí es donde tendremos toda la parte de la conexión con nuestra base de datos configurada con nuestro clúster de mongo Atlas.*

> npm i body-parser

*Es una librería muy importante al momento en el que empezamos a consumir nuestros end-points.
Sirve para formatear y manipular todo lo que vamos a estar enviando en las peticiones de los end-points.*

> npm i cors

*Para cross domain estimado, como despues tendremos otras aplicaciones consumiendo de esa API esa función ayuda a validar que IP's pueden consumir nuestros end-points*

> npm i express

*Nos dará la lógica de nuestro aplicativo para la configuración de nuestro restful API.*

-------
### Comando completo
    npm i -D @types/body-parser @types/cors @types/express @types/mongoose @types/node nodemon ts-node typescript

### Explicación 

> npm i -D @types/body-parser

*Nos ayudara a traer todas esas clases para poder manipular objetos.*

> npm i -D @types/cors

*Es un mecanismo que utiliza cabeceras [HTTP](https://developer.mozilla.org/es/docs/Glossary/HTTP "HTTP: HTTP por sus siglas en inglés significa Protocolo de transferencia de Hipertexto (HyperText Transfer Protocol)  el cual es el principal protocolo (protocol) que permite la transferencia de archivos a través de la Web. HTTP es textual (toda la comunicación se hace en texto plano) y sin estado (ninguna comunicación es consciente de las comunicaciones previas).") adicionales para permitir que un user agent obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece.*

> npm i -D @types/express

*Para poder tratar nuestro aplicativo como un verdadero objeto.*

> npm i -D @type/node

*complemento.*

> npm i -D nodemon

*Nos servirá para estar ejecutando nuestros cambios en nuestro código y verlo en tiempo real sin necesidad de estar transpilando.*

> npm i -D ts-node

*complemento de nodemon.*

 npm i -D typescript

> Blockquote

*Dependencias de Typescript*

## En consola Bash ó _Oh_-_My_-_Zsh_ (linux) 

    mkdir src

*crea nuestra carpeta de código.*

    touch .gitignore

*crea nuestro archivo .gitignore.*

    touch nodemon.json

*nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios en el directorio.*

    code .

*visual studio code.*

**Nota: Esto también se puede realizar en la consola de gitbash.**

## Archivo package.json

Una vez realizado este procedimiento ir desde vs code y agregar en nuestro package.json en 

    "scripts":{
    	 "tsc": "tsc", 
    	 "start":"nodemon"
    } 

**start**: Busca dentro de nodemon.json

**Nota:** `npm run start` **para correr el código de proyecto.**

En nuestra terminal ahora:

    npm run tsc -- --init
Este comando crea nuestro archivo tsconfig.json

## Archivo tsconfig.json

agregar manualmente (en caso no aparezca):

    {
    	"resolveJsonModule": true,
    	"outDir": "./dist",
    	"experimentalDecorators": true,
    	"emitDecoratorMetadata": true,
    
        },
        "exclude": ["node_modules"],
        "include": ["src/**/*.ts"]
    }

**exclude:** *Antes de la última llave vamos a  excluir de node_modules para evitar problemas puntuales con typescript.*

***include:** Que sea estricta de que todas las configuración de tsc sean aplicadas dentro de src*

## HeadingArchivo .gitignore

    node_modules
    package-lock.json
    dist

Son los ficheros que no queremos subir a nuestra nube de github.
## Archivo nodemon.json

    {
        "watch": ["src"],
        "ext": "ts",
        "exec": "ts-node ./src/server.ts"
    }
**watch:** *Necesitamos que escuche todo lo que esta dentro de "src"*
**ext:** *Todo lo que tenga extensión "ts"*
**exec:** *Ejecutar el archivo server.ts*
