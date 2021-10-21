const express = require('express')
const app = express()
const methodOverride = require('method-override')
const petRouter = require('./routes/rotasPet')
const servicosRouter = require("./routes/servicos")


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(express.static('public'))
app.set('view engine',"ejs")


app.use(petRouter)
app.use(servicosRouter)


app.get("/", (req,res) => {
    res.render("index")
})


app.listen(3000, () => {
    console.log("server rondando")
})