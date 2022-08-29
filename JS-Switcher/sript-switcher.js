/* ================================ toggle style switcher =================================== */

const styleSwitcher = document.querySelector(".style-switcher");
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const colorsIcon = document.querySelector(".colors-icon");
const colorsItem = document.querySelector(".colors-item");
const languageBtn = document.querySelector(".language-btn");
const language = document.querySelector(".language");
const dayNight = document.querySelector(".day-night");


styleSwitcherToggler.addEventListener("click", () => {

    // Add And Remove Class Toggler
    colorsIcon.classList.toggle("open");
    dayNight.classList.toggle("open");
    languageBtn.classList.toggle("open");
    // Remove All Classes
    colorsItem.classList.remove("open-colors");
    styleSwitcher.classList.remove("open-colors");
    styleSwitcher.classList.remove("open-language");
    language.classList.remove("open-language");
})
// Event clik any icon Add Class from Element colors And language And father All Elements

colorsIcon.addEventListener("click", () => {
    
    if (styleSwitcher.classList.contains("open-colors")
    && colorsItem.classList.contains("open-colors")) {
        // styleSwitcher.classList.remove("open-language");
        styleSwitcher.classList.remove("open-colors");
        colorsItem.classList.remove("open-colors");
        // language.classList.remove("open-language");
    } 
    else if (language.classList.contains("open-language")
    && styleSwitcher.classList.contains("open-language")) {
    colorsItem.classList.toggle("open-colors");
    styleSwitcher.classList.toggle("open-colors");
    styleSwitcher.classList.remove("open-language");
    language.classList.remove("open-language");
}else {
    styleSwitcher.classList.remove("open-language");
    language.classList.remove("open-language");
    styleSwitcher.classList.toggle("open-colors");
        colorsItem.classList.toggle("open-colors");

    }
})

languageBtn.addEventListener("click", () => {
    
    if (styleSwitcher.classList.contains("open-language")
    && language.classList.contains("open-language")) {
        styleSwitcher.classList.remove("open-language");
        language.classList.remove("open-language");
    } 
    else if (colorsItem.classList.contains("open-colors")
    && styleSwitcher.classList.contains("open-colors")) {
    colorsItem.classList.remove("open-colors");
    styleSwitcher.classList.remove("open-colors");
    styleSwitcher.classList.toggle("open-language");
    language.classList.toggle("open-language");
} else {
    colorsItem.classList.remove("open-colors");
    styleSwitcher.classList.remove("open-colors");
    styleSwitcher.classList.toggle("open-language");
        language.classList.toggle("open-language");

    }
})

window.addEventListener("scroll", () => {
    
    if (styleSwitcher.classList.contains("open-colors")
    || styleSwitcher.classList.contains("open-language")
    || colorsIcon.classList.contains("open")
    || dayNight.classList.contains("open")
    || languageBtn.classList.contains("open")
    ) {
        styleSwitcher.classList.remove("open-colors");
        styleSwitcher.classList.remove("open-language");
        colorsIcon.classList.remove("open");
        dayNight.classList.remove("open");
        languageBtn.classList.remove("open");
    } 
})


/* ================================ Them Colors =================================== */

const alternateStyle = document.querySelectorAll(".alternate-style");

console.log(alternateStyle)
function setActiveStyle(color) {
    alternateStyle.forEach(style => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

/* ================================ Theme light and dark mode  =================================== */

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})