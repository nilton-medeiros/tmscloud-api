import { Router } from "express";

const db = new 
const router = Router();

router.post("/:referencia", (req, res) => {
  const referencia = req.params.referencia;
  const cte = db.obterPorReferencia(referencia);
});
