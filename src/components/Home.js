import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'

const jumbotron = {
    background: 'transparent'
}

class Home extends Component {
    render(){
        return(
            <div>
            <Container>
                <br/><br/><br/>
                <Row>
                    <Col>
                    <br/><br/><br/><br/>
                    <h1>A Safe Place</h1>
                    <br/>
                    <h5><b><i>for ghost</i></b>. Sometimes i hate on people because of their works. And sometimes it's kinda hypocrite because i'd do all of their doing, like copying and stuff. The only thing that i hate of them is that they copy someone's work and pretends that they're theirs. Now, i don't know what to do, i really wonder why i create this website. Am i gonna create another weird website like in the final exam years ago?</h5>
                    <br/>
                    <a href='/Howry/Ghost'>
                    <Button variant='outline-dark'>See the ghosts</Button>
                    </a>
                    <br/><br/>
                    </Col>
                    <Col className='d-none d-lg-block'>
                        <Image src="https://lh3.googleusercontent.com/proxy/oWKd-ijzoY2xpk8sJyDfRh80kCz8w-cmVOB-Nefaf_YwGJYM2EUEOwl-PHTkz87e68pQ2ZYPetZXEZ3uwQP0EzSA7WfH_MHehzYqIDKHXWeZmOfq2LoMTFzOqbq5Uore87eYtLQ17fFhzfwyiTDA" width={550}/>
                    </Col>
                </Row>
            </Container>

            </div>
        )
    }
}

export default Home