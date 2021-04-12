import { model, Schema } from "mongoose";
import { UsuarioSchema } from "./UsuarioSchema"

const PublicacaoSchema = new Schema(
  {
    imagem:{
      type: String
    },
    corpo:{
      type: String,
      required: [true, "A publicação não pode não ter conteúdo!"]
    },
    autor: [UsuarioSchema]
  }
);

export default model("publicacoes", PublicacaoSchema);