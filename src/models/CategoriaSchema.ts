import { model, Schema} from "mongoose";

const CategoriaSchema = new Schema(
  {
    nome:{ //Nome da categoria
      type: String,
      required: [true, "O campo nome é obrigatório!"]
    },
    genero1:{ //Primeiro gênero da categoria
        type: String,
        enum: ["FPS", "MOBA", "RPG", "MMORPG", "BATTLE ROYALE", "AÇÃO", "TERROR", "ESTRATÉGIA",
               "SOBREVIVÊNCIA", "AVENTURA", "SIMULAÇÃO", "CRIATIVO", "JOGO DE PLATAFORMA", 
               "JOGO DE CARTAS E TABULEIRO", "QUEBRA-CABEÇAS", "ROGUE LIKE", "JOGO DE CORRIDA",
               "JOGO MUSICAL E DE RITMO", "JOGO INDIE", "ESPORTES", "MUNDO ABERTO", 
               "JOGO EDUCACIONAL", "JOGO MOBILE"], //Escolher apenas um
        uppercase: true
    },
    genero2:{ //Segundo gênero da categoria
        type: String,
        enum: ["FPS", "MOBA", "RPG", "MMORPG", "BATTLE ROYALE", "AÇÃO", "TERROR", "ESTRATÉGIA",
        "SOBREVIVÊNCIA", "AVENTURA", "SIMULAÇÃO", "CRIATIVO", "JOGO DE PLATAFORMA", 
        "JOGO DE CARTAS E TABULEIRO", "QUEBRA-CABEÇAS", "ROGUE LIKE", "JOGO DE CORRIDA",
        "JOGO MUSICAL E DE RITMO", "JOGO INDIE", "ESPORTES", "MUNDO ABERTO", 
        "JOGO EDUCACIONAL", "JOGO MOBILE", ""], //Não é necessário caso a categoria não tenha um segundo gênero
        uppercase: true
    }
  }
);

export default model("categorias", CategoriaSchema);