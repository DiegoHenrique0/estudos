import Alert from 'react-bootstrap/Alert';
import FuncaoBotao from './componentes/FuncaoBotao.js';
import ClasseBotao from './componentes/ClasseBotao.js';
export default function App() {

  //criação de lista de tarefas
  const tarefas = [
    { id: "programação", descricao: "estudar react", concluida: false },
    { id: "mat", descricao: "matemática", concluida: true },
    { id: "ciencias", descricao: "ciencias", concluida: true },
    { id: "calculo", descricao: "calculo 2", concluida: false }
  ];
  //calculo de contidade de mateias concluidas
  const totalConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;
  const totalGeral =tarefas.length

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
      <FuncaoBotao/>
      <ClasseBotao/>
    </div>
  );
}
