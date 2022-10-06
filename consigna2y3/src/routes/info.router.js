import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.send({
    argumentos: process.argv.slice(2),
    node_version: process.version,
    process_id: process.pid,
    plataforma: process.platform,
    memoria_reservada: process.memoryUsage(),
    excec_path: process.execPath,
    project_path: process.cwd(),
  });
});

export default router;
