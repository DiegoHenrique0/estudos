import Alert from 'react-bootstrap/Alert';
import FuncaoBotao from './componentes/FuncaoBotao.js';
import ClasseBotao from './componentes/ClasseBotao.js';
import CabecalhoFuncao from './componentes/CabecalhoFuncao.js';
import CabecalhoClasse from './componentes/CabecalhoClasse.js';
export default function App() {

  //criação de lista de tarefas
  const tarefas = [
    { id: "programação", descricao: "estudar react", concluida: true },
    { id: "mat", descricao: "matemática", concluida: true },
    { id: "ciencias", descricao: "ciencias", concluida: false },
    { id: "calculo", descricao: "calculo 2", concluida: true }
  ];
  //calculo de contidade de mateias concluidas
  const totalConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
  const totalGeral = tarefas.length

  return (
    //utiliza (map) para mepear e ler todos os itens da lista de tarefas
    <div className='container mt-4'>
      <Alert variant="primary" className="text-center">
        <h4>Progresso: {totalConcluidas} de {totalGeral} tarefas concluídas 🏆</h4>
      </Alert>
      {tarefas.map((tarefa) => {
        if (tarefa.concluida) {
          return (
            <Alert variant='success'>
              <h1 key={tarefa.id}>
                Parabéns concluiu: {tarefa.descricao} ✅
              </h1>
            </Alert>
          );
        } else {
          return (
            <Alert key={tarefa.id} variant="danger">
              <h1>
                Faça a tarefa!!! {tarefa.descricao} (Materia: {tarefa.id})❌
              </h1>
            </Alert>
          );
        }
      })}
      <FuncaoBotao nome="Botão Função" />
      <ClasseBotao nome=" Botão Classe" />

      <CabecalhoFuncao>
        <p>
          este paragrafo esté na pasta principal app, sendo chamado pela funçao no componentes/cabeçalho!
        </p>  
        <p>
          este paragrafo esté na pasta principal app, sendo chamado pela funçao no componentes/cabeçalho!
        </p>  
        <p>
          este paragrafo esté na pasta principal app, sendo chamado pela funçao no componentes/cabeçalho!
        </p>
      </CabecalhoFuncao>

      <CabecalhoClasse>
        <p>
          este paragrafo foi escrito usando class e esta na parte principal do app!
        </p>
        <p>
          este paragrafo foi escrito usando class e esta na parte principal do app!
        </p>
      </CabecalhoClasse>
    </div>
  );
}
