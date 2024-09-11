import { autor } from "../models/autor.js";

class AutorController {

    static async listAutor (req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }

    };

    static async listAutorById (req, res) {
        try {
            const id = req.params.id;
            const autorEcontrado = await autor.findById(id);
            res.status(200).json(autorEcontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do autor` });
        }

    };

    static async siginAutor (req, res) {
        try {
            const newAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: newAutor }); 
        } catch (error) {
             res.status(500).json({ message: `${error.message} - Erro ao cadastrar autor`});         
        }
    }

    static async atualizarAutorById (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na aualização do autor` });
        }

    };

    static async deleteAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor excluido com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na exclusão` });
        }

    };

}




export default AutorController;