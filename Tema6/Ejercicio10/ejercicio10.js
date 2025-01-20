const closeButton = document.getElementById("closeButton");
const capa = document.getElementById("capa");
capa.addEventListener("scroll", () => {
    if (capa.scrollTop + capa.clientHeight >= capa.scrollHeight) {
        closeButton.style.display = "block";
    }
});
