// Back to Top Button

// Create the button element
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️ Back to Top';
backToTopButton.id = 'backToTopButton';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.padding = '12px 18px';
backToTopButton.style.backgroundColor = '#333333';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
backToTopButton.style.opacity = '0';
backToTopButton.style.visibility = 'hidden';
backToTopButton.style.transition = 'opacity 0.3s, visibility 0.3s';
backToTopButton.style.fontSize = '0.9rem';

// Append the button to the body
document.body.appendChild(backToTopButton);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

// Scroll back to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
