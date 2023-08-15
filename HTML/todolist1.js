
const inputfielsEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const todolistEl = document.getElementById("todolist")
const deletebutton1 = document.getElementById("deletebutton1")
var deleteButton2;
var item;
addButtonEl.addEventListener("click", function () {
    let inputvalue = inputfielsEl.value;
    if(inputvalue != "") {
    // todolistEl.innerHTML += `<li class=" p-2  rounded-md text-2xl ">${inputvalue}</li>`
    item = document.createElement("li");
    let img = document.createElement("img");
    img.src = "Media/check_5610944.png";
    img.style.height = "20px";
    img.style.width = "20px";
    item.appendChild(img)
    item.appendChild(document.createTextNode(inputvalue));
    todolistEl.appendChild(item);
    deleteButton2 = document.createElement("button");
        deleteButton2.innerHTML = "Delete"
        item.appendChild(deleteButton2)
    deleteButton2.addEventListener("click",function(){
            item.remove();
      })
      
      
}
    inputfielsEl.value = "";
    
})
deletebutton1.addEventListener("click",function(){
    todolistEl.remove();
    confirm("Are you Sure you want to Delete Your ToDoList ??")
    
  })

