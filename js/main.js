// Wait for the HTML to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select the button and the menu
    const toggleButton = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.site-nav');

    // 2. Listen for a click event
    toggleButton.addEventListener('click', () => {
        
        // 3. Toggle the 'is-open' class
        navMenu.classList.toggle('is-open');
        
        // Optional: Update accessibility attribute
        const isOpen = navMenu.classList.contains('is-open');
        toggleButton.setAttribute('aria-expanded', isOpen);
    });
});