/*function buscarUsuario() {
    // Simulando processamento demorado
    const inicio = Date.now();

    while (Date.now() - inicio < 3000) {
        // Espera 3 segundos
    }

    return {
        id: 1,
        nome: "Diego"
    };
}

console.log("Iniciando consulta...");

const usuario = buscarUsuario();

console.log("Usuário encontrado:", usuario);
console.log("Programa finalizado.");

function buscarUsuario(callback) {
    setTimeout(() => {
        callback({
            id: 1,
            nome: "Diego"
        });
    }, 5000);
}

console.log("Iniciando consulta...");

buscarUsuario((usuario) => {
    console.log("Usuário encontrado:", usuario);
});

console.log("Programa continua executando...");*/

// 1. Transformando a função para retornar uma Promise
function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nome: "Diego"
            });
        }, 5000);
    });
}

// 2. Criando uma função assíncrona para ler o resultado
async function executar() {
    console.log("Iniciando consulta...");

    // O "await" pausa a execução aqui até a Promise terminar
    const usuario = await buscarUsuario();
    console.log("Usuário encontrado:", usuario);

    console.log("Programa continua executando dentro da função...");
}

executar();

for (let i = 0; i < 1000; i++) {
    if (i % 2 == 0){
        console.log(`Número par: ${i}`);
    }else {
        console.log(`Número ímpar: ${i}`);
    }
}
console.log("Programa continua executando no fluxo principal...");
