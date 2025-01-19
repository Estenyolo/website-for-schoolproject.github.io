
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)'; 
        }, index * 500);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const aboutLink = document.querySelector('nav a[href="#"]'); 


    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        popup.style.display = 'flex'; 
    });


    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });


    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });


    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            popup.style.display = 'none';
        }
    });
});
