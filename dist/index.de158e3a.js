"use strict";
const rootEl = document.documentElement; // get root document element
const toggleEl = document.getElementById("checkbox");
const instagramDiv = document.querySelector(".instagram");
const userTheme = localStorage.getItem("theme"); // to save settings in local storage
const youTubeIconDiv = document.querySelector(".span-yt");
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
        youTubeIconDiv.classList.remove("youtube");
        return;
    }
    rootEl.classList.add("dark");
    youTubeIconDiv.classList.add("youtube");
    localStorage.setItem("theme", "dark");
    instagramDiv.classList.add("border-fix");
    localStorage.setItem("theme", "dark");
}
toggleEl.addEventListener("change", themeSwitcher);
themeChecker();

//# sourceMappingURL=index.de158e3a.js.map
