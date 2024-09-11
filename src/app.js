import express from "express";

import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const connection = await connectDataBase();

connection.on("error", (erro) => {
    console.error("erro de conexão", erro)
});

connection.once("open", () => {
    console.log("conexão com o banco feita com sucesso")
});

const app = express();
routes(app);

app.delete("/livros/:id",(req, res) => {
    const index = searchBook(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro excluido!");
});

export default app;