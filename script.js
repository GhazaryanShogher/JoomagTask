let first = document.getElementById("first");
let second = document.getElementById("second")
function fadeInFadeOut () {
    if (second.className === "hidden") {
        second.classList.remove("hidden");
        return first.classList.add("hidden");
    }
    if (first.className === "hidden") {
        first.classList.remove("hidden");
        return second.classList.add("hidden");
    }
}
setInterval(fadeInFadeOut, 2000)