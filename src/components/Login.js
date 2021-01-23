import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Form, Button,Nav } from 'react-bootstrap'
import { LinkContainer as Link } from 'react-router-bootstrap'

class Login extends Component {
    render() {
        return(
            <div>
                <Container>
                    <br/><br/><br/><br/>
                    <Row>
                        <Col className='m-4'>
                            <Card className="m-5" >
                                <Card.Title className="m-4">
                                    <h1 className='display-3'>Log In</h1>
                                </Card.Title>
                                <Form className='m-4'>
                                    <Form.Group controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type='name' placeholder='Enter Username'/>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' placeholder='Enter Password'/>
                                    </Form.Group>
                                    <Row style={{width: '300px'}}>
                                        <Col>
                                            <Button variant='dark' type='submit'>Submit</Button>
                                        </Col>
                                        <Col>
                                            <Link to='/Howry/signup'>
                                                <Nav.Link>Sign Up?</Nav.Link>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login