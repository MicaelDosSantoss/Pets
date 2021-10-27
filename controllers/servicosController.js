
const { v4: uuid } = require('uuid')
const multer = require('multer')
const storage = require('../config/storage')
const { check,body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const fs = require('fs')




const uploadAvatar = multer({ storage: storage }).single('avatar')

const servicos = [
    { id: uuid(), name: "Banho", valor: 40, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Tosa", valor: 50, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Pedicure", valor: 10, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Denticure", valor: 130, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Clínica", valor: 150, avatar: "/img/golfinho.jpg" }
]

// const cadastro = [
//     nome: "Micael", idade: 17, email: "1234@gmail.com", senha: 12,}
// ]


console.log(uuid())

const servicosController = {
    index: (req, res) => {
        return res.render("servicos/lista", { servicos })
    },
    users:(req,res) => {
        
const content = fs.readFileSync('usuarios.json',"utf-8")
const usuarios = JSON.parse(content)

const body = req.body

     const hash = bcrypt.hashSync(body.senha,10)

const { nome, idade, email, senha } = req.body
usuarios.push({ nome, idade, email, senha: hash })


return res.json(usuarios)
    },
    save: (req, res) => {

        uploadAvatar(req, res, () => {
            const { name, valor } = req.body

            if (req.file != undefined) {
                avatar = "/img/avatares/" + req.file.originalname;
            } else {
                avatar = "/img/golfinho.jpg"
            }
           
            servicos.push({ id: uuid(), name, valor: Number(valor), avatar })
            return res.redirect('/servicos')
        })


    },

    cadastro: (req, res) => {
        return res.render("servicos/cadastro")
    },

    telaCadastro: (req,res) => {
        res.render('cadastro')
    },

    cadastroSave: (req, res) => {
        const content = fs.readFileSync('usuarios.json',"utf-8")
const usuarios = JSON.parse(content)

        const { nome, idade, email, senha } = req.body
        usuarios.push({ id: uuid(), nome, idade, email, senha })

       
        const body = req.body

        const hash = bcrypt.hashSync(body.senha,10)
        
        return res.json(hash)
        
    },

    update: (req, res) => {
        uploadAvatar(req, res, () => {
            const { name, valor } = req.body
            const { id } = req.params
            const servicoIndex = servicos.findIndex(servico => servico.id == id)
            let avatar = '';

            
            if (req.file != undefined) {
                avatar = "/img/avatares/" + req.file.originalname
            } else {
                avatar = "/img/golfinho.jpg"
            }

            const servicosAtulizado = {
                id,
                name,
                valor: Number(valor),
                avatar: avatar
            }
            
            servicos[servicoIndex] = servicosAtulizado;
            return res.redirect("/servicos")
        })
    },
    edit: (req, res) => {
        const { id } = req.params
        const servico = servicos.find(servico => servico.id == id)
        return res.render("servicos/edit", { servico })
    },
    delete: (req, res) => {
        const { id } = req.params;
        const servicoIndex = servicos.findIndex(servico => servico.id == id)
        servicos.splice(servicoIndex, 1)

        return res.redirect('/servicos')
    },
    loginSave: (req,res) => {
        
    }, loginMostrar: (req,res) => {
        res.render('login')
    }
}




module.exports = servicosController