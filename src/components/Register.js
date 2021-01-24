import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Form, Button,Nav } from 'react-bootstrap'
import { LinkContainer as Link } from 'react-router-bootstrap'
import axios from 'axios'
class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            passwordVerify: '',
        }
    }

    register = () => {
        if(this.state.password !== this.state.passwordVerify){
            this.setState({
                username: '',
                password: '',
                passwordVerify: '',
            })
            alert(`Password Doesn't match`)
        }else{
            let data = {
                username: this.state.username,
                password: this.state.password,
            }
            axios.post('/auth/register', data)
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div>
                <Container>
                    <br/><br/>
                    <Row>
                        <Col className='m-4'>
                            <Card className="m-5" >
                                <Card.Title className="m-4">
                                    <h1 className='display-3'>Register</h1>
                                </Card.Title>
                                <Form className='m-4'>
                                    <Form.Group controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type='name' placeholder='Enter Username' name='username' onChange={this.handleChange} value={this.state.username}/>
                                        <Form.Text className='text-muted'>{this.state.username}</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' placeholder='Enter Password' name='password' onChange={this.handleChange} value={this.state.password}/>
                                        <Form.Text className='text-muted'>{this.state.password}</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="passwordVerify">
                                        <Form.Control type='password' placeholder='Enter Your Password Again' name='passwordVerify' onChange={this.handleChange} value={this.state.passwordVerify}/>
                                        <Form.Text className='text-muted'>{this.state.passwordVerify}</Form.Text>
                                    </Form.Group>
                                    <Row style={{width: '500px'}}>
                                        <Col>
                                            <Button variant='dark' onClick={this.register}>Submit</Button>
                                        </Col>
                                        <Col>
                                            <Link to='/Howry/login'>
                                                <Nav.Link>Already have an account?</Nav.Link>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                    <br/><br/><br/><br/>
                </Container>
            </div>
        )
    }
}

export default Register