// DARK MODE
const darkModeBtn = document.getElementById("darkModeBtn");


darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// TYPING ANIMATION
var typed = new Typed(".typing", {
    strings: [
        "Web Developer",
        "Frontend Developer",
        "System Developer",
        "Student Programmer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// AOS SCROLL ANIMATION
AOS.init({
    duration: 1200,
});