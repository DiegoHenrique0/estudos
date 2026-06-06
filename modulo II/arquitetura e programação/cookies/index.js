const express = require('express');
const app = express();
app.get('/setcookie', (req, res) => {
    res.cookie(`hello word`, `acessado em ${new Date()}`);
    res.send('Cookie salvo com sucesso');
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});