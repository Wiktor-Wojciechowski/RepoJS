var list = document.querySelector("ul");

list.addEventListener("click", function (e) {
    if (e.target.className == "remove") {
        const element = e.target.parentElement;
        list.removeChild(element);
    }
})