const btn = document.querySelector(".overlay-show");
const overlay = document.querySelector(".popup");
const sent = document.querySelector(".send");

    setTimeout(() => {
        btn.addEventListener("click", () => {
            overlay.classList.remove("hide");
    }, 1000);
});

sent.addEventListener("click", () => {
    overlay.classList.add("hide");
});