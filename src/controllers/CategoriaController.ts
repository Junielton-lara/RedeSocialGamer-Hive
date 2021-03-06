import { Request, Response } from "express";
import CategoriaSchema from "../models/CategoriaSchema";

class CategoriaController{

    //Criação de uma categoria
    async criar(request: Request, response: Response){
        try {
            const novaCategoria = await CategoriaSchema.create(request.body);
            response.status(201).json(novaCategoria);
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível criar a categoria!"
            });
        }
    }

    //Listagem de categorias
    async listar(request: Request, response: Response){
        try {
            const categorias = await CategoriaSchema.find();
            response.status(200).json(categorias)
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível mostrar a lista de categorias!"
            });
        }
    }

    //Remoção de uma categoria
    async remover(request: Request, response: Response){
        try {
            const { id } = request.params;
            const categoria = await CategoriaSchema.findOneAndDelete({ _id: id });
            response.status(200).json(categoria);
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível remover a categoria!"
            })
        }
    }

    //Edição de uma categoria
    async editar(request: Request, response: Response){
        try {
            const nome = request.body.nome;
            const genero1 = request.body.genero1
            const genero2 = request.body.genero2
            const categoria = await CategoriaSchema.findOneAndUpdate({ _id: request.body._id }, { nome: nome, genero1: genero1, genero2: genero2 });
            response.status(200).json(categoria)
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível atualizar a categoria!"
            })
        }
    }

    async listarPorId(request: Request, response: Response){
        try {
            const { id } = request.params;
            const categoria = await CategoriaSchema.findOne({ _id : id});
            if(categoria != null ){
                response.status(200).json(categoria);
            }else{
                response.status(404).json({msg: "Erro!"});
            }
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Erro!"
            })
        }
    }

}

export { CategoriaController };