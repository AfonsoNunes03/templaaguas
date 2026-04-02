import './style.css'

// Add scroll reveal effects or other interactions here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Templaráguas Landing Page Loaded');
    
    // Smooth scroll for anchor links (handled by CSS but JS provides backup for older environments)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
