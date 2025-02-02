// script.js
const logo = document.getElementById('logo');
const logoImg = document.getElementById('logo-img');
const logoText = document.getElementById('logo-text');

logo.addEventListener('mouseenter', () => {
    // Добавляем класс для анимации
    logoImg.classList.add('explode');
    logoText.classList.add('explode');

    // Убираем класс после завершения анимации
    setTimeout(() => {
        logoImg.classList.remove('explode');
        logoText.classList.remove('explode');
    }, 1500); // Время анимации (1.5 секунды)
});