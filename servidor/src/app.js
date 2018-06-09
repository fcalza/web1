import express from 'express'

const app = express()

app.get("/dados", (req, res) => {
  const dados = {
    produtos: ['Jan', 'Fev', 'Mar', 'Abr'],
    quantidade: [23, 34, 12, 28]
  }
  res.json(dados)
})

app.get("/dadosComprasFinalizadas", (req, res) => {
  const dadosComprasFinalizadas = {
    produtos: ['produto1', 'produto2', 'produto3', 'produto4'],
    quantidade: [232, 34, 122, 283]
  }
  res.json(dados)
})


app.listen(3001, () => console.log('No ar, porta 3001'))
