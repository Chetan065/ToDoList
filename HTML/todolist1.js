import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase , ref , push, onValue,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://todolist-2f9cb-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const listofitems = ref(database , "todolist")

const inputfielsEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const todolistEl = document.getElementById("todolist")
const deletebutton1 = document.getElementById("deletebutton1")


function deletetodolist(itemsArray){

    let cID = itemsArray[0]
        let exactloc = ref(database,`todolist/${cID}`)
        remove(exactloc)
}

function appendItems(currentItem){
    let cID = currentItem[0]
        let cVAL = currentItem[1]
    if(cVAL != "") {
        let newItem = document.createElement("li");
        newItem.textContent = cVAL
        todolistEl.append(newItem)
        let deletebutton = document.createElement("button")
        deletebutton.id = "specific"
        deletebutton.style.padding = "5px"
        deletebutton.style.borderColor = "red"
        deletebutton.style.borderWidth = "1px"
        deletebutton.style.borderStyle = "solid"
        deletebutton.style.borderRadius = "5px"
        deletebutton.innerHTML = "Delete"
        newItem.append(deletebutton)
        deletebutton.addEventListener("click",function(){
            let exactloc = ref(database,`todolist/${cID}`)
            remove(exactloc)
        })
        deletebutton1.addEventListener("click",function(){
           
            deletetodolist(currentItem)
        })
        }
    
   
}
function clearInput(){
    inputfielsEl.value = "";
}

addButtonEl.addEventListener("click", function () {
let inputvalue = inputfielsEl.value;
if(inputvalue != ""){
    push(listofitems,inputvalue)
}
else{
    alert("Please Enter a work first to ADD !")
}

clearInput()
})
function clearul(){
    todolistEl.innerHTML=""
}
onValue(listofitems,function(snapshot){
   if(snapshot.exists()){
    let itemsArray = Object.entries(snapshot.val())
    clearul()
    for(let i=0; i < itemsArray.length;i++){
        let currentItem = itemsArray[i]
        appendItems(currentItem)
    }
   }
   else{
    todolistEl.innerHTML = "No Work Yet ...."
   }
    
    
})




