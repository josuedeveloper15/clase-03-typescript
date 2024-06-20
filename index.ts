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
