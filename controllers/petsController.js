
const pets = [
    { nome: "Derek", especie: "Cachorro" }, 
    { nome: "kiara", especie: "Gato" }, 
    { nome: "Book", especie: "Cachorro" }, 
    { nome: "Lion", especie: "Cachorro" },
    { nome: "Bills", especie: "Cachorro" },
    { nome: "Yakult", especie: "Cachorro" },
    { nome: "Lua", especie: "Gata" },
]



const petsController = {
    index: (req,res) => {
        return res.json(pets)
     }
}

module.exports = petsController