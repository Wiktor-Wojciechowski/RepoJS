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

    inputvalue = document.querySelector('input[type="text"]').value;
    console.log(inputvalue);
})