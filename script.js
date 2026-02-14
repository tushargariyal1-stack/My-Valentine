function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Isse button screen ke safe area mein hi rahega
    const maxX = width - 150;
    const maxY = height - 100;

    const randomX = Math.floor(Math.random() * (maxX - 50)) + 50;
    const randomY = Math.floor(Math.random() * (maxY - 50)) + 50;

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function celebrate() {
    // 1. Music Play
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music play error:", e));

    // 2. Background Change
    document.getElementById('bodyTag').classList.add('celebrate-bg');

    // 3. Card Animation
    document.getElementById('mainCard').style.transform = "scale(1.05)";

    // 4. Content Switch
    document.getElementById('content-to-hide').style.display = 'none';
    document.getElementById('mainTitle').style.display = 'none';
    
    // 5. Success Message Show
    document.getElementById('success-msg').classList.remove('hidden');

    // 6. Photo change karke Celebration wali GIF lagana
    // Ye GIF celebratory hai, agar aapko apni hi photo rakhni hai toh ye line delete kar dena
    document.getElementById('displayImg').src = "https://media.giphy.com/media/c76IJLufpNwSULPk77/giphy.gif";

    // 7. Infinite Hearts Blast
    for(let i=0; i<150; i++) {
        setTimeout(createHeart, i * 40);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const hearts = ['❤️', '💖', '💗', '💓', '💍', '✨'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 30 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Background mein halki barish dilo ki pehle se chalti rahegi
setInterval(createHeart, 500);
