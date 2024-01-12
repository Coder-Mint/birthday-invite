import confetti from 'https://cdn.skypack.dev/canvas-confetti';
function makeConfetti() {
    confetti();
};
makeConfetti();
setInterval(makeConfetti, 2000);