// Navbar links
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');

        if(target.startsWith('#')) {
            const section = document.querySelector(target);
            if(section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.open(target, '_blank');
        }
    });
});

// CTA buttons
const ctaButtons = document.querySelectorAll('.cta-btn');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://yourbookinglink.com', '_blank');
    });
});

const socialLinks = document.querySelectorAll('.social-icons a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        window.open(url, '_blank'); 
    });
});