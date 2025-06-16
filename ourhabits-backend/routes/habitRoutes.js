const express = require("express");
const router = express.Router();
const habitController = require("../controllers/habitController");
const authMiddleware = require("../middleware/authMiddleware");

// Proteger todas las rutas con autenticación
router.use(authMiddleware);

router.get("/", habitController.getHabits);
router.post("/", habitController.createHabit);
router.put("/:id", habitController.updateHabit);
router.delete("/:id", habitController.deleteHabit);

module.exports = router;
