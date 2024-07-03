document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("myAudio");

  audio.addEventListener("loadedmetadata", function () {
    // Set the start time to 8 seconds
    audio.currentTime = 8;
  });

  audio.addEventListener("canplay", function () {
    // Play the audio only if it is not already playing
    if (audio.paused) {
      audio.play();
    }
  });
});
