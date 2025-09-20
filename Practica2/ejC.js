const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 },
];
console.log("---------FIND()---------");
console.log(personas.find((personas) => personas.nombre == "Luis"));
console.log("---------FOREACH()---------");
personas.forEach((element) =>
  console.log("Nombre: ", element.nombre, ", Edad: ", element.edad)
);
console.log("---------REDUCE()---------");
const suma = personas.reduce((total, persona) => total + persona.edad, 0);

console.log("La suma de las edades es:", suma);
