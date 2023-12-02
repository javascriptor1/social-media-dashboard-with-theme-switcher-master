"use strict";
const rootEl = document.documentElement; // get root document element
const toggleEl = document.getElementById("checkbox");
const instagramDiv = document.querySelector(".instagram");
const userTheme = localStorage.getItem("theme"); // to save settings in local storage
const themeChecker = ()=>{
    if (userTheme === "dark") {
        rootEl.classList.add("dark");
        toggleEl.checked = true;
    }
};
function themeSwitcher() {
    if (rootEl.classList.contains("dark")) {
        rootEl.classList.remove("dark");
        instagramDiv.classList.remove("border-fix");
        localStorage.setItem("theme", "light");
        return;
    }
    rootEl.classList.add("dark");
    localStorage.setItem("theme", "dark");
    instagramDiv.classList.add("border-fix");
    localStorage.setItem("theme", "dark");
}
toggleEl.addEventListener("change", themeSwitcher);
themeChecker();

//# sourceMappingURL=index.de158e3a.js.map
