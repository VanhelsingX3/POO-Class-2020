# Clase #3


Test command linux: 

    > node --version 
    > npm --version

**QA:** Perfil de ingenieria y devops, hacen pruebas unitarias para medir y garantizar la funcionalidad en los aplicativos.

En `JSON` se inician con una llave:
```
  {
  "name": "classes",
  "version": "1.0.0",
  "description": "Proyecto clase 1",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
   }
}
```
## Creating a package.json file

Crear archivo JSON con la información más importante del proyecto.

    > npm init

example:
```
  {
    "name": "my_package",
    "description": "",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/ashleygwilliams/my_package.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/ashleygwilliams/my_package/issues"
    },
    "homepage": "https://github.com/ashleygwilliams/my_package"
  }
```
##  Crear una nueva aplicación React

**Create React App** configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. Necesitarás tener Node >= 8.10 y npm >= 5.6 instalados en tu máquina.

    > npx create-react-app my-app 
    > cd my-app
    > npm start

> Nota: En la primera línea `npx` no es un error de escritura: Es una
> [herramienta de ejecución de paquetes que viene con npm
> 5.2+](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).

## npm Install TypeScript

Instalar la dependencia de TSC al proyecto en el JSON.

    >  npm install typescript --save-dev 
ó

    > npm install typescript -s

```
{
      "name": "package-name-goes-here",
      "version": "0.0.0",
      "scripts": {
        "compile-typescript": "tsc"
      },
      "devDependencies": {
        "typescript": "^3.5.3"
      }
    }  
```




