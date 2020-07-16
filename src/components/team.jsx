import React from 'react';
import github from '../assets/githublogo.png'

export default class Team extends React.Component {
    render() {
        return (
            <div classNameName='App'>
                <h1 class='abt-us'>About Us</h1>
                <div className="grid-container">
                    <div className="grid-item">
                    <img className='profile-pic' src="https://media-exp1.licdn.com/dms/image/C5603AQEBQgCqW3RGRw/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=HqweKzd7imfVcZ0KnN4XX55dhR9ahUpwKPt1IIB249I"/>
                        <h4>Louis Xavier Sheid III</h4>
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
                        <img className='profile-pic' src="https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/Oh-Whale__SEPS-1000x1000.jpg"></img>
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
                        <img className='profile-pic' src="https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/Oh-Whale__SEPS-1000x1000.jpg"></img>
                        <h4>Vivian Cermeno</h4>
                        <a href='https://github.com/vcermeno' target="_blank">
                            <img src={github} className='github-icon-profile' ></img>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}