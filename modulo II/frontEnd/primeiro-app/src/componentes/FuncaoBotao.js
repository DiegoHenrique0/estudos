import React from 'react'
import Button from 'react-bootstrap/Button'; // imoportaão do botão no rectbootstrap

const FuncaoBotao = () => {
  return (

    <div className='container mt-3 d-grid gap-3'>
      <Button type='button' size='lg' variant="outline-info" onClick={() => console.log('clicou na Função!')}>
        clique aqui (Função)
      </Button>
    </div>
  )
}

export default FuncaoBotao