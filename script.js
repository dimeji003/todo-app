const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')

const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const addTask = document.getElementById("add-task")
const toDo = document.getElementById("todo-button")
const taskbar = document.getElementById("task-bar")
let itemCount = 0



function newTodo(){
  taskbar.style.display = "block"
  
  
  
}

toDo.addEventListener("click", newTodo)




function addToList(){
  const inputTask = document.getElementById("input-task").value
  
  if (inputTask === ""){
    
  
    
  } else {
    
    itemCount++
    
    let li = document.createElement('li')

    
    
    
    li.innerHTML = inputTask 
    li.style.display= "flex"
    li.style.justifyContent= "space-between"
    
    
    itemCountSpan.textContent = itemCount
    
    document.getElementById('todo-list').appendChild(li)
    
    const deleteButton = document.createElement('button')

    deleteButton.innerText = "delete"

    li.appendChild(deleteButton)
    
    document.getElementById("input-task").value = "" 
    deleteButton.addEventListener("click", function(){
      deleteItem(li)
    })
  }
}

function deleteItem(item){

  
    const todoList = document.getElementById("todo-list")
    itemCount--
    todoList.removeChild(item)
    itemCountSpan.innerText = itemCount

  


}

    
addTask.addEventListener("click", addToList)


  
  


