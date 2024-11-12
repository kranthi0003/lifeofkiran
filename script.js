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

window.addEventListener('load', () => {
    const prompt = document.querySelector('.prompt-animation');
    const hamburgerMenu = document.querySelector('.menu');
    const menuItems = document.querySelector('.menu-items');

    // Show the prompt after 3 seconds
    setTimeout(() => {
        if (!menuItems.classList.contains('show')) { // Only show if menu is not open
            prompt.classList.add('show');
        }
    }, 3000); // 3000 ms = 3 seconds

    // Hide the prompt when the hamburger menu is clicked
    hamburgerMenu.addEventListener('click', () => {
        prompt.classList.remove('show'); // Hide the prompt
    });

    // Optionally, hide the prompt when the menu opens or closes
    menuItems.addEventListener('transitionend', () => {
        if (menuItems.classList.contains('show')) {
            prompt.classList.remove('show'); // Hide the prompt if the menu is open
        }
    });
});





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
    const paragraphText = `Welcome to lifeofkiran.com! This site is a glimpse into my journey, sharing stories, moments, and reflections. Check out the About section to learn more about what makes this digital space unique. Thanks for stopping by!`;

    typeEffect(header, headerText, 300, 1, () => {
        typeEffect(paragraph, paragraphText, 500, 5, () => {
            spinner.style.display = 'none';
        });
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


document.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('1999-09-03'); // Replace with your birthdate (YYYY-MM-DD)

    function updateDashboard() {
        const now = new Date();
        const timeDiff = now - birthDate;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Update the DOM
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    // Initial update
    updateDashboard();

    // Update every second
    setInterval(updateDashboard, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    const notificationTab = document.querySelector('.notification-tab');
    const newUpdateBadge = document.querySelector('.new-update-badge');

    // Check if there are new updates
    const hasNewUpdate = true; // Replace with your logic to check for updates

    if (hasNewUpdate) {
        notificationTab.classList.add('has-new-update'); // Show the badge
    }

    // Hide the badge when the notification tab is clicked
    notificationTab.addEventListener('click', () => {
        newUpdateBadge.style.display = 'none'; // Hide the badge
    });
});

function scrollToDay(dayId) {
    document.getElementById(dayId).scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Set the start date and time (e.g., January 1, 2024)
const startDate = new Date('November 11, 2024 22:20:38');

// Function to update the donation fund timer
function updateDonationFundTimer() {
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds and convert to seconds
    const elapsedMilliseconds = currentDate - startDate;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(elapsedSeconds / (60 * 60 * 24));
    let hours = Math.floor((elapsedSeconds % (60 * 60 * 24)) / (60 * 60));
    let minutes = Math.floor((elapsedSeconds % (60 * 60)) / 60);
    let seconds = elapsedSeconds % 60;

    // Update the timer display for the donation fund
    document.getElementById("fund-days").innerText = days;
    document.getElementById("fund-hours").innerText = hours;
    document.getElementById("fund-minutes").innerText = minutes;
    document.getElementById("fund-seconds").innerText = seconds;

    // Calculate the fund raised (1 INR per minute)
    let fundRaised = minutes + (hours * 60) + (days * 24 * 60);

    // Format the fundRaised amount in Indian numbering format
    document.getElementById("donation-fund").innerText = "Funds-Raised: ₹" + formatIndianNumber(fundRaised);


    // Schedule the next update in 1 second
    setTimeout(updateDonationFundTimer, 1000); // 1 second in milliseconds
}

// Function to format numbers in the Indian numbering style
function formatIndianNumber(number) {
    let numStr = number.toString();
    let lastThreeDigits = numStr.slice(-3);
    let otherDigits = numStr.slice(0, -3);
    if (otherDigits !== '') {
        lastThreeDigits = ',' + lastThreeDigits;
    }
    return otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeDigits;
}

// Start the donation fund timer as soon as the page loads
updateDonationFundTimer();
