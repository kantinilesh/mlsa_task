document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in sections on scroll
    gsap.utils.toArray('section').forEach((section, i) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate announcement cards
    gsap.from("#announcements .bg-white", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#announcements",
            start: "top 80%"
        }
    });

    // Animate leadership team images
    gsap.from("#about img", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%"
        }
    });

    // Animate gallery images
    gsap.from("#gallery img", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#gallery",
            start: "top 80%"
        }
    });

    // Show newsletter popup after 5 seconds
    setTimeout(function() {
        gsap.to("#newsletter-popup", {
            display: "flex",
            opacity: 1,
            duration: 0.5
        });
    }, 5000);

    // Close newsletter popup
    document.getElementById('close-popup').addEventListener('click', function() {
        gsap.to("#newsletter-popup", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                document.getElementById('newsletter-popup').style.display = 'none';
            }
        });
    });

    // Handle newsletter form submission
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        gsap.to("#newsletter-popup", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                document.getElementById('newsletter-popup').style.display = 'none';
            }
        });
    });

    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        e.target.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            gsap.to(window, {
                duration: 1,
                scrollTo: targetId,
                ease: "power2.inOut"
            });
        });
    });
});