import React, { Component } from 'react'
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BaseNavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand>
                    Compay Name
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Enterprise</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Navbar.Collapse>
                <Button > Sign Up </Button>
            </Navbar>

            // <Navbar default collapseOnSelect>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             {/* <Link to="/">Company Name</Link> */}
            //         </Navbar.Brand>
            //         <Navbar.Toggle />
            //     </Navbar.Header>
            //     <Navbar.Collapse>
            //         <Nav pullRight>
            //             <NavItem eventKey={1} componentClass={Link} to="/" >
            //                 Features
            //         </NavItem>
            //             <NavItem eventKey={1} componentClass={Link} to="/" >
            //                 Enterprise
            //         </NavItem>
            //             <NavItem eventKey={1} componentClass={Link} to="/" >
            //                 Support
            //         </NavItem>
            //             <NavItem eventKey={1} componentClass={Link} to="/" >
            //                 Features
            //         </NavItem>
            //             <NavItem eventKey={1} componentClass={Link} to="/" >
            //                 Pricing
            //         </NavItem>
            //         </Nav>
            //         <Button > Sign Up </Button>
            //     </Navbar.Collapse>
            // </Navbar>
        );
    }
}
