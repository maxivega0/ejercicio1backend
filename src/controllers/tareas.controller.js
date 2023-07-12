// import { validationResult } from "express-validator";
import Tarea from "../models/tarea";

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find(); // trae la coleccion de productos (lista de productos)
    res.status(200).json(tareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar las tareas",
    });
  }
};

export const obtenerTareaID = async (req, res) => {
  try {
    console.log(req.params.id);
    const tarea = await Tarea.findById(req.params.id);
    res.status(200).json(tarea);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se encontró el producto",
    });
  }
};

export const crearTarea = async (req, res) => {
  try {
    console.log(req.body);
    const tareaNueva = new Tarea(req.body); // Producto es un modelo
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "La tarea se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear la tarea",
    });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La tarea fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo borrar la tarea",
    });
  }
};
export const editarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndUpdate(req.params.id, req.body); //en el primer parametro recibimos el id y lo cambiamos por los datos del body
    res.status(200).json({
      mensaje: "La tarea fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error, no se pudo editar la tarea",
    });
  }
};
