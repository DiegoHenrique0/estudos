import React from 'react'
import Pagina from '../../componetes/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const endereco = () => {

    const { register, handleSubmit, setValue } = useForm()

    function buscarCep(event) {
        const cep = event.target.value

        if (cep.length == 8) {
            // Lógica para buscar o endereço pelo CEP
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(resultado => {
                setValue('uf', resultado.data.uf)
                setValue('cidade', resultado.data.localidade)
                setValue('bairro', resultado.data.bairro)
                setValue('logradouro', resultado.data.logradouro)
                setValue('complemento', resultado.data.complemento)
            })
        }
    }

    function enviarDados(dados) {
        console.log(dados)
    }

    return (
        <Pagina>

            <h1 className="text-center mb-4"><b>Endereço</b></h1>
            <Form>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control type="text" {...register('cep')} onChange={buscarCep} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="uf">
                    <Form.Label>UF:</Form.Label>
                    <Form.Control type="text" {...register('uf')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control type="text" {...register('cidade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro:</Form.Label>
                    <Form.Control type="text" {...register('bairro')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro:</Form.Label>
                    <Form.Control type="text" {...register('logradouro')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento:</Form.Label>
                    <Form.Control type="text" {...register('complemento')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número:</Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>


                <Button variant="success" onClick={handleSubmit(enviarDados)}>
                    Enviar
                </Button>

            </Form>

        </Pagina>
    )
}

export default endereco