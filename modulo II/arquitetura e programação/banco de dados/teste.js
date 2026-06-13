/*----------------------------------------------------------------------------
                ISERIR FUNCIONARIO PELO TERMINAL
------------------------------------------------------------------------------*/ 

import funcionarios from "./models/funcionarios.js"
import { Op } from "sequelize"
import readline from "readline"

// Formata o CPF para o padrão de 14 caracteres aceito na sua coluna STRING(14)
function formatarCPF(cpf) {
    if (!cpf) return ""
    const apenasNumeros = String(cpf).replace(/\D/g, "")
    return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const pergunta = (texto) => new Promise((resolve) => rl.question(texto, resolve))

export async function addFuncionario(matricula, nome, cpf, telefone, data_adimissao, ativo, jornada_id_jornada) {
    const dados = typeof matricula === 'object' 
        ? matricula 
        : { matricula, nome, cpf, telefone, data_adimissao, ativo, jornada_id_jornada };

    // CORREÇÃO: Mapeamento de campos idêntico ao arquivo do seu Modelo
    const adicionar = await funcionarios.create({
        matricula: Number(dados.matricula), // Garante que vire INTEGER conforme o modelo
        nome: dados.nome,
        cpf: formatarCPF(dados.cpf),
        telefone: dados.telefone, 
        data_adimissao: dados.data_adimissao, // Nome exato da coluna no modelo
        ativo: dados.ativo,
        jornada_id_jornada: Number(dados.jornada_id_jornada) // Campo obrigatório (allowNull: false)
    })
    return adicionar.id_funcionario
}

// FUNÇÃO INTERATIVA PARA O TERMINAL ATUALIZADA
async function cadastrarPeloTerminal() {
    try {
        console.log("\n=== CADASTRO DE FUNCIONÁRIO ===")
        
        const matricula = await pergunta("Digite a matrícula (apenas números): ")
        const nome = await pergunta("Digite o nome completo: ")
        const cpf = await pergunta("Digite o CPF (apenas números ou formatado): ")
        const telefone = await pergunta("Digite o telefone: ")
        const data_adimissao = await pergunta("Digite a data de admissão (AAAA-MM-DD): ")
        const ativoInput = await pergunta("O funcionário está ativo? (s/n): ")
        const jornada_id_jornada = await pergunta("Digite o ID da jornada de trabalho: ") // Nova pergunta obrigatória
        
        const ativo = ativoInput.toLowerCase() === 's' ? 1 : 0 // Ajustado para bater com o TINYINT do banco

        console.log("\nSalvando no banco de dados...")
        
        const id = await addFuncionario(matricula, nome, cpf, telefone, data_adimissao, ativo, jornada_id_jornada)
        
        console.log(`\n Sucesso! Funcionário cadastrado com o ID interno: ${id}`)

    } catch (erro) {
        console.error("\n Erro ao cadastrar no banco:", erro.message)
    } finally {
        rl.close()
    }
}

cadastrarPeloTerminal()
