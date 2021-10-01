var express = require('express')

const router = express.Router();

const servicosController = require('../controllers/servicosController')
const petsController = require('../controllers/petsController')

router.get("/pets", petsController.index)
router.get("/servicos", servicosController.index)



module.exports = router