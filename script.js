const card = document.getElementById("card");
const textEl = document.getElementById("animated-text");

const message = "Ny mpiandraikidraharaha eto amim'ny Masoivoho Malagasy - New Delhi dia miarahaba anao tratry ny taona 2026. Ho ambinina aminjava-manasatra Tompoko.";

let index = 0;
let typingInterval;

function typeText() {
  if (index < message.length) {
    textEl.textContent += message.charAt(index);
    index++;
  } else {
    clearInterval(typingInterval);
  }
}

card.addEventListener("click", () => {
  card.classList.toggle("open");

  // reset typing when opening
  if (card.classList.contains("open")) {
    textEl.textContent = "";
    index = 0;
    clearInterval(typingInterval);
    typingInterval = setInterval(typeText, 35); // typing speed
  }
});
