let inputTask;
let toDO = document.querySelector('.toDOlist');
let tasks = [];
let getInput = (e) =>{
    inputTask = e.value.trim();
    tasks.push(inputTask);
}
let addTask = () =>{
    
    let newElment = document.createElement('div');
    newElment.classList.add('toDoList-Task');
  let  h2 = document.createElement('h2');
  let  i = document.createElement('i');
    i.classList.add('fa', 'fa-trash');
   let   checkBox = document.createElement('input');
    checkBox.type = "checkbox"; 
    checkBox.classList.add('taskCheck');


    tasks.forEach((task)=>{
          h2.innerText = `${task}`;
    })

    newElment.appendChild(h2);
    newElment.appendChild(checkBox);
    newElment.appendChild(i);
    toDO.appendChild(newElment);


    // to add task status 
 let taskCheckBox = document.querySelectorAll('.taskCheck');
    taskCheckBox.forEach((s)=>{
         s.addEventListener('change', ()=>{
            let currentH2 = s.previousElementSibling;
            let status = s.checked;
            if(status === true)
            {
                currentH2.classList.add('completed');
            }
         })
    })
    
  
    // to delete task 

    let dltButton = document.querySelectorAll('.fa-trash');

    dltButton.forEach((dlt)=>{
        dlt.addEventListener('click', ()=>{
            dlt.parentElement.remove();
        })
    })
  

    let inputBox = document.querySelector('#inputtask');
    inputBox.value = '';


  

 

  


}

