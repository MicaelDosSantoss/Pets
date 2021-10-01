const express = require('express')
const petRouter = require('./routes/rotasPet')

const app = express()

app.set('view engine',"ejs")

app.get('/' ,(req,res) => {

})

app.use(petRouter)


app.listen(3000, () => {
    console.log("server rondando")
})