import express from "express";
import routes from "./routes.js";

const app = express();

//Indicar para o express ler o body com o formato Json
app.use(express.json());

//usar o router
app.use(routes);

//Exportamos os daods da varável APP
export default app;
