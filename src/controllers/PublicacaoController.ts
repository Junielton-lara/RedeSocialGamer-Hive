import { Request, Response } from "express";
import PublicacaoSchema from "../models/PublicacaoSchema";

class PublicacaoController {


  //Postagem de uma nova publicação
  async postar(request: Request, response: Response) {
    try {
      const publi = request.body;
      const publicacaoCadastrado = await PublicacaoSchema.create(publi);
      response.status(201).json(publicacaoCadastrado);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível postar publicação!"
      });
    }
  }


  //Listagem de publicações sem filtro
  async listar(request: Request, response: Response) {
    try {
      const publi = await PublicacaoSchema.find().populate('autor', 'nome').populate('categoria', 'nome');
      response.status(200).json(publi);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível mostrar a lista de publicações!"
      });
    }
    
  }


  //Listar publicações por autor
  async listarPorAutor(request: Request, response: Response){
    try {
      const {id} = request.params;
      const publi = await PublicacaoSchema.find({ autor: id  }).populate('autor', 'nome').populate('categoria', 'nome');
      response.status(200).json(publi);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível mostrar as publicações do autor solicitado!"
      });
    }
  }


  //Listar publicações por categoria
  async listarPorCategoria(request: Request, response: Response){
    try {
      const { id } = request.params;
      const publi = await PublicacaoSchema.find({ categoria: id }).populate('autor', 'nome').populate('categoria', 'nome');
      response.status(200).json(publi);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível mostrar as publicações da categoria solicitada!"
      })
    }
  }

  
  //Remover publicação usando o ID
  async remover(request: Request, response: Response){
    try {
      const { id } = request.params;
      const publi = await PublicacaoSchema.findOneAndDelete({ _id: id });
      response.status(200).json(publi);
    } catch (error) {
      response.json({
        data: error,
        error: true,
        msg: "Não foi possível remover a publicação!"
      });
    }
    
  }


  //Homepage do usuário
  async homepage(request: Request, response: Response){
    try {
      const { id } = request.params;
      const categorias = await PublicacaoSchema.findOne({ autor: id }, {autor: 1, _id: 0}).populate('autor', 'categoriasSeguidas');
      const cat = categorias.autor.categoriasSeguidas;
      const publi = await PublicacaoSchema.find({ categoria: cat }, {_id:0}).populate('autor', 'nome').populate('categoria', 'nome');
      response.status(200).json(publi);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível mostrar a homepage do usuário atual!"
      });
    }
  }


}

export { PublicacaoController };
