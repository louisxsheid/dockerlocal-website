import React from 'react';
import logo from '../assets/whale_v2.0.png'
import github from '../assets/githublogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
export default class Head extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand className='nav-wrap'>
                        <div class='dockerlocal'>
                        <img src={logo} className='logo-icon'></img>
                        DockerLocal
                        </div>
 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                    <div className='dl-beta'>
                        download beta
                        <a href='https://github.com/oslabs-beta/dockerlocal' target="_blank">
                            <img src={github} className='github-icon'></img>

                        </a>
                        </div>
                </Navbar>

            </div>
        );
    }
}