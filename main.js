const breaktask = document.getElementById('Break');
const gymtask = document.getElementById('Gym');
const studytask = document.getElementById('Study');
const tvtask = document.getElementById('TV');
const friendstask = document.getElementById('Friends');
const worktask = document.getElementById('Work');
const foodtask = document.getElementById('Food');
const shoppingtask = document.getElementById('Shopping');
const deselectbtn = document.getElementById('Deselect_All');
const taskContainer = document.querySelector('.task_container');
const scheduleContainer = document.querySelector('.Schedule_container');
const resetBtn = document.querySelector('.delete_btn');
const popUp = document.querySelector('.pop-up_container');
const nobtn = document.getElementById('btn_no');
const yesbtn = document.getElementById('btn_yes');


let selectedColor , active ;


//event listeners 

taskContainer.addEventListener('click',selectTask);
scheduleContainer.addEventListener('click',setColors);
deselectbtn.addEventListener('click',restTasks);
resetBtn.addEventListener('click',openPopUp)
nobtn.addEventListener('click',closePopUp)
yesbtn.addEventListener('click',deleteTasks)

//task click 
function selectTask (e){
    restTasks();
    taskColor = e.target.style.backgroundColor;
    switch(e.target.id){
        
        case 'Break':
        activeTask(breaktask,taskColor);
        icon = '<i class="fas fa-couch"></i>'
        break

        case 'Gym':
            activeTask(gymtask,taskColor);
            icon = '<i class="fas fa-dumbbell"></i>'
            break

         case 'Study':
            activeTask(studytask,taskColor);
             icon = '<i class="fas fa-book"></i>'
             break  

         case 'TV':
            activeTask(tvtask,taskColor);
             icon = '<i class="fas fa-tv"></i>'
            break  

        case 'Friends':
            activeTask(friendstask,taskColor);
            icon = '<i class="fas fa-user-friends"></i>'
            break  

        case 'Work':
            activeTask(worktask,taskColor);
             icon = '<i class="fas fa-briefcase"></i>'
            break  


         case 'Food':
           activeTask(foodtask,taskColor);
           icon = '<i class="fas fa-hamburger"></i>'
           break

        
        case 'Shopping':
          activeTask(shoppingtask,taskColor);
           icon = '<i class="fas fa-shopping-bag"></i>'
           break

    }
}

// set colors for schedule

function setColors(e){
    if (e.target.classList.contains('task')&& active==true){
        e.target.style.backgroundColor= selectedColor;                                
        e.target.innerHTML = icon;
    }
}

//select task

function activeTask(task , color){
    task.classList.toggle('selected');
    if (task.classList.contains('selected')){
        active = true;
        selectedColor= color;
        return selectedColor; 

    }else{
        active = false ;
    }
}

//reset tasks 
function restTasks(){
    const allTasks = document.querySelectorAll('.task_name');
    allTasks.forEach((item)=>{
        item.className = 'task_name'
    })
}

//delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor='white';
    })
    closePopUp();
}

//open pop up
function openPopUp(){
    popUp.style.display = 'flex';

}
//close pop up
function closePopUp(){
    popUp.style.display = 'none';
}