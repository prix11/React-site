
import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                <Row>
                   <Col sm={3}>
                       <Nav variant="pills" className="flex-column mt-2">
                           <Nav.Item>
                               <Nav.Link eventKey="first">Design</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                               <Nav.Link eventKey="second">Team</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                               <Nav.Link eventKey="third">Programming</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                               <Nav.Link eventKey="fourth">Framewors</Nav.Link>
                           </Nav.Item>
                       </Nav>
                       </Col>
                       <Col sm={9}>
                           <Tab.Content className="mt-3">
                               <Tab.Pane eventKey="first">
                                    <img src="https://raw.githubusercontent.com/jaywcjlove/react-monacoeditor/master/react-monacoeditor.png"></img>
                                    <p>Eiusmod ex dolore minim ad est minim magna nisi in. Sint duis ad elit in non fugiat enim aute nulla id proident occaecat. Incididunt est sint voluptate esse consequat non reprehenderit ut proident commodo dolore. Aute voluptate dolore aliquip mollit elit quis tempor dolor nostrud consequat.</p>
                               </Tab.Pane>
                               <Tab.Pane eventKey="second">
                                    <img src="https://i.stack.imgur.com/fqVGC.png"></img>
                                    <p>Eiusmod ex dolore minim ad est minim magna nisi in. Sint duis ad elit in non fugiat enim aute nulla id proident occaecat. Incididunt est sint voluptate esse consequat non reprehenderit ut proident commodo dolore. Aute voluptate dolore aliquip mollit elit quis tempor dolor nostrud consequat.</p>
                               </Tab.Pane>
                               <Tab.Pane eventKey="third">
                                    <img src="https://ahmadawais.com/wp-content/uploads/2018/12/WordPress-Gutenberg-Block-Editor.jpg"></img>
                                    <p>Eiusmod ex dolore minim ad est minim magna nisi in. Sint duis ad elit in non fugiat enim aute nulla id proident occaecat. Incididunt est sint voluptate esse consequat non reprehenderit ut proident commodo dolore. Aute voluptate dolore aliquip mollit elit quis tempor dolor nostrud consequat.</p>
                               </Tab.Pane>
                               <Tab.Pane eventKey="fourth">
                                    <img src="https://cdn1.icicletech.com/media/l_atom-editor.png"></img>
                                    <p>Eiusmod ex dolore minim ad est minim magna nisi in. Sint duis ad elit in non fugiat enim aute nulla id proident occaecat. Incididunt est sint voluptate esse consequat non reprehenderit ut proident commodo dolore. Aute voluptate dolore aliquip mollit elit quis tempor dolor nostrud consequat.</p>
                               </Tab.Pane>
                           </Tab.Content>
                           </Col> 
                </Row>

                </Tab.Container>
            </Container>
        )
    }
}
