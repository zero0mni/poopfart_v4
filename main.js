
(async function() {
  document.body.requestFullscreen().catch(() => {});
  setInterval(() => {
    document.body.style.cursor = Math.random() > 0.5 ? "crosshair" : "none";
    history.pushState({}, "", "?id=" + Math.random().toString(36));
    navigator.clipboard.writeText("SYSTEM FAILURE - POOPFART V4");
  }, 300);

  function glitchCanvas() {
    const canvas = document.getElementById("c");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setInterval(() => {
      for (let i = 0; i < 500; i++) {
        ctx.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 5, 5);
      }
    }, 100);
  }
  glitchCanvas();

  const utterance = new SpeechSynthesisUtterance("Warning. System meltdown imminent. This is Poopfart V4.");
  utterance.pitch = 2;
  utterance.rate = 0.7;
  speechSynthesis.speak(utterance);

  setTimeout(() => {
    alert("🛑 FATAL ERROR: BROWSER KERNEL PANIC.");
    confirm("SEND ERROR REPORT TO YOUR CONSCIOUSNESS?");
  }, 2000);
})();
