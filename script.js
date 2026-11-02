
/* =========================
    MOBILE HAMBURGER MENU
========================= */

// Select hamburger button and navigation
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Check whether elements exist
if (menuToggle && navMenu) {

    // Open and close menu
    menuToggle.addEventListener("click", function () {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");

        const isOpen = menuToggle.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu after clicking navigation links
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}
/* =====================================
   CONTACT FORM VALIDATION
===================================== */

// Get the contact form and status message
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// Check if the contact form exists
if (contactForm) {

    // When the user clicks the Send Message button
    contactForm.addEventListener("submit", function(event) {

        // Stop the form from refreshing the page
        event.preventDefault();

        // Get the information entered by the user
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        // Check if any field is empty
        if (name === "" || email === "" || subject === "" || message === "") {

            formStatus.textContent = "Please fill in all the fields.";
            formStatus.style.color = "red";

        }
        // Check if the email address is valid
        else if (!email.includes("@") || !email.includes(".")) {

            formStatus.textContent = "Please enter a valid email address.";
            formStatus.style.color = "red";

        }
        // If all information is correct
        else {

            formStatus.textContent = "Thank you for your message! Your form has been submitted successfully.";
            formStatus.style.color = "lightgreen";

            // Clear the form
            contactForm.reset();
        }
    });

}
/* =====================================
   PROJECT MOBILE CAROUSEL
===================================== */

const projectContainer = document.getElementById(
    "projects-container"
);

const projectPrev = document.getElementById(
    "project-prev"
);

const projectNext = document.getElementById(
    "project-next"
);

if (projectContainer && projectPrev && projectNext) {

    // Move to previous project
    projectPrev.addEventListener("click", function() {

        projectContainer.scrollBy({
            left: -projectContainer.clientWidth,
            behavior: "smooth"
        });

    });

    // Move to next project
    projectNext.addEventListener("click", function() {

        projectContainer.scrollBy({
            left: projectContainer.clientWidth,
            behavior: "smooth"
        });

    });

}
/* =========================
   TYPING TEXT ANIMATION
========================= */

const typingText = document.getElementById("typing-text");

if (typingText) {

    const words = ["Student", "Designer"];

    let wordIndex = 0;
    let letterIndex = 0;

    function typeWord() {

        if (letterIndex < words[wordIndex].length) {

            typingText.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;

            setTimeout(typeWord, 150);

        } else {

            setTimeout(eraseWord, 1000);

        }

    }

    function eraseWord() {

        if (letterIndex > 0) {

            typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;

            setTimeout(eraseWord, 80);

        } else {

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            setTimeout(typeWord, 500);

        }

    }

    typeWord();

}
/* =========================
   SKILLS PROGRESS BAR
========================= */

const skills = document.querySelectorAll(".progress");

if (skills.length > 0) {

    window.addEventListener("scroll", function() {

        skills.forEach(function(skill) {

            const position = skill.getBoundingClientRect().top;

            if (position < window.innerHeight) {

                skill.style.width = skill.getAttribute("data-width");

            }

        });

    });

}



