let currentDate = new Date();
let currentTime = currentDate.getHours();

if(currentTime >= 18 || currentTime < 6) {
    document.body.classList.add("dark-theme");
}

document.querySelector(".toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});