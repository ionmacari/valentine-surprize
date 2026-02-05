const questionText = "Will you be my Valentine?";
const finalText =
`Poate că nu sunt alături de tine în data de 14, dar promit că atunci când o să vin acasă o să încerc să te fac cea mai fericită fiindcă pentru mine asta contează.

Îți mulțumesc că îmi ești alături și mă faci să zâmbesc în fiecare zi.

Te iubesc din tot sufletul meu și abia aștept să te văd și să te fac fericită.`;

const questionEl = document.getElementById("question");
const messageEl = document.getElementById("message");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartContainer = document.getElementById("heart-container");

const introVideo = document.getElementById("intro-video");
const photoNo = document.getElementById("photo-no");
const photoFinal = document.getElementById("photo-final");

let yesScale = 1;

/* Typing effect */
function typeWriter(element, text, speed = 40) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

/* Initial typing question */
typeWriter(questionEl, questionText, 70);

/* Explozie de inimi */
function heartExplosion(x, y, count = 12) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "🤍";
    heart.style.left = x + Math.random() * 40 - 20 + "px";
    heart.style.top = y + Math.random() * 40 - 20 + "px";
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

/* NO button */
noBtn.addEventListener("click", (e) => {
  typeWriter(questionEl, "NU ACCEPT ACEST RĂSPUNS", 60);

  // clipul dispare
  introVideo.classList.add("hidden");

  // arata poza NO
  photoNo.classList.remove("hidden");

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  heartExplosion(e.clientX, e.clientY, 8);
});

/* YES button */
yesBtn.addEventListener("click", () => {
  questionEl.style.display = "none";
  document.querySelector(".buttons").style.display = "none";

  // ascunde poza NO
  photoNo.classList.add("hidden");

  // arata poza YES
  photoFinal.classList.remove("hidden");

  typeWriter(messageEl, finalText, 35);

  heartExplosion(window.innerWidth / 2, window.innerHeight / 2, 35);
});
