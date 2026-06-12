import funcionarios from "./models/funcionarios.js"
import { Op } from "sequelize"

export async function imprimirTodos() {
    const totalFuncionarios = await funcionarios.findAll()
    console.log(JSON.stringify(totalFuncionarios))
}

export async function obterTodos(params) {
    return await funcionarios.findAll()
}

export async function obterNomeColaborador() {
    return await funcionarios.findByPk(id_funcionario)
}

export async function obterNomeCpf(nome, cpf) {
    return await funcionarios.findAll({
        attributes: ['nome', 'cpf'],
        where: {
            nome: { [Op.like]: `${nome}%` },
            cpf: cpf
        }
    })
}

export async function addFuncionario(nome, cpf, telefone, data_adimissao, ativo) {
    const dados = typeof nome === 'object' ? nome : { nome, cpf, telefone, data_adimissao, ativo };
    const adcionar = await funcionarios.create(
        {
            nome: dados.nome,
            cpf: dados.cpf,
            telefone: dados.telefone, 
            adimissao: dados.data_adimissao, 
            ativo: dados.ativo
        }
    )
    return adcionar.id_funcionario
}

async function testar() {
    console.log("--- Testando impressão ---")
    await imprimirTodos()
}

testar()