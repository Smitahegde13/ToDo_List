const inputBox=document.getElementById("input-box");
const ListCont=document.getElementById("list-container");

function addTask(){
     if(inputBox.value === ''){
        alert("Ypu must write something!");
     }
     else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        ListCont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        saveData();
     }
     inputBox.value="";
     saveData();
}
ListCont.addEventListener("click", function(e) {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", ListCont.innerHTML);
}
function showTask() {
    ListCont.innerHTML=localStorage.getItem("data");
}
showTask() ;