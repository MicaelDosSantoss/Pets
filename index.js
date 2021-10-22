const express = require('express')
const app = express()
const methodOverride = require('method-override')
const petRouter = require('./routes/rotasPet')
const servicosRouter = require("./routes/servicos")
const { check,body, validationResult } = require('express-validator');



app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.set('view engine',"ejs")


app.use(petRouter)
app.use(servicosRouter)


app.get("/contato", (req,res) => {
    res.render("contato")
})

app.post('/contato', [check('nomeContato').isLength( {min:3}  ),check('mensagem').isLength({min:10}) ] , (req,res) => { 
    return res.json(req.body)
 })


app.get("/", (req,res) => {
    res.render("index")
})


app.listen(3000, () => {
    console.log("server rondando")
})