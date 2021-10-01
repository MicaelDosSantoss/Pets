const servicos = [
    {nome: "Banho"},
    {nome: "Tosa"},
    {nome: "Pedicure"},
    {nome: "Denticure"},
    {nome: "Clínica"}
]

const servicosController = {
    index: (req,res) => {
        return res.json(servicos)
    }
}

module.exports = servicosController