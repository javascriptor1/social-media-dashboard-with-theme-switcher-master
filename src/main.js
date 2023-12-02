"use strict";

const rootEl = document.getElementsByTagName("html");
console.log(rootEl);
const toggleEl = document.getElementById("checkbox");
const instagramDiv = document.querySelector(".instagram");

function themeSwitcher() {
  rootEl[0].classList.toggle("dark");
  instagramDiv.classList.toggle("border-fix");
}

toggleEl.addEventListener("change", themeSwitcher);
