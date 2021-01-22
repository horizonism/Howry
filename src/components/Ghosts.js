import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap'
import ghost from '../assets/ghost.png';
import ghost1 from '../assets/ghost-1.png';
import ghost2 from '../assets/ghost-2.png';

const objFit = {
    objectFit: 'cover',
    width: '100%',
    height: '300px'
}

class Ghosts extends Component {
    render() {
        return(
            <div>
                <Container>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row className='m-4'>
                        <Col>
                            <CardDeck>
                                <Card style={{ width: '18rem', height: '33rem', border: 0 }}>
                                    <Card.Img variant='top' style={objFit} src={ghost1}fluid/>
                                    <Card.Title className='text-center m-2'><b><i>Scammer</i></b></Card.Title>
                                    <Card.Text className='text-justify m-2'>
                                        This one is a <b><i>dangerous</i></b> one to your existence, this one is the one that always steals someone's work and pretends that they're theirs. They like to <i>"lick the butt"</i> (if u know indonesian) of their teachers too to gain attention. You should stay away from these type.
                                    </Card.Text>
                                </Card>
                            </CardDeck>
                        </Col>
                        <Col>
                            <CardDeck>
                                <Card style={{ width: '18rem', height: '33rem', border: 0 }}>
                                    <Card.Img variant='top' style={objFit} src={ghost} fluid/>
                                    <Card.Title className='text-center m-2'><b><i>Ghost</i></b></Card.Title>
                                    <Card.Text className='text-justify m-2'>
                                        Ghost knows how to do things properly and sometimes ask <i>Scammer</i> and <i>stealth</i> how to do things, they are sometimes a sider, and always get the lies from <i>scammer</i>.
                                    </Card.Text>
                                </Card>
                            </CardDeck>
                        </Col>
                        <Col>
                            <CardDeck>
                                <Card style={{ width: '18rem', height: '33rem', border: 0 }}>
                                    <Card.Img variant='top' style={objFit} src={ghost2} fluid/>
                                    <Card.Title className='text-center m-2'><b><i>Stealth</i></b></Card.Title>
                                    <Card.Text className='text-justify m-2'>
                                        The <i>Stealth</i> always investigate looks for something wrong. They are actually are the good one in the thing, but they never got noticed by the teacher. Why? because they are sider and don't licks the butt.
                                    </Card.Text>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default Ghosts