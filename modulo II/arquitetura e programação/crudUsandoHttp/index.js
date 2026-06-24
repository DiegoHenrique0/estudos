import http from "http";
import { 
    obterTodos, 
    addFuncionario, 
    removerFuncionario, 
    obterNomeCpf 
} from "../banco de dados/controle.js"; // Ajuste o caminho do seu arquivo se necessário

// GET /funcionarios
const obterProdutos = async (req, res) => {
    try {
        const dados = await obterTodos();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(dados));
    } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ erro: "Erro ao buscar funcionários" }));
    }
};

// POST /funcionarios
const incluirProduto = (req, res) => {
    let corpo = "";
    req.on("data", (chunk) => corpo += chunk.toString());
    req.on("end", async () => {
        try {
            const dados = JSON.parse(corpo);
            // Como sua função addFuncionario aceita o objeto direto no 2º parâmetro:
            const novoId = await addFuncionario(null, dados);
            
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ mensagem: "Criado com sucesso", id: novoId }));
        } catch (err) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ erro: "Erro ao salvar funcionário" }));
        }
    });
};

// DELETE /funcionarios/:id
const removerProduto = async (req, res) => {
    try {
        // Quebra a URL por "/" para pegar o ID no final (ex: "/funcionarios/15" vira ["", "funcionarios", "15"])
        const partesUrl = req.url.split("/");
        const id = partesUrl[2];

        if (!id) {
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ erro: "ID não fornecido" }));
        }

        await removerFuncionario(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ mensagem: "Funcionário removido com sucesso" }));
    } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ erro: "Erro ao remover ou funcionário não encontrado" }));
    }
};

// Configuração do Servidor e Roteamento
const server = http.createServer((req, res) => {
    // Corrigidas as aspas tipográficas para aspas retas do JavaScript
    if (req.url === "/funcionarios" && req.method === "GET") {
        obterProdutos(req, res);
    } 
    else if (req.url === "/funcionarios" && req.method === "POST") {
        incluirProduto(req, res);
    } 
    else if (req.url.startsWith("/funcionarios") && req.method === "DELETE") {
        removerProduto(req, res);
    } 
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ erro: "404: Not Found" }));
    }
});

server.listen(3000, () => {
    console.log("Servidor escutando na porta 3000");
});
