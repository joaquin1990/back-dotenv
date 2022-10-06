import { Router } from "express";
import { fork } from "child_process";

const router = Router();
const path = fork("./src/utils/worker.js");

router.route("/").get((req, res) => {
  console.log("entro");
  const cantidad = parseInt(req.query.cant) || 1000000;
  path.send(cantidad);
  path.on("message", (randoms) => {
    res.send(randoms);
  });
});

export default router;
