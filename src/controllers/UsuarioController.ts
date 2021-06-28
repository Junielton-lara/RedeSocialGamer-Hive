import { Request, Response } from "express";
import UsuarioSchema from "../models/UsuarioSchema";

class UsuarioController{

    //Cadastro de um usuário
    async cadastrar(request: Request, response: Response){
        try {
            const novoUsuario = await UsuarioSchema.create(request.body);
            response.status(201).json(novoUsuario);
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível adicionar o usuário!"
            });
        }
    }

    //Listagem de todos os usuários
    async listar(request: Request, response: Response){
        try {//O uso de nome e email: 1 é para mostrar apenas esses campos de todos do Schema de Usuário na tela
            const usuarios = await UsuarioSchema.find({}, {nome: 1, email: 1}).populate('categoriasSeguidas', 'nome');
            /*O comando populate serve para popular o campo com as informações usando o ID do objeto, após a vírgula é definido
            qual ou quais campos devem ser mostrados*/
            response.status(200).json(usuarios);
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível recuperar a lista de usuários!"
            });
        }
    }


    //Adicionar categoria seguida a um usuário
    async categoria(request: Request, response: Response){
        try {
            const novaCategoria = request.body.categoriasSeguidas;
            const usuario = await UsuarioSchema.findOneAndUpdate({ nome: request.body.nome }, { "$push": { "categoriasSeguidas": novaCategoria}});
            /* O uso do $push para o Update é para adicionar a nova categoria seguida, ao invés de sobrescrever o campo já existente */
            response.status(200).json(usuario)
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível atualizar as categorias seguidas pelo usuário!"
            })
        }
    }


    //Remoção de um usuário usando o ID
    async remover(request: Request, response: Response){
        try {
            const { id } = request.params;
            const usuario = await UsuarioSchema.findOneAndDelete({ _id: id });
            response.status(200).json(usuario)
        } catch (error) {
            response.status(400);
        }
    }


}

export { UsuarioController };