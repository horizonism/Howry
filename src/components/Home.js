import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import ghost from '../assets/ghost.png'
import { LinkContainer as Link } from 'react-router-bootstrap'

class Home extends Component {
    
    render(){
        return(
            <div>
            <Container>
                <br/><br/><br/>
                <Row>
                    <Col>
                    <br/><br/><br/><br/>
                    <h1 className='display-4' style={{fontWeight: 'bold'}}>A Safe Place</h1>
                    <br/>
                    <h5 style={{wordSpacing: '8px'}} className='text-left'><span style={{fontSize: '28px'}}><b><i>for ghost</i></b></span>. this is a safe place for ghost, please stay away if you're not a ghost. You get it? <i>safe</i> place for <i>ghosts</i>. Unless you're an adorable, cute, beautiful, pretty, hot, smart, perfect, manis and cantik-kind-of girl<span style={{fontSize: '8px'}}> then hmu lol, im joking. unless...</span> </h5>
                    <br/>
                    <Link to='/Howry/ghosts'>
                        <Button variant='outline-dark'>See the ghosts</Button>
                    </Link>
                    <br/><br/>
                    </Col>
                    <Col className='d-none d-lg-block'>
                        <Image src={ghost} width={550}/>
                    </Col>
                </Row>
            </Container>

            </div>
        )
    }
}

export default Home