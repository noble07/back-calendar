/**
 *
 * Rutas de eventos / Events
 * host + /api/events
 *
 */

const { Router } = require("express");
const { check } = require("express-validator")
const { validateJWT } = require("../middlewares/validate-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const router = Router();

// Valida que la petición tenga el JWT correcto
router.use(validateJWT)

// Obtener eventos
router.get("/", getEvents);

// Crear un nuevo evento
router.post(
  "/",
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').isDate(),
    check('end', 'Fecha de finalización es obligatoria').isDate(),
    validarCampos
  ],
  createEvent
);

// Actualizar un evento
router.put(
  "/:id",
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').isDate(),
    check('end', 'Fecha de finalización es obligatoria').isDate(),
    validarCampos
  ],
  updateEvent
);

// Eliminar un nuevo evento
router.delete("/:id", deleteEvent);

module.exports = router;
