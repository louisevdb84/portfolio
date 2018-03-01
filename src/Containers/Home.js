import React, { Component } from 'react';
import './Home.css';

import Particles from 'react-particles-js';
import MainHeading from '../Components/Home/MainHeading/MainHeading';

const particlesOptions = {
  "particles": {
    "nb": 80,
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1443.0708547789707,        
      }
    },
    "color": {
      "value": "#162955"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 1,
        "color": "#061539",
        "opacity": 0.5,
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "https://images.unsplash.com/photo-1446770145316-10a05382c470?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f83e4b1e921bb496711ab1299032d555&auto=format&fit=crop&w=1055&q=80",
        "width": 3000,
        "height": 3000
      }
    },
    "opacity": {
      "value": 0.3367165327817598,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 44.09383167380187,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 92.57680220235335,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.8,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onresize": {
        "enable": true,
        "density_auto": true,
        "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      },
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}
        />        
        <MainHeading />                  
      </div>
    );
  }
}

export default Home;
