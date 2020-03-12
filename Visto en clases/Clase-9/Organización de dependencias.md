
# Organización de dependencias

Las  `devDependencies`  son dependencias que usas solo para la fase de desarrollo comúnmente, Taskrunner y unit test se manejan como  `devDependencies`  ej. grunt gulp babel mocha chai etc. estas dependencias no son necesarias en producción y tu aplicación puede funcionar si ellas.

Los  `dependencies`  son las que utilizas para que tu proyecto trabaja e.j express monngoose lodash body-parser estas dependencias son parte de la lógica de tu aplicación y son necesarias para que el proyecto funcione correctamente en producción.

## devDependencies

Antes que nada debemos crear nuestro proyecto usando Node.js & Typescript con los comandos npm:

>     npm init --yes

>     npm install ó npm i

 
Seguidamente de crear nuestro *package json* escribimos los siguientes *script:*

 `"tsc": "tsc"`
 

    "dev": "ts-node-dev --respawn --transpileOnly ./src/app.ts"

***Nota: Guardar el archivo.***

Ahora instalaremos nuestra dependencia de **Typescript**:

> `npm install typescript --save-dev` 


Seguidamente instalaremos una la configuración de proceso de transpilación.

> `npm run tsc -- --init`

***Nota 1: Para transpilar usar el comando `npm run tsc`***
***Nota 2: Este comando creara nuestro archivo `tsconfig.json`.***

Ahora instalamos una herramienta que reinicia el proceso del nodo de destino cuando cualquiera de los archivos requeridos cambia (como nodo-dev estándar) pero comparte el proceso de compilación de Typecript entre reinicio.

> `npm i ts-node-dev --save-dev`

Lo siguiente por hacer es crear una estructura de carpetas. Como no quiero que mis TS se mezclen con los JS generados voy a tener esta estructura:

    -- build //Carpeta
       -- app.js
       -- utils.js  
    -- src //Carpeta
       -- app.ts
       -- utils.ts
    -- package.json
    
## Archivo tsconfig.json

El archivo tsconfig.json es el que indica en un proyecto que se está trabajando con TypeScript. Lo colocas en la raíz de carpetas del proyecto y en él situamos un JSON con todas las configuraciones de trabajo para el transpilador de TypeScript.

El archivo tsconfig.json puede tener decenas de configuraciones, útiles para cada tipo de desarrollador o tipo de proyecto, pero una versión muy elemental podría ser la que nos encontramos aquí:

```javascript
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "build",
    "rootDir": "src"
  }
}
```

Básicamente le estamos diciendo:

-   **target**: indicamos que queremos que compile a código Javascript escrito con el estándar ES5, que es el que todos los navegadores comprenden, incluso los Internet Explorer más antiguos.
-   **outDir**: indicamos el directorio donde se van a colocar los archivos Javascript, ".js", una vez transpilados.
-   **rootDir**: indica dónde están los archivos fuente, con el código TypeScript, ".ts", que debe ser traducido.

Y con esto terminamos la parte de dependencias de desarrollo.

## dependencies

Ahora instalaremos las dependencias que si queremos que vayan a etapa de producción.

> `npm install mongoose`
> `npm install --save @types/mongoose`

Enviaremos aquellas que interactuan con la base de datos.
