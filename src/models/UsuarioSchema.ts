import { model, Schema} from "mongoose";
import PublicacaoSchema from "../models/PublicacaoSchema";
import CategoriaSchema from "../models/CategoriaSchema";

const UsuarioSchema = new Schema(
  {
    nome:{ //Nome do usuário
      type: String,
      required: [true, "O campo nome é obrigatório!"]
    },
    email:{ //E-mail do usuário
      type: String,
      required: [true, "O campo email é obrigatório!"]
    },
    senha:{ //Senha do usuário
      type: String,
      required: [true, "O campo senha é obrigatório!"]
    },
    publicacoes: [{ //Publicações do usuário
      type: Schema.Types.ObjectId,
      ref: 'publicacoes'
    }],
    categoriasSeguidas: [{ //Categorias que o usuário segue
      type: Schema.Types.ObjectId,
      ref: 'categorias'
    }]
  }
);

export default model("usuarios", UsuarioSchema);