import livro from "../models/livros.js";
import { autor } from "../models/autor.js";


class LivroController {

    static async listLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição` });
        }

    };

    static async listLivroById (req, res) {
        try {
            const id = req.params.id;
            const livroEcontrado = await livro.findById(id);
            res.status(200).json(livroEcontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na requisição do livro` });
        }

    };

    static async siginLivro (req, res) {
        const newLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(newLivro.autor);
            const livroCompleto = { ...newLivro, autor: { ...autorEncontrado._doc } };
            const LivroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso", livro: LivroCriado }); 
        } catch (error) {
             res.status(500).json({ message: `${error.message} - Erro ao cadastrar livro`});         
        }
    }

    static async atualizarLivroById (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na aualização do livro` });
        }

    };

    static async deleteLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluido com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na exclusão` });
        }

    };

    static async listLivrosByEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na busca` });
        }
    }

}




export default LivroController;