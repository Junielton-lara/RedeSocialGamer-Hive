import { Request, Response } from "express";
import PublicacaoSchema from "../models/PublicacaoSchema";

class PublicacaoController {

  async postar(request: Request, response: Response) {
    const publi = request.body;
    const publicacaoCadastrado = await PublicacaoSchema.create(publi);
    response.json(publicacaoCadastrado);
  }


  listar(request: Request, response: Response) {
    response.json(PublicacaoSchema.find());
  }

}

export { PublicacaoController };
