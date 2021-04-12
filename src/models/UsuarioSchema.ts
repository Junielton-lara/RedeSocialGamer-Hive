import { model, Schema} from "mongoose";

const UsuarioSchema = new Schema(
  {
    nome:{
      type: String,
      required: [true, "O campo nickname é obrigatório!"]
    },
    email:{
      type: String,
      required: [true, "O campo email é obrigatório!"]
    },
    senha:{
      type: String,
      required: [true, "O campo senha é obrigatório!"]
    }
  }
);

export {UsuarioSchema};