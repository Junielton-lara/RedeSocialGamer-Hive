import { Request, Response } from "express";
import LoginSchema from "../models/LoginSchema";
import UsuarioSchema from "../models/UsuarioSchema";

class LoginController{

    async verificar(request: Request, response: Response){
        try {
            const verify = request.body;
            const found = await UsuarioSchema.findOne({ email: verify.email, senha: verify.senha});
            if(found != null){
                response.status(200).json(found);
            }else{
                const incorrect = {msg: "Usuário ou senha incorretos!"};
                response.status(404).json(incorrect);
            }
        } catch (error) {
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível encontrar um usuário!"
            });
        }
    }

}

export {LoginController}