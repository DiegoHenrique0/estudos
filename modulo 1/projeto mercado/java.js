function limparNumero(qtd, valor, total) {
    let valorlimpo = valor.innerHTML.replace('R$', '').replace('.', '').replace(',', '.').trim()
    let valorNumerico = parseFloat(valorlimpo)
    let resultado = qtd.innerHTML * valorNumerico

    //adiciona o R$ e as vigulas na tela
    total.innerHTML = 'R$ ' + resultado.toFixed(2).replace('.', ',')
}

function alterarQtd(produto, acao) {
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if (acao == '-' && qtd.innerHTML == 0) {
        alert('numero negativo')
    } else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        limparNumero(qtd, valor, total)
        subTotal()
    }

}

function subTotal() {
    let soma = 0
    for (let i = 1; i < 4; i++) {
        const totalItem = document.getElementById('total_' + i)

        // CORRIGIDO: Limpa o "R$" e a vírgula do total de cada linha antes de somar
        let totalLimpo = totalItem.innerHTML.replace('R$', '').replace(/\./g, '').replace(',', '.').trim()
        let totalNumerico = parseFloat(totalLimpo) || 0 // O "|| 0" evita erros se o campo estiver apenas com "0"

        soma += totalNumerico
    }
    document.getElementById('subTotal').innerHTML = 'R$ ' + soma.toFixed(2).replace('.', ',')
}