//clase
export class inicioPAM {
  constructor(reglamento, lineamientos, fechasParciales, porcentajesParcial) {
    this.reglamento = reglamento;
    this.lineamientos = lineamientos;
    this.fechasParciales = fechasParciales;
    this.porcentajesParcial = porcentajesParcial;
  }

  verReglamentoPOO(id) {
    const ol = document.getElementById(id);
    this.reglamento.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      ol.appendChild(li);
    });
  }

  limpirarLista(id) {
    const ol = document.getElementById(id);
    ol.innerHTML = "";
  }

  limpiarTabla(id) {
    const tabla = document.getElementById(id);
    tabla.innerHTML = "";
  }

  verLineamientosClassroom(id) {
    const ol = document.getElementById(id);
    this.lineamientos.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      ol.appendChild(li);
    });
  }

  verFechasParciales(id) {
    const ul = document.getElementById(id);
    this.fechasParciales.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = `${element.parcial}: ${element.fecha}`;
      ul.appendChild(li);
    });
  }

  verPorcentajesParcial(id) {
    const tabla = document.getElementById(id);
    this.porcentajesParcial.forEach((row) => {
      const tr = document.createElement("tr");

      // Criterio
      const tdCriterio = document.createElement("td");
      tdCriterio.textContent = row.criterio;
      tr.appendChild(tdCriterio);

      // Parciales
      // usamos arreglo literal para no repetir código
      ["p1", "p2", "p3"].forEach((key) => {
        const td = document.createElement("td");
        td.textContent = row[key];
        tr.appendChild(td);
      });

      tabla.appendChild(tr);
    });
  }
}
