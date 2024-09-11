import express from "express";
import AutorController from "../controllers/autorController.js";


const routes = express.Router();

routes.get("/autores", AutorController.listAutor);
routes.post("/autores", AutorController.siginAutor);
routes.get("/autores/:id", AutorController.listAutorById);
routes.put("/autores/:id", AutorController.atualizarAutorById);
routes.delete("/autores/:id", AutorController.deleteAutor);




export default routes; 