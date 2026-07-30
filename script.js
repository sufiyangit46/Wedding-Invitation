// Auto-play music on page load with browser policy handling
let music = document.getElementById("music");
let musicBtn = document.querySelector(".music-btn");

function playMusic() {
    music.play().then(() => {
        musicBtn.textContent = "🎵 Pause Music";
        musicBtn.onclick = pauseMusic;
    }).catch(error => {
        console.log("Audio play failed:", error);
        musicBtn.textContent = "🎵 Play Music";
    });
}

function pauseMusic() {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
    musicBtn.onclick = playMusic;
}

// Attempt to autoplay on page load
window.addEventListener('DOMContentLoaded', () => {
    music.play().then(() => {
        musicBtn.textContent = "🎵 Pause Music";
        musicBtn.onclick = pauseMusic;
    }).catch(error => {
        console.log("Autoplay prevented by browser. User interaction required.");
        musicBtn.textContent = "🎵 Play Music";
        musicBtn.onclick = playMusic;
    });

    // Handle audio loading errors
    music.addEventListener('error', (e) => {
        console.error("Audio loading error:", e);
        musicBtn.textContent = "⚠️ Audio Error";
    });
});

// Countdown Timer
let target = new Date("Dec 20, 2026 19:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let diff = target - now;

    if (diff > 0) {
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    } else {
        document.getElementById("timer").innerHTML = "🎉 It's Wedding Day!";
    }
}, 1000);