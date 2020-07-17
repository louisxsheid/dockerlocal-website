import React from 'react';
import makeProj from '../assets/make-project.png'
import addButton from '../assets/add-repos.png'
import addRepos from '../assets/add-more-repos.png'
import success from '../assets/success.png'
import githubwhite from '../assets/whitegit.png'
import leaveoneout from '../assets/leaveoneout.png'

export default class Body extends React.Component {
  render() {
    return (
        <div className='info-wrap'>
          <div className='divider'></div>
          <div className='divider'></div>
          <div className='divider'></div>
          <div className='divider'></div>
          <h1 className='info'>What is DockerLocal?</h1>
          <div className='divider'></div>
          <div className='divider'></div>
          <h4 className='info-p'>DockerLocal is a lightweight and easy to set up tool that saves time in your development workflow, removing the need for manual cloning and docker-compose setup.
          Developers can choose the github repositories associated with a project to clone the latest version of each repository. DockerLocal then creates a Docker Compose .yml file with only the microservices you’re not currently working on locally.  
          Test your containerized services faster and with less hassle.</h4>
          <div className='divider'></div>
          <div className='divider'></div>
          <div className='divider'></div>
          <div className='divider'></div>
          <div className='divider'></div>
          <div className='divider'></div>
          <h1 className='info'>What does it do?</h1>
          <h3 className='info'>App flow:</h3>
          <h3 className='info-title'>Make a project</h3>
          <img className='addReposPic' src={makeProj}/>
          <h3 className='info-title'>Choose your repositories</h3>
          <img className='addReposPic' src={addButton}/>
          <div className='divider'></div>
          <img className='addReposPic' src={addRepos}/>
          <div className='divider'></div>
          <div className='divider'></div>
          <h3 className='info'>~Option to leave repos out from the compose file~</h3>
          <div className='divider'></div>
          <img className='leaveoneout' src={leaveoneout} />
          <div className='divider'></div>
          <h3 className='info-title'>Clone and compose!</h3>
          <img className='addReposPic' src={success}/>
          <div className='divider'></div>
          <div className='divider'></div>
          <h4 className='info-title'>For more info on how DockerLocal works under the hood, make sure to check out and star our github page!</h4>
          <div className='divider'></div>
          <div className='divider'></div>
          <a href='https://github.com/oslabs-beta/dockerlocal' target="_blank">
                <img src={githubwhite} className='github-icon'></img>
              </a>
        </div>
    );
  }
}