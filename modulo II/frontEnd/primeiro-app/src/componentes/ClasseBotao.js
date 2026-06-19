import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const ClasseBotao = () => {
    return (
        <div className='container mt-4 mb-4 d-grid gap-3'>
            <Button type='button' size='lg' variant="outline-secondary" onClick={() => console.log('clicou no botao CLASE!')}>
                clique aqui (classe)
            </Button>
        </div>
    )
}

export default ClasseBotao