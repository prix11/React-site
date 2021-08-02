import React, { Component } from 'react'
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import logo from './logo192.png'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Email from '../Pages/Email'


export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect  expand="md" bg="light" varian="dark">
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
                 <Nav.Link href="/about">About</Nav.Link>
                 <Nav.Link href="/contacts">Contacts</Nav.Link>
                 <Nav.Link href="/email">Email</Nav.Link>
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
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/email" component={Email} />
            </Switch>
        </Router>
        
        </>
        
        )
    }
}
