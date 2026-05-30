import React from 'react'
import Pagina from '../../componetes/Pagina'
import { Button } from 'react-bootstrap'

const contador = () => {

    const[quantidade, setQuantidade] = React.useState(0)

    function adicionar() {
        setQuantidade(quantidade + 1)
    }

    function diminuir() {
        setQuantidade(quantidade - 1)
    }

  return (
    <Pagina> 
        <h1 className="text-center mb-4"><b>Contador</b></h1>

        <Button onClick={adicionar}>
            +
        </Button>

        <Button onClick={diminuir} className="ms-2">
            -
        </Button>

        <h2>{quantidade}</h2>
    </Pagina>
  )
}

export default contador 