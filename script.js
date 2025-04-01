"use strict";
const input=document.querySelector(".input-task");
const addButton=document.querySelector(".add-bttn");
const taskContainer=document.querySelector(".tasks");
let i=1;

addButton.addEventListener("click",function(e){
    e.preventDefault();
    let inputTask=input.value;
    let taskDiv=document.createElement("div");
    taskDiv.classList.add("task" , `task-${i}`);
    taskDiv.innerHTML = `<p class="show-task">
          ${inputTask}
        </p>
        <button class="bttn remove-bttn">
          remove
          

        </button>`  ;  
        taskContainer.append(taskDiv);
        input.value="";
        input.focus();
});
taskContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("remove-bttn")){
       let taskToRemove = e.target.parentElement;
       taskToRemove.remove();
    }

})


