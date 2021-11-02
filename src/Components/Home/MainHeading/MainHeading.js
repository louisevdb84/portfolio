import React from 'react';
import { UISref, UISrefActive } from '@uirouter/react';

import './MainHeading.css';
import 'animate.css';

const MainHeading = () => {
    // <i class="fas fa-camera-retro fa-10x"></i>
    // <i class="fas fa-camera-retro fa-10x"></i>
    // <p>A passionate Software Developer, enjoy writing code in React.js, Node.js, C# etc. I am interested in freelancing and contributing to open source projects.</p>
    return (
        <div>
            <div className="picHeading"></div>
            <div className="profileImage"></div>
            <div className="container mainHeading animated swing" id="heading" >
                <div className="animated zoomInDown">
                    <h1 className="animated bounce">Louise van den Berg</h1>
                    <h3 className="animated bounce">Full Stack Developer</h3>
                    <a className="icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/louise-van-den-berg-016179114/"><i class="fa fa-linkedin-square"></i></a>
                    <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/louisevdb84"><i class="fa fa-github"></i></a>
                    <p>.NET Core, Angular, React.js,  JavaScript, HTML, CSS, C#, ASP.NET MVC and Relational Databases </p>
                    <UISrefActive className="active"><UISref to={'projects'}>
                        <button className="btn btn-primary btn-large grow">View Profile</button>
                    </UISref></UISrefActive>

                </div>
            </div>
        </div>
    )

}

export default MainHeading;