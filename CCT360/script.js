//Section 1: Visualscape
const video = document.getElementById("videoPlayer");

const videoMessage = document.getElementById("videoMessage");

// Play
document.getElementById("playBtn").addEventListener("click", async () => {

    try {
        await video.play();
        videoMessage.textContent = "Playing video.";

    } catch (error) {
        videoMessage.textContent = "Video could not play. Check the video file.";
        console.error("Video error:", error);
    }

});

// Pause
document.getElementById("pauseBtn").addEventListener("click", () => {

    video.pause();

    videoMessage.textContent = "Video paused.";

});

// Stop
document.getElementById("stopBtn").addEventListener("click", () => {

    video.pause();
    video.currentTime = 0;

    videoMessage.textContent = "Video stopped.";

});

// Effect
document.getElementById("effectBtn").addEventListener("click", () => {

    video.classList.toggle("zoom");

});

// Volume
video.volume = 0.8;

// Detect loading problems
video.addEventListener("error", () => {

    videoMessage.textContent = "Unable to load video. Check the file path and format.";

    console.error("Video loading error:", video.error);

});

// Detect successful loading
video.addEventListener("loadeddata", () => {

    videoMessage.textContent = "Video successfully loaded!";

});


// Section 2: Interactive Ocean Animation

const oceanScene = document.getElementById("oceanScene");

// Waves move faster
document.getElementById("animateBtn").addEventListener("click", () => {

    oceanScene.classList.add("fast");

});

// Calm Ocean Waves
document.getElementById("calmBtn").addEventListener("click", () => {

    oceanScene.classList.remove("fast");

});


// Section 3: Soundscape

const audio = document.getElementById("audioPlayer");

const audioMessage = document.getElementById("audioMessage");

const audioVolume = document.getElementById("audioVolume");

// Play
document.getElementById("audioPlay").addEventListener("click", () => {

    audio.play();

    audioMessage.textContent = "Playing ocean waves.";

});

// Pause
document.getElementById("audioPause").addEventListener("click", () => {

    audio.pause();

    audioMessage.textContent = "Ocean sound paused.";

});

// Stop
document.getElementById("audioStop").addEventListener("click", () => {

    audio.pause();

    audio.currentTime = 0;

    audioMessage.textContent = "Ocean sound stopped.";

});

// Volume
audioVolume.addEventListener("input", () => {

    audio.volume = Number(audioVolume.value);

});

audio.addEventListener("error", () => {

    audioMessage.textContent = "Unable to load audio. Check the audio folder.";

});

audio.volume = 0.8;
