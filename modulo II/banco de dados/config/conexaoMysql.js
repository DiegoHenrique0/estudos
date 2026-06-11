const { Sequelize } = require('sequelize');
const data = new Date()

const sequelize = new Sequelize('trabalho', 'root', '12345', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  logging: console.log // Mostra as consultas SQL no terminal
});

async function verificarConexao() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao MySQL com sucesso!');
    console.log(data) //mostra o horario de verificação 
  } catch (error) {
    console.error('❌ Erro ao conectar ao MySQL:', error);
    console.log(data) //mostra o horario de verificação 
  }
}

verificarConexao();
