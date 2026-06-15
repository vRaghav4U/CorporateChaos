/* ══════════════════════════════════════════
   CORPORATE CHAOS — GAME ENGINE
══════════════════════════════════════════ */

'use strict';

/* ─── EPISODE DATA ─────────────────── */
const EPISODES = [
  {
    id: 1,
    title: "The Phantom Attachment",
    scenario: "Riya: \"Here is the document you asked for.\"\nManager: \"Where is it?\"\nRiya: \"I brought it.\"\nManager: \"Your hands are empty.\"\nRiya: \"…I knew I forgot something.\"",
    correctAnswer: "Sending email without attachment 📧",
    memeText: "You played yourself. The document was in your heart. 💀",
    explanation: "The most ancient ritual in corporate life. Everyone has done it. Everyone will do it again. The attachment was never real — only the shame.",
    mood: "normal"
  },
  {
    id: 2,
    title: "Wrong Paper",
    scenario: "Employee: \"Sir, here is the electricity bill.\"\nManager: \"Why does this say 'Extra Cheese Burst Pizza'?\"\nEmployee: \"…\"\nManager: \"Did the electricity board start selling garlic bread?\"\nEmployee quickly grabs the paper back.",
    correctAnswer: "Wrong attachment 📂",
    memeText: "At least the garlic bread was probably good. 🍕",
    explanation: "Wrong attachment energy — but make it physical. The panic of grabbing it back is universal. We've all been that employee.",
    mood: "chaotic"
  },
  {
    id: 3,
    title: "Recall and Replace",
    scenario: "Employee: \"Please give me back the paper I gave earlier.\"\nManager: \"Why?\"\nEmployee: \"That was the wrong one.\"\nManager: \"I already started reading it.\"\nEmployee: \"Please pretend you didn't.\"",
    correctAnswer: "Recall and replace 📩",
    memeText: "The 'unsend' button, but in real life. 😬",
    explanation: "Digital recall emails exist for a reason. This is that reason — but somehow worse, because it's happening in person.",
    mood: "normal"
  },
  {
    id: 4,
    title: "The Quick Question",
    scenario: "Employee: \"Just one quick question.\"\nSecond employee: \"Actually I also wanted to ask something.\"\nThird employee pulls a chair closer.\nFourth employee starts writing on the whiteboard.\nManager walks in: \"Why does this look like a conference now?\"",
    correctAnswer: "Scope creep 🧩",
    memeText: "This is fine. 🔥🐶 The whiteboard markers are fine.",
    explanation: "The 'quick question' is a myth. In the wild, it transforms into a full conference with markers, chairs, and someone's unsolicited opinion.",
    mood: "chaotic"
  },
  {
    id: 5,
    title: "Surprise Incoming",
    scenario: "Manager: \"Everything going smoothly?\"\nEmployee: \"Absolutely.\"\nEmployee's phone suddenly starts vibrating nonstop.\nManager: \"Should I be concerned?\"\nEmployee: \"Depends how much you like surprises.\"",
    correctAnswer: "Hidden production issue 🐞",
    memeText: "Absolutely fine. Totally under control. 📵🔥",
    explanation: "The classic 'everything is fine' moment — right before it isn't. The phone knows. The phone always knows.",
    mood: "panic"
  },
  {
    id: 6,
    title: "I Already Sent It",
    scenario: "Employee: \"I already gave everyone the report.\"\nPerson 1: \"I didn't get anything.\"\nPerson 2: \"Same.\"\nPerson 3: \"Nothing here either.\"\nEmployee slowly opens bag and finds the papers still inside.",
    correctAnswer: "Forgot to send / sharing failure 📩",
    memeText: "The report was inside us all along. 🗂️",
    explanation: "Confidence is not the same as completion. The papers were always in the bag. They were just waiting for this moment.",
    mood: "normal"
  },
  {
    id: 7,
    title: "Five Minutes",
    scenario: "Employee: \"This will only take five minutes.\"\n30 minutes later…\nAnother employee arrives with coffee.\nSomeone else brings markers.\nManager: \"Why are there now seven people involved?\"",
    correctAnswer: "Underestimated complexity 🔥",
    memeText: "Five minutes. Seven people. One whiteboard. Same energy. ⏰",
    explanation: "Time estimation in the workplace is optimistic fiction. The five-minute task only exists in a world where nothing is connected to anything else.",
    mood: "chaotic"
  },
  {
    id: 8,
    title: "Final Version",
    scenario: "Priya places four papers on the table.\nPriya: \"This one is final.\"\nManager points to another: \"Then what is this?\"\nPriya: \"That was final before this final.\"\nManager: \"And this third one?\"\nPriya: \"That became final after the previous final.\"",
    correctAnswer: "Version confusion 📁",
    memeText: "The true final version was the friends we made along the way. 📄",
    explanation: "Version naming descends into chaos. It starts with 'final' and ends with something nobody can explain with a straight face.",
    mood: "chaotic"
  },
  {
    id: 9,
    title: "The Printer",
    scenario: "Employee: \"The printer is completely broken.\"\nAnother employee presses the same button.\nPrinter immediately starts working.\nEmployee: \"Interesting.\"",
    correctAnswer: "Intermittent issue 👻",
    memeText: "The machine feared the witness. As it should. 🖨️✨",
    explanation: "Intermittent bugs exist in a spiritual plane. They appear for some, vanish for others, and leave everyone questioning reality.",
    mood: "chaotic"
  },
  {
    id: 10,
    title: "Thanks Everyone",
    scenario: "Person 1: \"Thanks everyone.\"\nPerson 2: \"Thanks!\"\nPerson 3: \"Noted.\"\nPerson 4: \"Received.\"\nPerson 5: \"Thank you all.\"\nOne employee quietly gets up and closes the office door.",
    correctAnswer: "Reply-all storm 🔔",
    memeText: "Corporate disaster unlocked 💥 The inbox cannot be saved.",
    explanation: "Reply-All is the nuclear option of email. Once triggered, the chain runs its full course. The door closing is a coping mechanism.",
    mood: "disaster"
  },
  {
    id: 11,
    title: "Almost Done",
    scenario: "Manager: \"Any progress?\"\nEmployee: \"Almost done.\"\n10 minutes later…\nManager: \"Now?\"\nEmployee: \"Very close.\"\nOne hour later…\nEmployee: \"Basically finished.\"",
    correctAnswer: "Infinite loading ⏳",
    memeText: "Basically finished. Fundamentally incomplete. 🌀",
    explanation: "'Almost done' and 'basically finished' are not the same as done. In the workplace, they can last indefinitely.",
    mood: "normal"
  },
  {
    id: 12,
    title: "One Document",
    scenario: "Employee walks toward the manager holding a paper.\nSecurity guard: \"Password?\"\nAnother person: \"Approval?\"\nReceptionist: \"Verification code?\"\nEmployee: \"I just want to hand over one document.\"",
    correctAnswer: "Multi-factor authentication 🔐",
    memeText: "Please verify your identity to hand over this A4 sheet. 🔐",
    explanation: "The corporate verification process was designed for security. It was not designed for handing someone a single piece of paper.",
    mood: "chaotic"
  },
  {
    id: 13,
    title: "Works Here",
    scenario: "Manager: \"Did you check it already?\"\nEmployee: \"Yes.\"\nManager: \"Where?\"\nEmployee: \"At my desk.\"\nManager: \"Did anyone else check?\"\nEmployee: \"…no.\"",
    correctAnswer: "Works on my machine 💻",
    memeText: "Works on my machine. Ship the machine. 🖥️",
    explanation: "The desk is a controlled environment. The rest of the world is not. This is the gap between QA and production.",
    mood: "normal"
  },
  {
    id: 14,
    title: "Quick Meeting",
    scenario: "Employee: \"Quick meeting.\"\nTeam member: \"About what?\"\nEmployee: \"We'll decide once everyone joins.\"\nTeam member: \"Then why are we meeting first?\"",
    correctAnswer: "Unclear requirements 📅",
    memeText: "The agenda will be defined in a follow-up meeting. 🗓️",
    explanation: "A meeting without a purpose is just people in a room. Defining the agenda during the meeting is the natural next step.",
    mood: "calm"
  },
  {
    id: 15,
    title: "Fixed It",
    scenario: "Employee: \"I fixed the problem.\"\nManager: \"Great.\"\nEmployee: \"But now the other thing stopped working.\"\nManager: \"How?\"\nEmployee: \"Technically… the first problem is fixed.\"",
    correctAnswer: "Fix causing another issue 🔥",
    memeText: "DISASTER MODE ENGAGED 💥 Technically, it's progress.",
    explanation: "Every fix is a door into an unknown room. The first problem is solved. The second problem was always there, waiting.",
    mood: "panic"
  }
];

/* ─── MOOD CONFIGS ─────────────────── */
const MOODS = {
  calm:    { label: "CALM 😌",    class: "calm" },
  normal:  { label: "NORMAL 🙂",  class: "normal" },
  chaotic: { label: "CHAOTIC 🔥", class: "chaotic" },
  panic:   { label: "PANIC 🚨",   class: "panic" },
  disaster:{ label: "DISASTER 💥",class: "disaster" }
};

/* ─── STATE ──────────────────────────── */
let currentIndex = 0;
let timerInterval = null;
let timeLeft = 30;
let soundEnabled = true;
let chaosLevel = 0;
const TOTAL = EPISODES.length;

/* ─── ELEMENT REFS ───────────────────── */
const startScreen   = document.getElementById('start-screen');
const episodeScreen = document.getElementById('episode-screen');
const revealScreen  = document.getElementById('reveal-screen');
const endScreen     = document.getElementById('end-screen');

const startBtn   = document.getElementById('start-btn');
const nextBtn    = document.getElementById('next-btn');
const replayBtn  = document.getElementById('replay-btn');
const restartBtn = document.getElementById('restart-btn');
const soundBtn   = document.getElementById('sound-btn');

const epNumEl       = document.getElementById('ep-num');
const chaosFill     = document.getElementById('chaos-fill');
const chaosPct      = document.getElementById('chaos-pct');
const moodChip      = document.getElementById('mood-chip');
const scenarioEl    = document.getElementById('scenario');
const ringProg      = document.getElementById('ring-prog');
const timerDigits   = document.getElementById('timer-digits');
const epProgressFill= document.getElementById('ep-progress-fill');
const watchBarFill  = document.getElementById('watch-bar-fill');
const epOrbs        = document.getElementById('ep-orbs');

const revealAnswer  = document.getElementById('reveal-answer');
const memeLine      = document.getElementById('meme-line');
const revealExp     = document.getElementById('reveal-explanation');
const revealOrbs    = document.getElementById('reveal-orbs');
const finalChaosVal = document.getElementById('final-chaos-val');

/* ─── RING CIRCUMFERENCE ─── r=46 → C≈289 */
const RING_C = 2 * Math.PI * 46; // ≈ 289

/* ═══════════════════════════════════════
   SCREEN TRANSITIONS
═══════════════════════════════════════ */
function showScreen(show, hide = []) {
  [startScreen, episodeScreen, revealScreen, endScreen].forEach(s => {
    if (s === show) {
      s.classList.remove('fade-out');
      requestAnimationFrame(() => { s.classList.add('active'); });
    } else {
      s.classList.remove('active');
    }
  });
}

/* ═══════════════════════════════════════
   FLASH EFFECT
═══════════════════════════════════════ */
function flashScreen() {
  const div = document.createElement('div');
  div.className = 'flash-overlay';
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 500);
}

/* ═══════════════════════════════════════
   CHAOS METER
═══════════════════════════════════════ */
function updateChaos(episodeIdx) {
  const moodMultipliers = { calm: 3, normal: 5, chaotic: 8, panic: 10, disaster: 15 };
  const ep = EPISODES[episodeIdx];
  const gain = moodMultipliers[ep.mood] || 5;
  chaosLevel = Math.min(100, chaosLevel + gain);

  chaosFill.style.width = chaosLevel + '%';
  chaosPct.textContent  = Math.round(chaosLevel) + '%';

  if (chaosLevel > 70) {
    chaosFill.style.background = 'linear-gradient(90deg,#8b0000,#e50914,#ff4444)';
  } else if (chaosLevel > 40) {
    chaosFill.style.background = 'linear-gradient(90deg,#6b0000,#e50914,#ff6622)';
  }
}

/* ═══════════════════════════════════════
   MOOD THEMING
═══════════════════════════════════════ */
function applyMood(mood, orbsEl) {
  if (!orbsEl) return;
  const moodClasses = ['mood-calm','mood-normal','mood-chaotic','mood-panic','mood-disaster'];
  moodClasses.forEach(c => orbsEl.classList.remove(c));
  orbsEl.classList.add('mood-' + mood);
}

/* ═══════════════════════════════════════
   LOAD EPISODE
═══════════════════════════════════════ */
function loadEpisode(idx) {
  const ep = EPISODES[idx];
  const mood = ep.mood;
  const moodCfg = MOODS[mood];

  epNumEl.textContent = String(idx + 1).padStart(2, '0');
  scenarioEl.textContent = ep.scenario;

  // Mood chip
  const chipClasses = ['calm','normal','chaotic','panic','disaster'];
  chipClasses.forEach(c => moodChip.classList.remove(c));
  moodChip.textContent = moodCfg.label;
  moodChip.classList.add(moodCfg.class);

  // Apply mood theming
  applyMood(mood, epOrbs);

  // Reset timer visuals
  timeLeft = 15;
  timerDigits.textContent = '15';
  timerDigits.classList.remove('urgent-pulse');
  ringProg.style.strokeDashoffset = '0';
  ringProg.classList.remove('warn', 'urgent');
  epProgressFill.style.width = '0%';

  // Update watching progress bar (overall series progress)
  const watchPct = (idx / TOTAL) * 100;
  watchBarFill.style.width = watchPct + '%';
}

/* ═══════════════════════════════════════
   TIMER
═══════════════════════════════════════ */
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  const totalTime = 15;

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      triggerReveal();
      return;
    }

    timerDigits.textContent = String(timeLeft);

    // Ring progress
    const pct = timeLeft / totalTime;
    const offset = RING_C * (1 - pct);
    ringProg.style.strokeDashoffset = String(offset);

    // Episode strip
    const stripPct = ((totalTime - timeLeft) / totalTime) * 100;
    epProgressFill.style.width = stripPct + '%';

    // Color warnings
    if (timeLeft <= 5) {
      ringProg.classList.add('urgent');
      ringProg.classList.remove('warn');
      timerDigits.classList.add('urgent-pulse');
    } else if (timeLeft <= 12) {
      ringProg.classList.add('warn');
      ringProg.classList.remove('urgent');
      timerDigits.classList.remove('urgent-pulse');
    }
  }, 1000);
}

/* ═══════════════════════════════════════
   REVEAL
═══════════════════════════════════════ */
function triggerReveal() {
  clearInterval(timerInterval);
  flashScreen();

  const ep = EPISODES[currentIndex];

  // Populate reveal card
  revealAnswer.textContent = ep.correctAnswer;
  memeLine.textContent     = ep.memeText;
  revealExp.textContent    = ep.explanation;

  // Apply mood to reveal orbs
  applyMood(ep.mood, revealOrbs);

  // Update chaos meter
  updateChaos(currentIndex);

  // Stagger the reveal animation
  setTimeout(() => showScreen(revealScreen), 80);
}

/* ═══════════════════════════════════════
   NEXT EPISODE / REPLAY
═══════════════════════════════════════ */
function goNextEpisode() {
  currentIndex++;
  if (currentIndex >= TOTAL) {
    showEndScreen();
    return;
  }
  loadEpisode(currentIndex);
  showScreen(episodeScreen);
  setTimeout(startTimer, 200);
}

function replayEpisode() {
  loadEpisode(currentIndex);
  showScreen(episodeScreen);
  setTimeout(startTimer, 200);
}

function showEndScreen() {
  finalChaosVal.textContent = Math.round(chaosLevel) + '%';
  watchBarFill.style.width = '100%';
  showScreen(endScreen);
}

function restartGame() {
  currentIndex = 0;
  chaosLevel = 0;
  chaosFill.style.width = '0%';
  chaosPct.textContent  = '0%';
  chaosFill.style.background = '';
  watchBarFill.style.width = '0%';
  showScreen(startScreen);
}

/* ═══════════════════════════════════════
   SOUND (minimal Web Audio API)
═══════════════════════════════════════ */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playWhoosh() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.35, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length) * 0.22;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  } catch (e) {}
}

function playRevealBoom() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.55);
  } catch (e) {}
}

/* ═══════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════ */
startBtn.addEventListener('click', () => {
  playWhoosh();
  currentIndex = 0;
  loadEpisode(0);
  showScreen(episodeScreen);
  setTimeout(startTimer, 300);
});

nextBtn.addEventListener('click', () => {
  playWhoosh();
  goNextEpisode();
});

replayBtn.addEventListener('click', () => {
  playWhoosh();
  replayEpisode();
});

restartBtn.addEventListener('click', () => {
  playWhoosh();
  restartGame();
});

soundBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundBtn.textContent = soundEnabled ? '🔊' : '🔇';
  soundBtn.style.opacity = soundEnabled ? '0.6' : '0.3';
});

/* Trigger reveal when timer reaches 0 — also expose as manual for testing */
window._triggerReveal = triggerReveal;

/* ─── INIT: show start screen ──────── */
showScreen(startScreen);
