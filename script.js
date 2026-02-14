// Function for No Button - Isko hamesha YES se door rakhega
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Screen dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Isse button screen ke safe area mein rahega
    // -200 isliye taake right side se bahar na nikal jaye
    const maxX = width - 150;
    const maxY = height - 150;

    // Random position lekin thoda gap ke saath
    const randomX = Math.floor(Math.random() * (maxX - 50)) + 50;
    const randomY = Math.floor(Math.random() * (maxY - 50)) + 50;

    noBtn.style.position = 'fixed'; // fixed position se screen par kahin bhi bhagega
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function celebrate() {
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music play error:", e));

    document.getElementById('bodyTag').classList.add('celebrate-bg');
    document.getElementById('mainCard').style.transform = "scale(1.05)";
    document.getElementById('content-to-hide').style.display = 'none';
    document.getElementById('mainTitle').style.display = 'none';
    document.getElementById('success-msg').classList.remove('hidden');

    // Photo change karke Celebration wali GIF
    document.getElementById('displayImg').src = "https://media.giphy.com/media/c76IJLufpNwSULPk77/giphy.gif";

    for(let i=0; i<150; i++) {
        setTimeout(createHeart, i * 40);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const hearts = ['❤️', '💖', '💗', '✨'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 30 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 500);
