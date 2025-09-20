const persona = {
  nombre: "Juan Mustaine",
  edad: 20,
  direccion: {
    ciudad: "Qro",
    pais: "MX",
  },
};

const {
  nombre,
  edad,
  direccion: { ciudad, pais },
} = persona;

console.log(
  "Me llamo ",
  nombre,
  " tengo ",
  edad,
  " años y vivo en ",
  ciudad + " en el país " + pais
);
