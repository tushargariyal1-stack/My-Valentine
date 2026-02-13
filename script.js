function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Mobile screen dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Safe boundaries: Isse button screen ke 10% se 80% ke beech hi rahega
    // Taake corners se bahar na nikal paye
    const maxX = width - 120;
    const maxY = height - 100;

    const randomX = Math.floor(Math.random() * (maxX - 20)) + 20;
    const randomY = Math.floor(Math.random() * (maxY - 20)) + 20;

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function celebrate() {
    const music = document.getElementById('bgMusic');
    music.play();

    // Hide everything except the message
    document.querySelector('.image-wrapper').style.display = 'none';
    document.getElementById('main-question').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    
    document.getElementById('success-msg').classList.remove('hidden');

    // Blast hearts
    for(let i=0; i<100; i++) {
        setTimeout(createHeart, i * 50);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const hearts = ['❤️', '💖', '💗', '💓'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
