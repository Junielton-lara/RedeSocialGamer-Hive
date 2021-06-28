import { Router } from "express";
import { PublicacaoController } from "../controllers/PublicacaoController";
import { UsuarioController } from "../controllers/UsuarioController";
import { CategoriaController } from "../controllers/CategoriaController";
import { LoginController } from "../controllers/LoginController";

const router = Router();
const publicacaoController = new PublicacaoController();
const usuarioController = new UsuarioController();
const categoriaController = new CategoriaController();
const loginController = new LoginController();


//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...
router.post("/publicacoes/postar", publicacaoController.postar); //Postar publicações
router.get("/publicacoes/listar", publicacaoController.listar); //Listar publicações sem filtro
router.get("/publicacoes/listar/autor/:id", publicacaoController.listarPorAutor); //Listar publicações pelo autor usando o ID
router.get("/publicacoes/listar/categoria/:id", publicacaoController.listarPorCategoria); //Listar publicações pela categoria usando o ID
router.delete("/publicacoes/remover/:id", publicacaoController.remover); //Remover publicações usando o ID
router.get("/:id", publicacaoController.homepage); //Página inicial de cada usuário, mostrando as publicações de categorias que eles seguem
router.post("/usuarios/cadastrar", usuarioController.cadastrar); //Cadastro de usuários
router.get("/usuarios/listar", usuarioController.listar); //Listagem de usuários
router.put("/usuarios/categorias/adicionar", usuarioController.categoria); //Adição de categorias seguidas pelo usuário, que também serve para editar o usuário
router.delete("/usuarios/remover/:id", usuarioController.remover); //Remoção do usuário usando o ID
router.post("/categorias/criar", categoriaController.criar); //Criação de categorias
router.get("/categorias/listar", categoriaController.listar); //Listagem de categorias
router.put("/categorias/editar", categoriaController.editar); //Edição de categorias
router.delete("/categorias/remover/:id", categoriaController.remover); //Remoção de categorias
router.post("/login", loginController.verificar);//Verificar o login

export { router };
