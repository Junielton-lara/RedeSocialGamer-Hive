import { model, Schema } from "mongoose";

const LoginSchema = new Schema(
    {
        email:{
            type: String,
            required: [true, "O campo e-mail do login é obrigatório!"]
        },
        senha:{
            type: String,
            required: [true, "O campo senha do login é obrigatório!"]
        }
    }
)

export default model("Login", LoginSchema);