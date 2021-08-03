
import React, { Component } from 'react'
import { Card, Container, Button, CardGroup } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'


export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardGroup>
                    
                    <Card >
                        <Card.Img 
                        variant="top" 
                        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>Commodo quis sit pariatur commodo. Voluptate sint elit ipsum anim amet reprehenderit. Aute mollit aliquip eiusmod Lorem amet dolor fugiat tempor sit fugiat exercitation adipisicing. Laborum commodo laborum nisi id qui cillum sint voluptate Lorem commodo. Minim sit exercitation ipsum cillum Lorem tempor aliqua culpa veniam exercitation dolor eiusmod fugiat esse. Do enim amet consequat id.</Card.Text>
                    <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>Commodo quis sit pariatur commodo. Voluptate sint elit ipsum anim amet reprehenderit. Aute mollit aliquip eiusmod Lorem amet dolor fugiat tempor sit fugiat exercitation adipisicing. Laborum commodo laborum nisi id qui cillum sint voluptate Lorem commodo. Minim sit exercitation ipsum cillum Lorem tempor aliqua culpa veniam exercitation dolor eiusmod fugiat esse. Do enim amet consequat id.</Card.Text>
                    <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>Commodo quis sit pariatur commodo. Voluptate sint elit ipsum anim amet reprehenderit. Aute mollit aliquip eiusmod Lorem amet dolor fugiat tempor sit fugiat exercitation adipisicing. Laborum commodo laborum nisi id qui cillum sint voluptate Lorem commodo. Minim sit exercitation ipsum cillum Lorem tempor aliqua culpa veniam exercitation dolor eiusmod fugiat esse. Do enim amet consequat id.</Card.Text>
                    <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
        )
    }
}
