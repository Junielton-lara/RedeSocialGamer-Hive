import { model, Schema } from "mongoose";

const PublicacaoSchema = new Schema(
  {
    imagem:{ //Link de imagem apenas
      type: String 
    },
    corpo:{ //Texto da publicação
      type: String, 
      required: [true, "A publicação não pode não ter conteúdo!"]
    },
    autor: { //Autor da publicação
      type: Schema.Types.ObjectId, //Referenciar o autor usando o ID do usuário
      ref: 'usuarios'
    },
    categoria: { //Categoria da publicação
      type: Schema.Types.ObjectId, //Usar o ID da publicação para referenciar
      ref: 'categorias'
    }
  }
);

export default model("publicacoes", PublicacaoSchema);