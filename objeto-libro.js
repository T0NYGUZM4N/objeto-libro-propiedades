//objeto libro y sus propriedades
let libro = {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    capitulo: 12,
    año: 1954,
    estado: "disponible",

    //metodo para describir el libro
    describirLibro: function () {
        return "Libro titulado " + this.titulo + " escrito por " + this.autor + " tiene " + this.capitulo + " capítulos, fue escrito en el año " + this.año + " y su estado es " + this.estado;
    }
}
console.log(libro.describirLibro());
//objeto libro y sus propriedades
let libro2 = {
    titulo: "Harry Potter",
    autor: "J.K. Rowling",
    capitulo: 10,
    año: 1997,
    estado: "prestado",

    //metodo para describir el libro
    describirLibro: function () {
        return "Libro titulado " + this.titulo + " escrito por " + this.autor + " tiene " + this.capitulo + " capítulos, fue escrito en el año " + this.año + " y su estado es " + this.estado;
}
}
console.log(libro2.describirLibro());

//objeto libro y sus propriedades
let libro3 = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    capitulo: 10,
    año: 1943,
    estado: "disponible",

    //metodo para describir el libro
    describirLibro: function () {
        return "Libro titulado " + this.titulo + " escrito por " + this.autor + " tiene " + this.capitulo + " capítulos, fue escrito en el año " + this.año + " y su estado es " + this.estado;
    },
    //metodo para agregar capitulo
    agregarCapitulo: function (nuevoCapitulo) {
        this.capitulo = this.capitulo + nuevoCapitulo;
    },
    //metodo para quitar capitulo
    quitarCapitulo: function (capituloQuitado) {
        this.capitulo = this.capitulo - capituloQuitado;
    }
}
console.log(libro3.describirLibro());
libro3.agregarCapitulo(5);
console.log(libro3.describirLibro());