import Alert from 'react-bootstrap/Alert';
export default function App() {
  //criação de lista de tarefas
  const tarefas = [
    { id: "programação", descricao: "estudar react", concluida: false },
    { id: "mat", descricao: "matemática", concluida: true },
    { id: "ciencias", descricao: "ciencias", concluida: true },
    { id: "calculo", descricao: "calculo 2", concluida: false }
  ];

  return (
    //utiliza (map) para mepear e ler todos os itens da lista de tarefas
    <div className='container mt-4'>
      {tarefas.map((tarefa) => {
        if (tarefa.concluida) {
          return (
            <Alert variant='success'>
              <h1 key={tarefa.id}>
                Parabéns concluiu: {tarefa.descricao}
              </h1>
            </Alert>
          );
        } else {
          return (
            <Alert key={tarefa.id} variant="danger">
              <h1>
                Faça a tarefa!!!{tarefa.descricao} (Materia: {tarefa.id})
              </h1>
            </Alert>
          );
        }
      })}
    </div>
  );
}
