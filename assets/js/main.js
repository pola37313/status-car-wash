document.addEventListener('DOMContentLoaded', () => {
    console.log('STATUS Car Wash initialized successfully.');
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 11, 14, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(11, 11, 14, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});
