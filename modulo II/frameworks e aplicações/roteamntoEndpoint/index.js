const express = require('express');
const bodyParser = require('body-parser');
const rotasNotas = require('./rotas')
const app = express();

app.use(bodyParser.json());
app.use('/notas', rotasNotas)
app.listen(3000, () => console.log("Servidor funcionando corretamente!!"))