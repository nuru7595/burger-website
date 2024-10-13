/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    });
});

hamburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        tab.classList.add("active");

        const tabval = tab.getAttribute("data-tabs");

        all.forEach(item => {
            item.classList.add("hidden");
        });

        if (tabval == "food") {
            foods.forEach(item => {
                item.classList.remove("hidden");
            });
        } else if (tabval == "snack") {
            snacks.forEach(item => {
                item.classList.remove("hidden");
            });
        } else if (tabval == "beverage") {
            beverages.forEach(item => {
                item.classList.remove("hidden");
            });
        } else {
            all.forEach(item => {
                item.classList.remove("hidden");
            });
        }
    });
});

/*~~~~~~~~~~~~~~~ Swiper JS ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 1
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3
        }
    }
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const upBtn = document.getElementById("up");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 250) {
        upBtn.classList.remove("-bottom-1/2");
        upBtn.classList.add("bottom-4");
    } else {
        upBtn.classList.add("-bottom-1/2");
        upBtn.classList.remove("bottom-4");
    }
});

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 50) {
        header.classList.add("border-b", "border-yellowC");
    } else {
        header.classList.remove("border-b", "border-yellowC");
    }
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.querySelector("#theme-btn");

const darkMode = () => {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

const lightMode = () => {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}

if (localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener("click", () => {
    if (localStorage.getItem("mode") == "dark") {
        lightMode();
    } else {
        darkMode();
    }
});

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("text-yellowC");
        if(item.href.includes(current)) {
            item.classList.add("text-yellowC");
        }
    });
}

window.addEventListener("scroll", activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});

sr.reveal(".home-image");
sr.reveal(".home-content", {origin: "bottom"});

sr.reveal(".category-card", {interval: 300});

sr.reveal(".promo-1", {origin: "left"});
sr.reveal(".promo-2", {origin: "right"});

sr.reveal(".about-img", {origin: "bottom"});
sr.reveal(".about-content", {origin: "top"});

sr.reveal(".menu-items", {origin: "left"});

sr.reveal(".review", {origin: "right"});

sr.reveal(".footer");