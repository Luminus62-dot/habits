const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Obtener todos los hábitos del usuario autenticado
exports.getHabits = async (req, res) => {
  try {
    const habits = await prisma.habit.findMany({
      where: { userId: req.user.userId },
      orderBy: { date: "asc" },
    });
    res.json(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener hábitos" });
  }
};

// Crear un nuevo hábito
exports.createHabit = async (req, res) => {
  const { title, points, date } = req.body;
  if (!title || !points || !date) {
    return res.status(400).json({ message: "Faltan datos para crear el hábito" });
  }

  try {
    const habit = await prisma.habit.create({
      data: {
        title,
        points,
        date: new Date(date),
        userId: req.user.userId,
      },
    });
    res.status(201).json(habit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear hábito" });
  }
};

// Actualizar hábito (marcar completado o modificar datos)
exports.updateHabit = async (req, res) => {
  const { id } = req.params;
  const { title, points, date, completed } = req.body;

  try {
    const habit = await prisma.habit.update({
      where: { id: parseInt(id), userId: req.user.userId },
      data: {
        ...(title && { title }),
        ...(points !== undefined && { points }),
        ...(date && { date: new Date(date) }),
        ...(completed !== undefined && { completed }),
      },
    });
    res.json(habit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar hábito" });
  }
};

// Eliminar hábito
exports.deleteHabit = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.habit.delete({ where: { id: parseInt(id), userId: req.user.userId } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar hábito" });
  }
};
