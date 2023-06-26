const spotifyIcon = document.getElementById("spotify-icon");
const spotifyPlayer = document.getElementById("spotify-player");

spotifyIcon.addEventListener("click", () => {
  spotifyPlayer.classList.toggle("active");
});
