const express = require('express')
const app = express()
const port = 3000

app.get('/', (reg, res) =>{
    res.json({"mensagem": "teste de conexâ"})
    res.end()
})

app.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`)
})