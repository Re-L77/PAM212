const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 },
];
const nombres = productos
  .filter((productos) => productos.precio > 1000)
  .map((productos) => productos.nombre);
console.log(nombres);
