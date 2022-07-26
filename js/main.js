var list = document.querySelector("ul");

list.addEventListener("click", function (e) {
    if (e.target.className == "remove") {
        const element = e.target.parentElement;
        list.removeChild(element);
    }
})

addElement = document.forms['list-of-elements'];


btn = document.querySelector("#list-of-elements button");

btn.addEventListener('click', function (e) {
    e.preventDefault();

    inputter = document.querySelector('#element-adder');
    inputvalue = inputter.value;

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.classList.add("remove");
    newSpan.textContent = inputvalue;

    newLi.appendChild(newSpan);
    list.appendChild(newLi);

    inputter.value = "";

})

searchInput = document.querySelector("#searchbar");
searchInput.addEventListener('keyup', function (e) {
    var searchedTitle = searchInput.value.toLowerCase();
    var items = Array.from(document.querySelectorAll("li"));
    items.forEach(function (element) {
        if (element.textContent.toLowerCase().indexOf(searchedTitle) != -1) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})
