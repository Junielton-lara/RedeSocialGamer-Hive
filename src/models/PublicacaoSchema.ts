import { model, Schema } from "mongoose";
<<<<<<< HEAD
=======
import UsuarioSchema from "../models/UsuarioSchema";
import CategoriaSchema from "../models/CategoriaSchema";
>>>>>>> b18e1185a246b2f64a8bd598e0c16f7c1da9ba20

const PublicacaoSchema = new Schema(
  {
    imagem:{ //Link de imagem apenas
      type: String 
    },
    corpo:{ //Texto da publicação
      type: String, 
      required: [true, "A publicação não pode não ter conteúdo!"]
    },
<<<<<<< HEAD
    autor: { //Autor da publicação
      type: Schema.Types.ObjectId, //Referenciar o autor usando o ID do usuário
      ref: 'usuarios'
    },
    categoria: { //Categoria da publicação
      type: Schema.Types.ObjectId, //Usar o ID da publicação para referenciar
      ref: 'categorias'
    }
=======
    autor: [{ //Autor da publicação
      type: Schema.Types.ObjectId, //Referenciar o autor usando o ID do usuário
      ref: 'usuarios'
    }],
    categoria: [{ //Categoria da publicação
      type: Schema.Types.ObjectId, //Usar o ID da publicação para referenciar
      ref: 'categorias'
    }]
>>>>>>> b18e1185a246b2f64a8bd598e0c16f7c1da9ba20
  }
);

export default model("publicacoes", PublicacaoSchema);