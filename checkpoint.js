const heartIcon = document.getElementById('heart-icon');
heartIcon.addEventListener('click', function() {
    if (heartIcon.style.color === 'red') {
        heartIcon.style.color = 'black';
    } else {
        heartIcon.style.color = 'red';
    }
});
