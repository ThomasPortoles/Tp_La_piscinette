// PEPOOOOO
const lien = document.querySelector("a");
function peepo() {
  let isListening = true;
  if (isListening) {
    const audio = new Audio("./assets/peepo.mp3");
    audio.play();
    console.log("peepo!");
    isListening = false;

    setTimeout(() => {
      isListening = true;
    }, 6000);
  }
}

lien.addEventListener("click", peepo());
