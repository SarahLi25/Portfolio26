/* ===== FADE IN ON SCROLL ===== */
const fadeElements = document.querySelectorAll(".fade-in");

function handleFade() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", handleFade);


/* ===== PARALLAX LETTER SCROLL ===== */
const letters = document.querySelectorAll(".letter");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    letters.forEach((letter, index) => {
        let speed = (index % 2 === 0) ? 0.2 : -0.2;

        letter.style.transform = `
            translateY(${scrollY * speed}px)
            rotate(${index % 2 === 0 ? -2 : 2}deg)
        `;
    });
});


/* ===== OPTIONAL: SMOOTH SCROLL ===== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


document.getElementById("contactForm")?.addEventListener("submit", e => {
e.preventDefault();
document.getElementById("formStatus").textContent = "Message sent!";
});

window.addEventListener("scroll", () => {
document.querySelectorAll(".letter").forEach((l,i)=>{
let speed = (i%2?1:-1)*0.2;
l.style.transform = `translateY(${window.scrollY*speed}px)`;
});
});