let project = document.querySelectorAll(".project");
let projectOne = project[0].offsetTop + project[0].offsetHeight / 2;
let projectTwo = project[1].offsetTop + project[1].offsetHeight / 2;
let projectThree = project[2].offsetTop + project[2].offsetHeight / 2;
let projectFour = project[3].offsetTop + project[3].offsetHeight / 2;

console.log(projectOne);
console.log(projectTwo);
console.log(projectThree);
console.log(projectFour);

window.onscroll = () => {
    if (window.scrollY >= projectFour + projectFour / 4) {
        document.body.style.backgroundColor = "var(--background)";
    } else if (window.scrollY >= projectFour) {
        document.body.style.backgroundColor = "#1000ff17";
    } else if (window.scrollY >= projectThree) {
        document.body.style.backgroundColor = "#49aa070a";
    } else if (window.scrollY >= projectTwo) {
        document.body.style.backgroundColor = "#ff7d0029";
    } else if (window.scrollY >= projectOne) {  
        document.body.style.backgroundColor = "#ffa2a221";
    } else {
        document.body.style.backgroundColor = "var(--background)";
    }
};
