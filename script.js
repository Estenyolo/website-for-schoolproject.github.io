
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1; // Устанавливаем непрозрачность
            el.style.transform = 'translateY(0)'; // Возвращаем элемент на место
        }, index * 500); // Задержка между появлениями
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const aboutLink = document.querySelector('nav a[href="#"]'); //  Селектор для 'О нас'

    // Открытие всплывающего окна
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем переход по ссылке
        popup.style.display = 'flex'; // Показываем всплывающее окно
    });

    // Закрытие всплывающего окна при нажатии на "x"
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Закрытие всплывающего окна при нажатии на любое место на экране
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Закрытие всплывающего окна при нажатии клавиши Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            popup.style.display = 'none';
        }
    });
});
