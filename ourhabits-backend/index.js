require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const userRoutes = require("./routes/userRoutes");
const habitRoutes = require("./routes/habitRoutes");

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/habits", habitRoutes);

app.get("/", (req, res) => {
  res.send("✅ OurHabits API funcionando correctamente.");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

module.exports = app;
