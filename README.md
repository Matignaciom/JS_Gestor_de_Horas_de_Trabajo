# Gestor de horas de trabajo

El "Gestor de horas de trabajo" es una aplicación que permite a las empresas llevar un seguimiento eficiente de las horas de trabajo de sus empleados, calcular horas extras y horas nocturnas, y generar informes en formato CSV. Además, proporciona la flexibilidad de ingresar manualmente las horas nocturnas cuando sea necesario.

## Uso

1. Clona este repositorio o descarga los archivos en tu sistema.

2. Abre el archivo `index.html` en tu navegador web.

3. Haz clic en el botón "Agregar Trabajador" para registrar un nuevo empleado. Ingresa la información solicitada, como nombre, cargo, hora de inicio de jornada, hora de fin de jornada, y tiempo de colación en minutos.

4. Si deseas ingresar manualmente las horas nocturnas, también puedes hacerlo en el campo "Horas Nocturnas Manuales" (en horas).

5. Una vez que hayas agregado los trabajadores, haz clic en el botón "Generar Informe" para obtener un archivo CSV con el resumen de las horas trabajadas, horas extras y horas nocturnas de cada empleado.

## Ejemplo de Código

```javascript
import { agregarTrabajador } from './interfaz.js';

// Agregar un trabajador
agregarTrabajador("Juan Pérez", "Programador", 800, 1700, 30, 1.5); // Ejemplo con horas nocturnas manuales
```

## Requisitos

Antes de comenzar, asegúrate de tener [Node.js](https://nodejs.org/) y npm (Node Package Manager) instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local o descarga el código fuente como un archivo ZIP.

2. Navega al directorio del proyecto.

```bash
cd tu-proyecto
```

3. Instala las dependencias del proyecto utilizando npm.

```bash
npm install
```
¡Y eso es todo! ¡Ya puedes comenzar a utilizarlo!

## Nota

Este proyecto utiliza la biblioteca [FileSaver.js](https://github.com/eligrey/FileSaver.js/) para la descarga de archivos CSV. FileSaver.js facilita la generación y descarga de archivos en el navegador.

## Mejoras Futuras

El proyecto actualmente tiene algunos aspectos que se pueden mejorar:

1. **Formato de CSV**: El formato del archivo CSV generado podría mejorarse para que los datos se muestren en filas y columnas correctamente.

2. **Cálculo Automático de Horas Nocturnas**: Actualmente, las horas nocturnas se ingresan manualmente. Se podría trabajar en una forma más automatizada de calcular las horas nocturnas.

El resto de la funcionalidad está en orden y funciona correctamente.

¡Disfruta de la gestión de las horas laborales de tus empleados de manera eficiente!
