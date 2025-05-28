document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.createElement('button');
  navToggle.className = 'nav-toggle';
  navToggle.innerHTML = '☰';
  // Temporary alert to confirm button click
  navToggle.addEventListener('click', function() {
 // Remove after testing
  });
  const header = document.querySelector('header') || document.querySelector('body');
  header.prepend(navToggle);

  const nav = document.querySelector('nav#menu');
  
  if (nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  } else {
    console.error('Navigation menu not found. Ensure <nav id="menu"> exists in the HTML.');
  }

  // Adjust container padding for mobile view on scroll
  const container = document.querySelector('.container');
  if (container && nav) {
    const menuHeight = nav.offsetHeight;

    window.addEventListener('scroll', function() {
      if (window.innerWidth <= 768) {
        if (window.scrollY > 0) {
          container.style.paddingTop = `${menuHeight}px`;
          nav.classList.add('scrolled');
        } else {
          container.style.paddingTop = '0';
          nav.classList.remove('scrolled');
        }
      } else {
        container.style.paddingTop = '0';
        nav.classList.remove('scrolled');
      }
    });

    // Initial check for scrolled state
    if (window.innerWidth <= 768 && window.scrollY > 0) {
      container.style.paddingTop = `${menuHeight}px`;
      nav.classList.add('scrolled');
    }
  } else {
    console.error('Container or nav not found. Ensure .container and nav#menu exist.');
  }
});

// Load particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "value": ["#000000", "#FFFFFF", "#2F2F4F"]
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0.4,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 6,
        "size_min": 2,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 7,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 120,
        "line_linked": {
          "opacity": 0.8,
          "color": "#000000"
        }
      },
      "bubble": {
        "distance": 150,
        "size": 8,
        "duration": 0.4,
        "opacity": 0.9,
        "color": "#FFFFFF"
      }
    }
  },
  "retina_detect": true
});

console.log("Mature lightning-themed particles loaded with no shapes, using electric blue, white, and deep grayish-purple colors.");