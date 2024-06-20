console.log("Hola mundo");
console.log(1 + 2);
console.log("Nuevo cambio");

// Tipado implicito
let estaActivo = true; // boolean
let nombre = "Goku"; // string
let edad = 18; // number
let frutas = ["Manzana", "Naranja", "Durazno"];

// Tipado explicito
let estaActivo2: boolean = false; // boolean
let nombre2: string = "Gohan";
let edad2: number = 30;
let frutas2: string[] = ["Manzana", "Durazno", "Kiwi"];
let frutasNumeros: (string | number)[] = [
  "hola",
  12,
  "mundo",
  32,
  2,
  "naranja",
];
frutasNumeros[0] = 23;
let miTupla: [number, string] = [1, "Maria"];
let miTupla2: [number, "Goku" | "Vegeta"] = [1, "Goku"];
let miTupla3: [number | undefined, "Goku" | "Vegeta"] = [undefined, "Goku"];
// miTupla[0] = "Hola mundo";

let cualquierCosa: any = true;
cualquierCosa = 1;
cualquierCosa = "Hola mundo";

enum Volumen {
  Bajo = 10,
  Medio = 50,
  Alto = 100,
}

enum UserRoles {
  Admin = "administrador",
  Seller = "vendedor",
}

let volumenActual: Volumen = Volumen.Alto;
console.log("El valor actual es: " + volumenActual);

interface Usuario {
  nombre: string;
  edad: number;
  iniciarSesion: (email: string, password: string, nickname?: string) => void;
}

let usuario: Usuario = {
  nombre: "Josue",
  edad: 29,
  iniciarSesion: (email: string, password: string, nickname?: string) => {
    console.log("Iniciando sesion...");
  },
};

let usuario2: Usuario = {
  nombre: "Pablo",
  edad: 50,
  iniciarSesion: (email: string, password: string, nickname?: string) => {
    console.log("Iniciando sesion...");
  },
};

usuario.iniciarSesion("email@fake.com", "123456");

function saludar(nombre: number): void;
function saludar(nombre: string): void;
function saludar(nombre: string | number): void {
  console.log("Hola " + nombre);
}

let myArray = [];
myArray.push(1);

class MyComponent {
  myArray = [1, 2, 3];
  constructor() {
    // this.myArray.push();
  }
}

class Producto {
  id: number;
  precio: number;
  nombre: string;
  constructor(id: number, precio: number, nombre: string) {
    this.id = id;
    this.precio = precio;
    this.nombre = nombre;
  }

  cambiarPrecio(nuevoPrecio: number): void {
    this.precio = nuevoPrecio;
  }
}

let pcGamer = new Producto(2, 5000, "PC Gamer 16gb ram"); // El resultado de usar "new" es la definicion de una instancia de la clase
let tvLed = new Producto(10, 10000, "TV Led 42'");

tvLed.cambiarPrecio(8888);
pcGamer.cambiarPrecio(5500);

console.log(pcGamer);

class MyEcommerce {
  productos: Producto[] = [];
  carrito: Producto[] = [];

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
  }

  calcularTotal(): number {
    let total = 0;
    this.carrito.forEach((p) => {
      total += p.precio;
    });
    return total;
  }

  buscarProducts() {}
}

const app = new MyEcommerce();

app.agregarAlCarrito(pcGamer);
app.agregarAlCarrito(tvLed);
console.log(`El total es ${app.calcularTotal()}`);

//  Genericos

interface Paginacion<T> {
  data: T[];
  total: number;
  hayPaginaSiguiente: boolean;
  hayPaginaAnterior: boolean;
  irPaginaSig: () => void;
}

class MyPaginacion<T> implements Paginacion<T> {
  data: T[];
  total: number;
  hayPaginaSiguiente: boolean;
  hayPaginaAnterior: boolean;
  constructor(
    data: T[],
    total: number,
    hayPaginaSiguiente: boolean,
    hayPaginaAnterior: boolean
  ) {
    this.data = data;
    this.total = total;
    this.hayPaginaSiguiente = hayPaginaSiguiente;
    this.hayPaginaAnterior = hayPaginaAnterior;
  }
  irPaginaSig(): void {}
}

new MyPaginacion<Usuario>([usuario], 100, true, false);

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
