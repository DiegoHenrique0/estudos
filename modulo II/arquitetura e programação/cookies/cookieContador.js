const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: '************',
    resave: false,
    saveUninitialized: true
}));

app.get('/contador', (req, res) => {
    let contagem = 0;
    if (req.session.contagem) contagem = req.session.contagem;
    contagem++;
    req.session.contagem = contagem;
    res.send(`Contagem: ${contagem}`);

});

app.listen(3000, () => {
    console.log(`servidor conectado! ${new Date()}`);
});