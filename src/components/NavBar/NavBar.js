import React, { Component } from 'react';
import CartWidget from './CartWidget';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Cart, CartFill } from 'react-bootstrap-icons';



export default class NavBar extends React.Component {

    render() {

        return (
            
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img
                        alt="Consola retro logo"
                        src="https://image.flaticon.com/icons/png/128/2727/2727202.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    RetroGames
                    </Navbar.Brand>
                    <CartWidget />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">Historia</Nav.Link>
                        <Nav.Link href="#pricing">Acerca de nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bartop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Arcade</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Productos a Medida</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Redes Sociales</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>           
            </Navbar>
        );
    }
}