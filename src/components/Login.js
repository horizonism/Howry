import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, Form, Button,Nav } from 'react-bootstrap'
import { LinkContainer as Link } from 'react-router-bootstrap'
import axios from 'axios'
class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount(){
        axios.get('/auth')
            .then((response) => this.setState({ test: response.data }))
    }

    login = (e) => {
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/auth/login', data)
            .then(() => console.log('test lagi'))
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
                                        <Form.Control type='name' placeholder='Enter Username' name='username' onChange={this.handleChange}/>
                                        <Form.Text className='text-muted'>{this.state.username}</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' placeholder='Enter Password' name='password' onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Row style={{width: '300px'}}>
                                        <Col>
                                            <Button variant='dark' onClick={this.login}>Submit</Button>
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
                    <br/><br/><br/><br/>
                </Container>
            </div>
        )
    }
}

export default Login