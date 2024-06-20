"use strict";
console.log("Hola mundo");
console.log(1 + 2);
console.log("Nuevo cambio");
// Tipado implicito
let estaActivo = true; // boolean
let nombre = "Goku"; // string
let edad = 18; // number
let frutas = ["Manzana", "Naranja", "Durazno"];
// Tipado explicito
let estaActivo2 = false; // boolean
let nombre2 = "Gohan";
let edad2 = 30;
let frutas2 = ["Manzana", "Durazno", "Kiwi"];
let frutasNumeros = [
    "hola",
    12,
    "mundo",
    32,
    2,
    "naranja",
];
frutasNumeros[0] = 23;
let miTupla = [1, "Maria"];
let miTupla2 = [1, "Goku"];
let miTupla3 = [undefined, "Goku"];
// miTupla[0] = "Hola mundo";
let cualquierCosa = true;
cualquierCosa = 1;
cualquierCosa = "Hola mundo";
var Volumen;
(function (Volumen) {
    Volumen[Volumen["Bajo"] = 10] = "Bajo";
    Volumen[Volumen["Medio"] = 50] = "Medio";
    Volumen[Volumen["Alto"] = 100] = "Alto";
})(Volumen || (Volumen = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "administrador";
    UserRoles["Seller"] = "vendedor";
})(UserRoles || (UserRoles = {}));
let volumenActual = Volumen.Alto;
console.log("El valor actual es: " + volumenActual);
let usuario = {
    nombre: "Josue",
    edad: 29,
    iniciarSesion: (email, password, nickname) => {
        console.log("Iniciando sesion...");
    },
};
let usuario2 = {
    nombre: "Pablo",
    edad: 50,
    iniciarSesion: (email, password, nickname) => {
        console.log("Iniciando sesion...");
    },
};
usuario.iniciarSesion("email@fake.com", "123456");
function saludar(nombre) {
    console.log("Hola " + nombre);
}
let myArray = [];
myArray.push(1);
class MyComponent {
    constructor() {
        this.myArray = [1, 2, 3];
        // this.myArray.push();
    }
}
class Producto {
    constructor(id, precio, nombre) {
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
    }
    cambiarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
}
let pcGamer = new Producto(2, 5000, "PC Gamer 16gb ram"); // El resultado de usar "new" es la definicion de una instancia de la clase
let tvLed = new Producto(10, 10000, "TV Led 42'");
tvLed.cambiarPrecio(8888);
pcGamer.cambiarPrecio(5500);
console.log(pcGamer);
class MyEcommerce {
    constructor() {
        this.productos = [];
        this.carrito = [];
    }
    agregarAlCarrito(producto) {
        this.carrito.push(producto);
    }
    calcularTotal() {
        let total = 0;
        this.carrito.forEach((p) => {
            total += p.precio;
        });
        return total;
    }
    buscarProducts() { }
}
const app = new MyEcommerce();
app.agregarAlCarrito(pcGamer);
app.agregarAlCarrito(tvLed);
console.log(`El total es ${app.calcularTotal()}`);
class MyPaginacion {
    constructor(data, total, hayPaginaSiguiente, hayPaginaAnterior) {
        this.data = data;
        this.total = total;
        this.hayPaginaSiguiente = hayPaginaSiguiente;
        this.hayPaginaAnterior = hayPaginaAnterior;
    }
    irPaginaSig() { }
}
new MyPaginacion([usuario], 100, true, false);
// interface PaginacionUsuarios {
//   data: Usuario[];
//   total: number;
//   hayPaginaSiguiente: boolean;
//   hayPaginaAnterior: boolean;
// }
// interface PaginacionProductos {
//   data: Producto[];
//   total: number;
//   hayPaginaSiguiente: boolean;
//   hayPaginaAnterior: boolean;
// }
// const paginacionUsuarios: Paginacion<Usuario> = {
//   data: [usuario, usuario2],
//   total: 2,
//   hayPaginaSiguiente: true,
//   hayPaginaAnterior: true,
// };
// // paginacionUsuarios.data[0]?.iniciarSesion()
// const paginacionProductos: Paginacion<Producto> = {
//   data: [tvLed, pcGamer],
//   total: 2,
//   hayPaginaSiguiente: true,
//   hayPaginaAnterior: true,
// };
