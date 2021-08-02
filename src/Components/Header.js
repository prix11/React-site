import React, { Component } from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from './logo192.png'



export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect fixed="top" expand="md" bg="light" varian="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                    src={logo}
                    height="30"
                    width="30"
                    className="d-inline-block align-top"
                    alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
                 <Nav.Link href="/">Home</Nav.Link>
                 <Nav.Link href="/">About</Nav.Link>
                 <Nav.Link href="/">Contacts</Nav.Link>
                 <Nav.Link href="/">Contacts</Nav.Link>
             </Nav>
             <Form className="d-flex">
             <FormControl 
                 type="search"
                 placeholder="Search"
                 className="mr-sm-2"
                 
                 />
                 <Button variant="outline-success">Search</Button>
             </Form>
             </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        )
    }
}
