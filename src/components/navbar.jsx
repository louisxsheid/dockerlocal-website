import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/whale_v2.0.png'
import github from '../assets/githublogo.png'
import Navbar from 'react-bootstrap/NavBar';

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

            <div className='dl-beta'>
              download beta
            <a href='https://github.com/oslabs-beta/dockerlocal' target="_blank">
                <img src={github} className='github-icon'></img>
              </a>
            </div>
            
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}