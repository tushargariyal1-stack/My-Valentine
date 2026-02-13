function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Screen dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Isse button screen ke 15% se 85% ke beech hi rahega taake bahar na jaye
    const maxX = width - 150;
    const maxY = height - 100;

    const randomX = Math.floor(Math.random() * (maxX - 50)) + 50;
    const randomY = Math.floor(Math.random() * (maxY - 50)) + 50;

    // "absolute" se "fixed" kar rahe hain taake screen par kahin bhi bhage
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function celebrate() {
    // Music play
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music error:", e));

    // Hide entire question section
    document.getElementById('content-to-hide').style.display = 'none';
    document.querySelector('.image-wrapper').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    
    // Show success message
    document.getElementById('success-msg').classList.remove('hidden');

    // Blast hearts
    for(let i=0; i<100; i++) {
        setTimeout(createHeart, i * 50);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const hearts = ['❤️', '💖', '💗', '✨'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Constant background hearts
setInterval(createHeart, 300);
