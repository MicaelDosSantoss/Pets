
const { v4: uuid } = require('uuid')
const multer = require('multer')


const storage = require('../config/storage')

const uploadAvatar = multer({ storage: storage }).single('avatar')

const servicos = [
    { id: uuid(), name: "Banho", valor: 40, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Tosa", valor: 50, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Pedicure", valor: 10, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Denticure", valor: 130, avatar: "/img/golfinho.jpg" },
    { id: uuid(), name: "Clínica", valor: 150, avatar: "/img/golfinho.jpg" }
]

const cadastro = [
    { id: uuid(), nome: "Micael", idade: 17, email: "1234@gmail.com", senha: 12, sexo: "Masculino" }
]

console.log(uuid())

const servicosController = {
    index: (req, res) => {
        return res.render("servicos/lista", { servicos })
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
    cadastroSave: (req, res) => {
        const { nome, idade, email, senha } = req.body
        cadastro.push({ id: uuid(), nome, idade, email, senha })
        return res.redirect(cadastro)
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
    }
}


module.exports = servicosController