import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Component } from 'react';

export default class ClasseBotao extends Component {

    constructor(props){
        super(props);
        this.state  = {contador: 0};
    }

    incrementa = () =>{
        this.setState({contador: this.state.contador +1})
        console.log('clicou no botao CLASE!')
    }

    render() {
        return (
            <div className='container mt-4 mb-4 d-grid gap-3' >
                <Button type='button' size='lg' variant="outline-secondary" onClick={this.incrementa}>
                    clicou {this.state.contador} vezes no
                    {this.props.nome} {/* vai pegar o elemento nome defido no App*/} 
                </Button>
            </div>

        )
    }
}
