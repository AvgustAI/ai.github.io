// Эффект распада логотипа
document.querySelector('.logo img').addEventListener('mouseenter', function() {
    const img = this;
    img.style.transition = 'transform 0.5s ease-in-out';
    img.style.transform = 'scale(1.2)';
});

document.querySelector('.logo img').addEventListener('mouseleave', function() {
    const img = this;
    img.style.transition = 'transform 0.5s ease-in-out';
    img.style.transform = 'scale(1)';
});
