import express, { Request, Response } from "express";
import { router } from "./config/routes";
import { mongoose } from "./config/database";
const app = express();
const database = mongoose;

console.clear();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
