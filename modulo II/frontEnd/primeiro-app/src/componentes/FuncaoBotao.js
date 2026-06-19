
import Button from 'react-bootstrap/Button'; // imoportaão do botão no rectbootstrap

const FuncaoBotao = (props) => {

  return (
    <div className='container mt-3 d-grid gap-3'>
      <Button type='button' size='lg' variant="outline-info" onClick={() => console.log('clicou na Função!')}>
        {props.nome}
      </Button>
    </div>
  )
}

export default FuncaoBotao