<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Para crear el proyecto de cero se necesitan hacer los siguientes pasos:
1- Instalar Nest.js CLI
```
npm i -g @nestjs/cli
```
2- Crear en nuevo proyecto
```
nest new <project-name>
```

## Instalación de dependencias (posicionarse en la carpeta del proyecto):
1- Manejo de Base de Datos
```
npm i @nestjs/typeorm typeorm mysql2
```

2- Manejo de Variables de Entorno
```
npm i @nestjs/config
```

3- Manejo de validaciones
```
npm i class-validator class-transformer
```

## Para correr el proyecto (modo desarrollo)
```
npm run start:dev
```

*NOTA:*
Si se clona un repositorio, debes posicionarte en la carpeta del proyecto y solamente ```npm install```, te actualiza con todas las dependencias que se hayan instalado