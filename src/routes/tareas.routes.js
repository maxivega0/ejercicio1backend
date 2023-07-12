import { Router } from "express";



const router = Router();

router.route('/tarea').get(obtenerTareas)