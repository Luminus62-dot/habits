require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const userRoutes = require("./routes/userRoutes");

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("✅ OurHabits API funcionando correctamente.");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
