import { Router, Request, Response } from "express";
import { PublicacaoController } from "../controllers/PublicacaoController"

const router = Router();
const publicacaoController = new PublicacaoController();

//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...
router.post("/publicacoes/postar", publicacaoController.postar);
router.get("/publicacoes/listar", publicacaoController.listar);
router.post("/");

/* Notas do Kassiel:
Seguinte, a gente precisa criar as rotas e funcionalidades para usuários e categorias
Os usuários estão relacionados com a categoria, as publicações estão relacionadas com
o usuário e com a categoria, então a gente vai precisar sempre lembrar disso.
Para adicionar novas categorias seguidas do usuário a gente não vai fazer uma nova
entrada no banco, a gente vai pesquisar pelo id do usuário e editar a entrada.
A home page de cada usuário vai ser definida pelo que o usuário segue, então a gente
vai ter que criar a homepage como um get do ID do usuário e então fazer um find de
acordo com as categorias que ele segue.
Eu tive que mudar o banco pra minha conta por causa do problema que a gente teve com o
MongoDB na quarta, mas já convidei vocês pra ele. Por enquanto nada ta funcionando por
causa da falta de funcionalidade do usuário e categoria, mas isso a gente consegue
resolver.                                                                           */

export { router };
