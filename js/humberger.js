// Humberger Menu and Navigation Links
const humberger = document.querySelector(".humberger");
const bg_eff = document.querySelector(".bg-eff");
const links = document.querySelector(".links");
humberger.onclick = () => {
    humberger.classList.toggle("active");
    bg_eff.classList.toggle("active");
    links.classList.toggle("active");
    document.body.classList.toggle("active");
    bg_eff.onclick = () => {
        humberger.classList.toggle("active");
        bg_eff.classList.toggle("active");
        links.classList.toggle("active");
        document.body.classList.toggle("active");
    };
};
// Humberger Menu and Navigation Links
