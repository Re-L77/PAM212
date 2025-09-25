fetch("https://api.weatherapi.com/v1/current.json?key=demo&q=London")
  .then((respuesta) => respuesta.json())
  .then((datos) => console.log("☀️ Clima en Londres:", datos.current.temp_f, "°C"))
  .catch((error) => console.log("❌ No se pudo obtener el clima:", error));