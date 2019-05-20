# Creador de ficheros mediante CLI
En este proyecto vamos a poder crear un fichero introduciendo el nombre y la extensión que deseamos.

## Instrucciones
Para un correcto uso, hay que seguir estas instrucciones.

### Instalación

* GLOBAL
```
npm install -g cli-file-creator
```
* LOCAL
```
npm install cli-file-creator
```

### Para usarlo
* Global
Ejecutamos **cli-file-creator**
* Local
Añadir en el package.json
```
"scripts": {
    "cli-file-creator": "./node_modules/.bin/cli-file-creator"
},
```
Ejecutamos con
```
npm run cli-file-creator
```