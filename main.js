(async function() {
  // Go fullscreen with no mercy
  document.body.requestFullscreen().catch(() => {});

  // Intensify cursor insanity: flicker, morph shapes, change colors
  setInterval(() => {
    const cursors = ["crosshair", "none", "wait", "progress", "alias", "cell", "help"];
    document.body.style.cursor = cursors[Math.floor(Math.random() * cursors.length)];
    document.body.style.filter = `hue-rotate(${Math.random()*360}deg) saturate(${Math.random()*10})`;
  }, 100);

  // History manipulation insanity
  setInterval(() => {
    const junk = Math.random().toString(36).slice(2, 10);
    history.pushState({}, "", "?id=" + junk);
    history.replaceState({}, "", "?id=" + junk + Date.now());
  }, 50);

  // Clipboard spam nightmare with random garbled messages
  const corruptMessages = [
    "SYSTEM FAILURE - POOPFART V4",
    "MALWARE.EXE IS RUNNING",
    "404 ERROR: REALITY NOT FOUND",
    "INFINITE LOOP ENGAGED",
    "BRAINS.HACKED",
    "INSANITY_PROTOCOLS_INIT",
    "☠️ ☢️ ⚠️ CRASHING ☢️ ☠️",
    "█▓▒░ERROR░▒▓█"
  ];
  setInterval(() => {
    const msg = corruptMessages[Math.floor(Math.random() * corruptMessages.length)] + " " + Math.random().toString(36).slice(2);
    navigator.clipboard.writeText(msg).catch(() => {});
  }, 200);

  // Canvas chaos: extreme visual glitch storm
  function glitchCanvas() {
    const canvas = document.getElementById("c") || (() => {
      const c = document.createElement("canvas");
      c.id = "c";
      document.body.appendChild(c);
      return c;
    })();
    const ctx = canvas.getContext("2d");

    function paintGlitch() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Glitch layers for max madness
      for (let i = 0; i < 2000; i++) {
        ctx.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 20 + 1,
          Math.random() * 20 + 1
        );
      }

      // Random horizontal slice displacement glitch
      for(let y=0; y < canvas.height; y += 10) {
        const sliceHeight = 5 + Math.random()*10;
        ctx.drawImage(
          canvas,
          0, y, canvas.width, sliceHeight,
          Math.random()*20 - 10, y + Math.random()*5 - 2.5,
          canvas.width, sliceHeight
        );
      }
    }

    setInterval(() => {
      paintGlitch();
      // Color inversion flicker for sensory overload
      ctx.globalCompositeOperation = 'difference';
      ctx.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
    }, 50);
  }
  glitchCanvas();

  // Speech synthesis madness: layered and warped voice chaos
  function speakChaos() {
    const utterances = [];
    for(let i=0; i < 10; i++) {
      const u = new SpeechSynthesisUtterance(
        "Warning. System meltdown imminent. This is Poopfart V4. " +
        Math.random().toString(36).slice(2)
      );
      u.pitch = Math.random() * 10; // extreme pitch
      u.rate = 0.1 + Math.random() * 1.5; // random slow/fast
      u.volume = 0.1 + Math.random() * 0.9;
      utterances.push(u);
    }

    // Speak them all overlapping
    utterances.forEach((u, i) => {
      setTimeout(() => speechSynthesis.speak(u), i * 100);
    });

    // Repeat forever
    setTimeout(speakChaos, 5000);
  }
  speakChaos();

  // Infinite alert and confirm spam loop — use with caution!
  function alertHell() {
    setTimeout(() => {
      alert("🛑 FATAL ERROR: BROWSER KERNEL PANIC.");
      if (confirm("SEND ERROR REPORT TO YOUR CONSCIOUSNESS?")) {
        alertHell();
      } else {
        alertHell();
      }
    }, 3000);
  }
  alertHell();

  // DOM mutation chaos: create and destroy insane number of elements
  setInterval(() => {
    for (let i=0; i<20; i++) {
      const el = document.createElement("div");
      el.style.position = "fixed";
      el.style.left = `${Math.random()*window.innerWidth}px`;
      el.style.top = `${Math.random()*window.innerHeight}px`;
      el.style.width = `${Math.random()*200}px`;
      el.style.height = `${Math.random()*200}px`;
      el.style.background = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
      el.style.zIndex = 99999;
      el.style.pointerEvents = "none";
      el.style.mixBlendMode = ["difference", "screen", "multiply"][Math.floor(Math.random()*3)];
      document.body.appendChild(el);

      setTimeout(() => el.remove(), 1000 + Math.random()*4000);
    }
  }, 200);

  // Self-mutating eval chaos (DON'T RUN IF YOU VALUE SANITY)
  setInterval(() => {
    try {
      const code = `
        (() => {
          const n = Math.floor(Math.random()*100);
          console.log("Chaos count:", n);
          return n;
        })()
      `;
      eval(code);
    } catch {}
  }, 500);

  // Browser resource drain: fire hundreds of dummy intervals for stress
  for(let i=0; i<100; i++) {
    setInterval(() => {
      const x = Math.random()*1000;
      const y = Math.random()*1000;
      const z = x*y;
      return z;
    }, 20);
  }
})();
