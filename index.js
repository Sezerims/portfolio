let currentDate = new Date();
let currentTime = currentDate.getHours();

function setTheme() {
    document.body.classList.toggle("dark-theme");
    document.querySelector("#favicon").href = document.body.classList.contains("dark-theme") ? "icons/favicon-dark.ico" : "icons/favicon.ico";
}

if(currentTime > 20 || currentTime < 6) {
    setTheme();
}

document.querySelector(".toggle-theme").addEventListener("click", function() {
    setTheme();
});