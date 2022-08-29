let navBar = document.querySelector(".navbar");
let btn = document.querySelectorAll(".navbar .btn-menu i");
let btnUp = document.querySelector('.btn-up');

window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add("sticky") : navBar.classList.remove("sticky")
    this.scrollY >= 600 ? btnUp.style.display = "block" : btnUp.style.display = "none";
}
/*===== Nav Toggeler ===== */
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}
/* ===== Closing menu wjen link is clicked*/
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/* ===== Scroll Section Active Link ===== */
const section = document.querySelectorAll("section[id], footer");

function scrollActive() {
    const scrollY = window.pageYOffset;
    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active');
        }

    });
}

window.addEventListener('scroll', scrollActive)


// let settingBtn = document.querySelectorAll("#setting-btn,#setting-btn-1,#setting-btn-2");
// let button = document.querySelector(".setting-btn .row-btn");
// let btnLang = document.querySelector(".setting-btn .language-btn .row");



// settingBtn[0].onclick = function () {
//     button.classList.toggle("active");
//     btnLang.classList.remove("active");
//     settingBtn[1].addEventListener("click", () => {
//         btnLang.classList.toggle("active")
//     })
//     settingBtn[2].onclick = () => {
        
//         document.documentElement.style.setProperty("--bg-dark", "#0b0a0a");
//         document.documentElement.style.setProperty("--bg-black", "#f7f7f7");
//         // document.documentElement.style.setProperty("--bg-night", "#7b7777");
//         document.documentElement.style.setProperty("--color-white", "#eddfdf");
//         document.documentElement.style.setProperty("--color-whitte-dark-p", "#eddfdf");
//         document.documentElement.style.setProperty("--shadw-black-100", "0 5px 15px #828cdbba");
//         // settingBtn[2].innerHTML = `<i class="fa-solid fa-sun"></i>`;
//         btnLang.classList.remove("active");
//     }
// }
// console.log(localStorage.getItem('darkMode'))
// for 


// --bg-blue: #0b0bb3;
// --bg-dark: #f7f7f7;
// --bg-black: #0b0a0a;
// --bg-night: #7b7777;
// --color-white: #fff;
// --color-whitte-dark-p: #58595d;
// --shadw-black-100: 0 5px 15px #22274c4d;
// console.log(settingBtn[2].innerHTML)
// console.log(document.documentElement.style.setProperty("--bg-dark", "#0b0a0a"))

// function btnLang() {
//     if (btnLang.style.display === "none") {
//         btnLang.style.display = "block";
//     } else {
//         btnLang.style.display = "none";
//     }
// }

// settingBtn[1].addEventListener('click', btnLang);
// console.log(settingBtn[0])
// console.log(settingBtn[1])
// console.log(settingBtn[2])
// console.log(button)
// console.log(btnLang)
