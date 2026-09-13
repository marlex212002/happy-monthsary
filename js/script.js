const openButton = document.getElementById("openButton");

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");


/* =========================
   OPENING SCREEN
========================= */

openButton.addEventListener("click", () => {

    opening.classList.add("opening-hidden");

    setTimeout(() => {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");

        mainContent.classList.add("show-content");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});


/* =========================
   REASONS
========================= */

const reasons = document.querySelectorAll(".reason");

reasons.forEach(reason => {

    reason.addEventListener("click", () => {

        reason.classList.toggle("active");

    });

});

/* =========================
   LOVE LETTER TYPEWRITER
========================= */

const letterText = document.getElementById("loveLetterText");

const originalText = letterText.textContent.trim();

letterText.textContent = "";

let letterIndex = 0;

function typeLetter() {

    if (letterIndex < originalText.length) {

        letterText.textContent += originalText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}