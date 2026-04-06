const inputBox = document.getElementById("input-box");
const dateBox = document.getElementById("date-box");
const listContainer = document.getElementById("list-container");
const selectedDateText = document.getElementById("selected-date");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something !!");
    }else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); 
        if(dateBox.value){
        let formattedDate = new Date(dateBox.value).toDateString();
        selectedDateText.innerHTML = "📅 Selected Date: " + formattedDate;
    }
    }
    inputBox.value ="";
    dateBox.value = "";
    saveData();
}
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    localStorage.setItem("date", selectedDateText.innerHTML);

}
function showTask(){
    const data = localStorage.getItem("data");
    const savedDate = localStorage.getItem("date");

    if(data){
        listContainer.innerHTML = data;
    }

    if(savedDate){
        selectedDateText.innerHTML = savedDate;
    }
}
showTask();