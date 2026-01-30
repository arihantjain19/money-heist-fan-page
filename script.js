let time = 0;
let timer;
let actions = 0;

// ---------- MUSIC ----------
let musicPlaying = false;

// ---------- TYPING ----------
const text =
  "A security breach threatens to expose the Royal Mint heist operation.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

// ---------- SHOW SECURITY ----------
function showSecurity(event) {
  event.preventDefault();

  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("securitySection").classList.remove("hidden");

  // Start typing
  typeEffect();

  // Start background music
  const bgMusic = document.getElementById("bgMusic");
  if (!musicPlaying) {
    bgMusic.volume = 0.4;
    bgMusic.play();
    musicPlaying = true;
  // Start operation timer
timer = setInterval(() => {
  time++;
  document.getElementById("timeStat").innerText = time + "s";
}, 1000);

  }

  // 🚨 START SIREN (BREACH ACTIVE)
  const siren = document.getElementById("sirenSound");
  siren.volume = 0.6;
  siren.play();
}

// ---------- PROTECT CREW ----------
function protectCrew() {
  const status = document.getElementById("status");
  status.innerText = "SECURED";
  status.className = "secured";

  // 🛑 STOP SIREN
  const siren = document.getElementById("sirenSound");
  siren.pause();
  siren.currentTime = 0;

  alert("Crew secured. Breach neutralized.");
  actions++;
document.getElementById("actionStat").innerText = actions;

document.getElementById("threatStat").innerText = "LOW";
document.getElementById("threatStat").style.color = "lightgreen";

document.getElementById("successStat").innerText = "92%";

// Stop timer
clearInterval(timer);

}

// ---------- MUTE TOGGLE ----------
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("muteBtn");

  if (music.paused) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
}
