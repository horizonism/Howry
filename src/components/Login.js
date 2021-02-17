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
            password: '',
            message: '',
            isLoggedIn: false,
            user: {},
            userMsg: []
        }
    }

    componentDidMount(){
        axios.get('/auth')
            .then((res) => { this.setState({
                user: res.data
            }) 
            this.checkUser()
            this.getMessages()
        })
    }

    checkUser = () => {
        if(this.state.user){
            this.setState({isLoggedIn: true})
        }else{
            this.setState({isLoggedIn: false})
        }
    }

    login = (e) => {
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/auth/login/', data)
            .then(() => {
                axios.get('/auth')
                .then((res) => {
                    this.setState({ 
                        username: '',
                        password: '',
                        user: res.data
                     })
                    this.checkUser()
                })
            })
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handlePost = (e) => {
        e.preventDefault()
        let data = {
            name: this.state.user.username,
            message: this.state.message
        }
        axios.post('/message/new', data)
            .then(() => this.getMessages())
    }

    getMessages = () => {
        axios.get('/message')
            .then((res) => this.setState({
                userMsg: res.data
            }))
    }

    logout = () => {
        axios.get('/auth/logout/')
            .then(() => this.setState({ user: [], isLoggedIn: false }))
    }

    render() {
        let messages = this.state.userMsg.map(item => <li key={item._id}>{item.name} said "{item.message}"</li>);
        if(!this.state.isLoggedIn){
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
                                    <Form onSubmit={this.login} className='m-4'>
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
                        <br/><br/><br/><br/>
                    </Container>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>hello, {this.state.user.username}</h1>
                    <a href='#home' onClick={this.logout}>Log out</a>
                    <Form onSubmit={this.handlePost}>
                        <Form.Group controlId="message">
                            <Form.Control type="name" name="message" placeholder="What's your message?" onChange={this.handleChange}/>
                            <Button variant="dark" type="submit">Post</Button>
                        </Form.Group>
                    </Form>
                    <h3>All messages from users : </h3>

                    {messages}
                </div>
            )
        }
    }
}

export default Login