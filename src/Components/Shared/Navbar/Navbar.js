import React from 'react';
import './Navbar.css';
import image from '../../Home/MainHeading/louise.jpg'

import { UISref, UISrefActive, UIView } from '@uirouter/react';


const Navbar = () => {
  
    return (
        <div>        
        <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container"> 
                <div>
                <ul className="navbar-nav">    
                
                    <li className="nav-item">                                
                        <UISrefActive className="active"><UISref to="home"><a><img src={image} width="40px" alt = "Louise"/></a></UISref></UISrefActive> 
                    </li>            
                    <li className="nav-item">                                
                        <UISrefActive className="active"><UISref to="projects"><a className=" nav-link">Projects</a></UISref></UISrefActive> 
                    </li>
                    <li className="nav-item">                                
                    <UISrefActive className="active"><UISref to="sideHustles"><a className="nav-link">Side Hustles</a></UISref></UISrefActive> 
                    </li>                            
                    <li className="nav-item">
                    <UISrefActive className="active"><UISref to="presentations"><a className="nav-link">Presentations</a></UISref></UISrefActive> 
                    </li>
                        <li className="nav-item">
                        <UISrefActive className="active"><UISref to="about"><a className="nav-link">About</a></UISref></UISrefActive> 
                    </li>
                        <li className="nav-item">
                        <UISrefActive className="active"><UISref to="contact"><a className="nav-link">Contact</a></UISref></UISrefActive> 
                    </li>    
                </ul>
            </div>
        </div>
    </nav>
        <div className = "container">
            <UIView />     
        </div>          
</div>      
       
)}

export default Navbar;