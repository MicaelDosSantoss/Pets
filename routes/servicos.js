
const express = require("express")
const servicosController = require("../controllers/servicosController")
const router = express.Router();
// const multer = require('multer');



router.get('/servicos/:id/edit',servicosController.edit)

router.get("/servicos",servicosController.index)
router.get("/servicos/cadastro",servicosController.cadastro)
router.post("/servicos",servicosController.save)
router.post("/cadastro",servicosController.cadastroSave)
router.put('/servicos/:id',servicosController.update)
router.delete('/servicos/:id',servicosController.delete)


module.exports = router;