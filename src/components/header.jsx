import React from 'react';
import logo from '../assets/whale_v2.0.png'
import github from '../assets/githublogo.png'
export default class Body extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <a href='https://github.com/oslabs-beta/dockerlocal' target="_blank">
            <img src={logo} className="App-logo" />
          </a>
          <h1 className='dockerLocal'>DockerLocal</h1>
          <p class='info'>locally test your containerized microservices</p>
        </header>
      </div>
    );
  }
}