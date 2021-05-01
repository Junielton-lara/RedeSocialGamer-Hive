import { Router } from "express";
import { PublicacaoController } from "../controllers/PublicacaoController";
import { UsuarioController } from "../controllers/UsuarioController";
import { CategoriaController } from "../controllers/CategoriaController";

const router = Router();
const publicacaoController = new PublicacaoController();
const usuarioController = new UsuarioController();
const categoriaController = new CategoriaController();


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
