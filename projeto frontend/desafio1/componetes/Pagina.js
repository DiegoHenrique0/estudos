import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";

const Pagina = (props) => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="/">Front-End</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">atividades</Nav.Link>
            <Nav.Link href="#pricing">imagens</Nav.Link>
            <Nav.Link href="/endereco">endereço</Nav.Link>
            <Nav.Link href="/contador">contador</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className='mt-4'>
        {props.children} 
      </Container>
    </>
  )
}

export default Pagina