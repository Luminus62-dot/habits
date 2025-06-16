const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("✅ OurHabits Backend está funcionando correctamente.");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API de prueba funcionando 🚀" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
