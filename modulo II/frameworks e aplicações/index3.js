const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

let tarefas = [{ tarefa: "complilar" }, { tarefa: "testar" }]
const getPagina = () => {
    let conteudo = "<html><body><form method='post'>";
        let conteudo = "<html><body><form method='post'>";
    conteudo += "placeholder ='Tarefa'";
    conteudo += "<input type='submite'";
    conteudo += " value ='Adicionar'></form > <ul>";
        for(let t of tarefas)
        conteudo += `<li>${t.tarefa}</li>`;
        conteudo += "</ul></body ></html >";
    return conteudo;
}

app.get( [ '/', '/web/tarefas' ], (req, res) => {
res.status(200)
.contentType('text/html')
.send(getPagina());
})
app.post( [ '/', '/web/tarefas' ], (req, res) => {
tarefas.push({tarefa: req.body.tarefa})
res.status(200).contentType('text/html').send(getPagina());
})
app.listen(3000)