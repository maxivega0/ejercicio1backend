import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, obtenerTareaID, obtenerTareas } from "../controllers/tareas.controller";

borrarTarea

const router = Router();

router.route('/tareas').get(obtenerTareas).post(crearTarea);
router.route('/tareas/:id')
.get(obtenerTareaID)
.delete(borrarTarea)
.put(editarTarea)


export default router