document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const pieces = [];

    // Создаем 4 кусочка
    for (let i = 1; i <= 4; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.id = `piece${i}`;
        pieces.push(piece);
        logo.appendChild(piece);
    }

    function scatter() {
        pieces.forEach(piece => {
            piece.style.transform = `translate(${getRandomInt(-200, 200)}px, ${getRandomInt(-200, 200)}px)`;
            piece.style.opacity = '0';
        });
    }

    function gather() {
        pieces.forEach(piece => {
            piece.style.transform = 'translate(0, 0)';
            piece.style.opacity = '1';
        });
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setInterval(() => {
        scatter();
        setTimeout(gather, 1000);
    }, 3000);
});