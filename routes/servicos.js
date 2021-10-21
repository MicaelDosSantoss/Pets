
const express = require("express")
const servicosController = require("../controllers/servicosController")

const router = express.Router();
const multer = require('multer');
const storage = require('../config/storage')

const upload = multer({storage: storage})

router.post('/servicos',upload.single('avatar'), (req,res) =>{
    res.json(req.file)
})


router.get("/servicos",servicosController.index)
router.get("/servicos/cadastro",servicosController.cadastro)
router.get('/servicos/:id/edit',servicosController.edit)
router.post("/servicos",servicosController.save)
router.post("/cadastro",servicosController.cadastroSave)
router.put('/servicos/:id',servicosController.update)
router.delete('/servicos/:id',servicosController.delete)


module.exports = router;