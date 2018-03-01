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
            <div className = "profileImage"></div>
            <div className="container mainHeading animated swing" id="heading" >            
                <div className="animated zoomInDown">    
                    <h1  className="animated bounce">Louise van den Berg</h1>
                    <h3  className="animated bounce">Web App Developer</h3>
                    <p>I make heavenly UX come alive thus enabling greater wealth for U & I.</p>
                    <UISrefActive className="active"><UISref to={'projects'}>
                    <button className="btn btn-primary btn-large grow">View Profile</button>
                </UISref></UISrefActive>
                    
                </div>
                </div>    
        </div>
    )
    
}

export default MainHeading;