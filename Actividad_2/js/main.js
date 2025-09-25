import { inicioPAM } from "./inicioPAM.js";

// Datos
const reglamento = [
  "Participación activa en clase",
  "Trabajos en classroom ",
  "Entregas completas",
  "Respetar tiempos de entrega ",
  "Presentación de trabajo calidad universitaria",
  "Asistencia del 80%",
];

const lineamientos = [
  "Todos los trabajos llevan portada estilo libre: Logo UPQ, tema, datos de alumno, materia",
  "Conclusiones de aprendizaje: Descripción de lo aprendido durante el desarrollo de la actividad ",
  "No usar chat en prácticas o examen",
];

const fechasParciales = [
  { parcial: "1er Parcial", fecha: "30-09-25" },
  { parcial: "2do Parcial", fecha: "04-10-25" },
  { parcial: "3er Parcial", fecha: "02-12-25" },
  { parcial: "Final", fecha: "08-12-25" },
];

const porcentajesParcial = [
  { criterio: "EVIDENCIA DE CONOCIMIENTO", p1: "40%", p2: "40%", p3: "20%" },
  { criterio: "EVIDENCIA DE DESEMPEÑO", p1: "20%", p2: "20%", p3: "10%" },
  { criterio: "EVIDENCIA DE PRODUCTO", p1: "30%", p2: "20%", p3: "40%" },
  { criterio: "PROYECTO INTEGRADOR", p1: "10%", p2: "20%", p3: "30%" },
];

// Instancia
document.addEventListener("DOMContentLoaded", () => {
  const AplicacionesMoviles = new inicioPAM(
    reglamento,
    lineamientos,
    fechasParciales,
    porcentajesParcial,
  );

  const bttreg = document.getElementById("btt-reg");
  const bttlin = document.getElementById("btt-lin");
  const bttfch = document.getElementById("btt-fch");
  const btttbl = document.getElementById("btt-tbl");

  bttreg.addEventListener("click", () => {
    if (!confirm("¿Desea cargar el reglamento?")) return;
    AplicacionesMoviles.limpirarLista("reg");
    AplicacionesMoviles.verReglamentoPOO("reg");
  });

  bttlin.addEventListener("click", () => {
    if (!confirm("¿Desea cargar los lineamientos?")) return;
    AplicacionesMoviles.limpirarLista("lin");
    AplicacionesMoviles.verLineamientosClassroom("lin");
  });
  bttfch.addEventListener("click", () => {
    if (!confirm("¿Desea cargar las fechas parciales?")) return;
    AplicacionesMoviles.limpirarLista("fch");
    AplicacionesMoviles.verFechasParciales("fch");
  });
  btttbl.addEventListener("click", () => {
    if (!confirm("¿Desea cargar los porcentajes por parcial?")) return;
    AplicacionesMoviles.limpirarLista("tbl");
    AplicacionesMoviles.verPorcentajesParcial("tbl");
  });
});
