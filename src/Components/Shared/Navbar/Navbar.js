import React from 'react';
import './Navbar.css';
import image from '../../Home/MainHeading/louise.jpg'
import resume from './Resume.pdf'

import { UISref, UISrefActive, UIView } from '@uirouter/react';


const Navbar = () => {
  
    return (
        <div>        
        <nav className="customNavbar">        
                <div className = "container">                            
                    <UISref to="home"><a><img src={image} width="40px" alt = "Louise"/></a></UISref>
                    <UISrefActive class="active"><UISref to="projects"><a className="customLink">Projects</a></UISref></UISrefActive> 
                    <UISrefActive class="active"><a href={resume} target="_blank" className = "customLink">Resume</a></UISrefActive> 
                    <UISrefActive class="active"><UISref to="about"><a className="customLink">About</a></UISref></UISrefActive> 
                    <UISrefActive class="active"><UISref to="contact"><a className="customLink">Contact</a></UISref></UISrefActive>                 
                   
                
            </div>
        
    </nav>
        <div className = "container">
            <UIView />     
        </div>          
</div>      
       
)}

export default Navbar;

    