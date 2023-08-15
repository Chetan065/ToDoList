
const inputfielsEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const todolistEl = document.getElementById("todolist")
addButtonEl.addEventListener("click", function () {
    let inputvalue = inputfielsEl.value;
    if(inputvalue != "") {todolistEl.innerHTML += `<li class=" p-2  rounded-md text-2xl ">${inputvalue}</li>`}
    inputfielsEl.value = "";
})