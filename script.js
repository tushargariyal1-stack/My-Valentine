function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // 1. Isse button "Fixed" ho jayega taake wo YES ki jagah se hat jaye
    noBtn.style.position = 'fixed';

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 2. Safe Area Calculation (Kinaron se door)
    const maxX = width - 150;
    const maxY = height - 150;

    let randomX, randomY;

    // 3. Logic: Button ko tab tak random position do jab tak wo YES button ke paas ho
    // Hum chahte hain ki wo screen ke beech mein (jahan YES hai) na ruke
    do {
        randomX = Math.floor(Math.random() * (maxX - 50)) + 50;
        randomY = Math.floor(Math.random() * (maxY - 50)) + 50;
    } while (
        // Agar random position screen ke bilkul center mein ho toh phir se try kare
        randomX > width/2 - 100 && randomX < width/2 + 100 &&
        randomY > height/2 - 100 && randomY < height/2 + 100
    );

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Celebration wala baki code wahi rahega...
function celebrate() {
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Music error"));

    document.getElementById('bodyTag').classList.add('celebrate-bg');
    document.getElementById('content-to-hide').style.display = 'none';
    document.getElementById('mainTitle').style.display = 'none';
    document.getElementById('success-msg').classList.remove('hidden');
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
    heart.style.fontSize = Math.random() * 25 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);
