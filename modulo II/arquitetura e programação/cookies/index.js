const express = require('express');
const app = express();
app.get('/setcookie', (req, res) => {
    res.cookie('Login', `logado em ${new Date()}`);
    res.send('Cookie salvo com sucesso');
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});