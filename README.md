## Descripción

Este archivo objeto-libro.js contiene la implementación de objetos en JavaScript que representan libros con sus propiedades y métodos. Se crean tres instancias de libros con diferentes características y funcionalidades adicionales.

## Contenido

El script define tres objetos libro, libro2 y libro3 con las siguientes propiedades:

- titulo: Nombre del libro.

- autor: Autor del libro.

- capitulo: Cantidad de capítulos que contiene.

- año: Año de publicación.

- estado: Estado actual del libro (ejemplo: "disponible", "prestado").

Además, cada objeto tiene un método describirLibro que devuelve una descripción detallada del libro.

### El objeto libro3 tiene métodos adicionales:

- agregarCapitulo(nuevoCapitulo): Incrementa el número de capítulos del libro.

- quitarCapitulo(capituloQuitado): Disminuye el número de capítulos del libro.

## Uso

El código incluye ejemplos de uso de los métodos definidos:

```
console.log(libro.describirLibro());
console.log(libro2.describirLibro());
console.log(libro3.describirLibro());

libro3.agregarCapitulo(5);
console.log(libro3.describirLibro());
```
## Requisitos

Para ejecutar este script, necesitas tener instalado Node.js o ejecutarlo en un entorno que soporte JavaScript, como un navegador web o un entorno de desarrollo como Visual Studio Code.

## Autor

Este script fue desarrollado por Marco Antonio Guzmán Partida como parte de la práctica en JavaScript para la manipulación de objetos y métodos.
