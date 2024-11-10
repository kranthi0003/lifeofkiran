// Toggle menu function
function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuIcon = document.querySelector('.menu');

    if (menuItems.classList.contains('show')) {
        menuItems.classList.remove('show');
        menuOverlay.style.opacity = '0';
        setTimeout(() => {
            menuIcon.classList.remove('hidden');
            menuOverlay.style.visibility = 'hidden';
        }, 300);
    } else {
        menuItems.classList.add('show');
        menuOverlay.style.opacity = '1';
        menuOverlay.style.visibility = 'visible';
        menuIcon.classList.add('hidden');
    }
}

// Typing effect function for header and paragraph
function typeEffect(element, text, speed, wordsPerChunk, callback) {
    const words = text.split(" ");
    let index = 0;
    function type() {
        if (index < words.length) {
            element.innerHTML = words.slice(0, index + wordsPerChunk).join(" ") + " <span class='cursor'></span>";
            index += wordsPerChunk;
            setTimeout(type, speed);
        } else {
            element.innerHTML = words.join(" ");
            if (callback) callback();
        }
    }
    type();
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Particles.js configuration
// Particles.js configuration with lighter particles
// Particles.js configuration with slightly brighter particles
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#66E066"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.3, // Slightly brighter opacity for particles
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#66E066",
            "opacity": 0.2, // Slightly brighter opacity for line links
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
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
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});


// Document ready
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const paragraph = document.querySelector('.typing-effect');
    const spinner = document.querySelector('.loading-spinner');

    spinner.style.display = 'block';

    const headerText = "Glad You Made It Here 🌟";
    const paragraphText = `Yo! I'm <span class="highlight">Kiran</span>, and this site? Just a lil' corner of the internet where I share the <span class="highlight">highs</span>, the <span class="highlight">lows</span>, and all the "<span class="highlight">wtf?</span>" moments of my life. Stick around, have a laugh, and <span class="highlight">let’s not take life too seriously!</span> 😜`;

    typeEffect(header, headerText, 300, 1, () => {
        typeEffect(paragraph, paragraphText, 500, 5, () => {
            spinner.style.display = 'none';
        });
    });
});
