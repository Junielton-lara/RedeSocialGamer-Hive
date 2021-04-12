import { Router, Request, Response } from "express";
import { PublicacaoController } from "../controllers/PublicacaoController"

const router = Router();
const publicacaoController = new PublicacaoController();

//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...
router.post("/publicacoes/postar", publicacaoController.postar);
router.get("/publicacoes/listar", publicacaoController.listar);
router.post("/");

export { router };
