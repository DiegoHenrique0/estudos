import funcionarios from "./models/funcionarios.js"
import { Op } from "sequelize"

export async function imprimirTodos() {
    const totalFuncionarios = await funcionarios.findAll()
    console.log(JSON.stringify(totalFuncionarios, null,2))
}

export async function obterTodos(params) {
    return await funcionarios.findAll()
}

export async function obterNomeColaborador(id_funcionario) {
    return await funcionarios.findByPk(id_funcionario)
}

export async function obterNomeCpf(cpf) {
    return await funcionarios.findAll({
        attributes: ['nome', 'cpf'],
        where: {
           // nome: { [Op.like]: `${nome}%` },
            cpf: cpf
        }
    })
}

export async function addFuncionario(matricula, nome, cpf, telefone, data_adimissao, ativo, jornada_id_jornada) {
    const dados = typeof nome === 'object' ? nome : { matricula, nome, cpf, telefone, data_adimissao, ativo, jornada_id_jornada };
    const adcionar = await funcionarios.create(
        {
            matricula: dados.matricula,
            nome: dados.nome,
            cpf: dados.cpf,
            telefone: dados.telefone, 
            adimissao: dados.data_adimissao, 
            ativo: dados.ativo,
            jornada_id_jornada: dados.jornada_id_jornada
        }
    )
    return adcionar.id_funcionario
}

export async function removerFuncionario(id_funcionario) {
    let funcionario = await funcionarios.findByPk(id_funcionario)
    await funcionario.destroy()
}

async function testar() {
    console.log("--- Testando impressão ---")
    const resultado = await obterNomeCpf('987.654.321-00')
    console.log(JSON.stringify(resultado, null,2))
}


testar()