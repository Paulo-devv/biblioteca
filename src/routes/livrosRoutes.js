import express from "express";
import LivroController from "../controllers/livroController.js";


const routes = express.Router();

routes.get("/livros", LivroController.listLivros);
routes.get("/livros/busca", LivroController.listLivrosByEditora)
routes.post("/livros", LivroController.siginLivro);
routes.get("/livros/:id", LivroController.listLivroById);
routes.put("/livros/:id", LivroController.atualizarLivroById);
routes.delete("/livros/:id", LivroController.deleteLivro);




export default routes; 