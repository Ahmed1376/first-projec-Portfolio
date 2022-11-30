let scrollBtn = document.querySelector(".up");
console.log(this.scrollY);

window.onscroll = function () {
    if (this.scrollY >= 120) {
        scrollBtn.classList.add("show");
    }
    else scrollBtn.classList.remove("show");
}

scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};