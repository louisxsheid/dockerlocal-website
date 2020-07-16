import React from 'react';
import github from '../assets/githublogo.png'
import louis from '../assets/louis.jpg'
import tom from '../assets/tom.png'
import vivian from '../assets/vivian.jpeg'

export default class Team extends React.Component {
  render() {
    return (
      <div classNameName='App'>
        <div className='about'> <h1 class='abt-us'>The Team</h1></div>
        <div className="grid-container">
          <div className="inner-container">
          <div className="grid-item">
            <img className='profile-pic' src={louis} />
            <h4>Louis Sheid</h4>
            <a href='https://github.com/louisxsheid' target="_blank">
              <img src={github} className='github-icon-profile' ></img>
            </a>
          </div>
          <div className="grid-item">
            <img className='profile-pic' src="https://avatars1.githubusercontent.com/u/7851187?s=400&u=9ca2535660568ac197def8260d976ac9513fa9c4&v=4"></img>
            <h4>Katty Polyak</h4>
            <a href='https://github.com/kattypolyak' target="_blank">
              <img src={github} className='github-icon-profile' ></img>
            </a>
          </div>
          <div className="grid-item">
            <img className='profile-pic' src={tom}></img>
            <h4>Tom Lutz</h4>
            <a href='https://github.com/tlutz888' target="_blank">
              <img src={github} className='github-icon-profile' ></img>
            </a>
          </div>
          <div className="grid-item">
            <img className='profile-pic' src="https://avatars2.githubusercontent.com/u/64158930?s=400&u=95dd18f7989f9baaac6a899676c49371fa84307a&v=4"></img>
            <h4>Kate Chanthakaew</h4>
            <a href='https://github.com/katechantha' target="_blank">
              <img src={github} className='github-icon-profile' ></img>
            </a>
          </div>
          <div className="grid-item">
            <img className='profile-pic' src={vivian}></img>
            <h4>Vivian Cermeno</h4>
            <a href='https://github.com/vcermeno' target="_blank">
              <img src={github} className='github-icon-profile' ></img>
            </a>
          </div>
          </div>
        </div>
        </div>
      
    );
  }
}