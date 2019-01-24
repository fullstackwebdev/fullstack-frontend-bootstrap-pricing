import React, { Component } from 'react';
import { Container, CardDeck, Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Base.css';


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Pricing</h1>
                    <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
                </div>
            </div>
        );
    }
}

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <Image className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                            <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><Link className="text-muted" to="#">Cool stuff</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Random feature</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Team feature</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Stuff for developers</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Another one</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Last time</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><Link className="text-muted" to="#" href="#">Resource</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Resource name</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Another resource</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Final resource</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><Link className="text-muted" to="#" href="#">Team</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Locations</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Privacy</Link></li>
                                <li><Link className="text-muted" to="#" href="#">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

//const TheBase = () => (

class TheBase extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <CardDeck className="card-deck mb-3 text-center">
                    <Card className="mb-4 box-shadow">
                        <Card.Header>
                            <h4>Free</h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>$0 <small className="text-muted">/ mo</small></Card.Title>
                            <Card.Text>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul></Card.Text>
                            <Button variant="primary">Sign up for free</Button>
                        </Card.Body>
                    </Card>

                    {/* /// */}
                    <Card className="mb-4 box-shadow">
                        <Card.Header>
                            <h4>Pro</h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>$15 <small className="text-muted">/ mo</small></Card.Title>
                            <Card.Text>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">Get started</Button>
                        </Card.Body>
                    </Card>

                    {/* /// */}
                    <Card className="mb-4 box-shadow">
                        <Card.Header>
                            <h4>Enterprise</h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>$29 <small className="text-muted">/ mo</small></Card.Title>
                            <Card.Text>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">Contact us</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        );


    }

}


export default class Base extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <TheBase />
                    <Footer />
                </Container>
            </div>
        )
    }
}
