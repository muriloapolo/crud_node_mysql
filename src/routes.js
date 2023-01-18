import { Router } from 'express';
import SelecaoController from './app/controllers/SelecaoController.js'
const router = Router();
//ROTAS
//GET
router.get("/selecoes", SelecaoController.index);
//GET por ID
router.get("/selecoes/:id", SelecaoController.show);
//POST
router.post("/selecoes", SelecaoController.store);
//PUT
router.put("/selecoes/:id", SelecaoController.update);
//DELETE
router.delete("/selecoes/:id", SelecaoController.delete);

export default router