import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <Container style={{width:'500px'}}>
                    <h1 className="text-center">Contact us</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text>
                                We'll never share yout email with anyone else
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example texarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                            
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
