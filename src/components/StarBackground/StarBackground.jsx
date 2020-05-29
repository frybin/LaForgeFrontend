import React from 'react';
import Particles from 'react-particles-js'; 

const StarBackground = (props) => (
  <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 90,
	            "density": {
	                "enable": true,
	                "value_area": 300
	            }
	        },
	        "line_linked": {
	            "enable": false,
	        },
	        "move": {
              "enable": false,
	        },
	        "size": {
	            "value": 3
	        },
          shape: {
              type: 'star'
          },
	    },
      background: {
        color: {
          value: "#000000"
        }
      },
	    "retina_detect": true
	}} />
);

export default StarBackground;
