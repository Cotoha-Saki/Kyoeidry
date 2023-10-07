let nav = document.querySelector(".NavigationOpen");
let btn = document.querySelector(".buttom");
let mask = document.querySelector(".mask");

btn.onclick = () => {
    nav.classList.toggle("open");
}