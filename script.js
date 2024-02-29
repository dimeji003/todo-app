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




function addToList(){
  const inputTask = document.getElementById("input-task").value

  let li = document.createElement('li')
  

  const list = document.getElementById("todo-list")
  li.innerHTML = inputTask

  document.getElementById('todo-list').appendChild(li)
  
  document.getElementById("input-task").value = "" 
  

}
addTask.addEventListener("click", addToList)

