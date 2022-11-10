let edit_state = false;
let index;

//delete todo
function deleteTodo(eventObject) {
  const buttonClicked = eventObject.target;
  const todoItem = buttonClicked.parentNode.parentNode.parentNode;
  todoItem.remove();
}
/*function find_index(e) {
	const total = document.querySelectorAll('#todo__list')
	let val = e.parentNode
	let count;
	for (index in total) {
		if (e == index){
			return count;
		}
		count++;
	}
};*/

//edit todo
let editPost = (e) => {
	document.getElementById('todo__input').value = e.parentElement.previousElementSibling.innerHTML;
	//e.target.classList.add("edited")
	//index = find_index(e)
  e.parentNode.parentNode.parentNode.remove();
};

//listen to events on delete button
function addListenersToDeleteButtons() {
  // select all the buttons with .delete__btn class.
  //remember querySelectorAll return an array (NodeList)
  // only the last element in the array is new. every other element as been existing before;
  const buttonCollection = document.querySelectorAll(".delete__btn");
  // select the last element in the array;
  const lastButton = buttonCollection[buttonCollection.length - 1];
  lastButton.addEventListener("click", deleteTodo);
}


//show all todos
function showTodoOnTheScreen(todo) {
  const listOfTodo = document.querySelector("#todo__list");
  const li = document.createElement("li");
  li.classList.add("todo__section--todoItem");

  li.innerHTML = `<div class="todo_item">
  <input class="todo__checkbox" type="checkbox" />
  <span class="todo__text"> ${todo} </span>
  <div class="todo__actions--wrapper">
    <button onClick="editPost(this)" id="edit_btn" class="todo__actions edit__btn" >
      edit
    </button>
    <button id="delete_btn" class="todo__actions delete__btn">
      delete
    </button>
  </div>
</div>`;

  listOfTodo.appendChild(li);
  addListenersToDeleteButtons();
}


//retrieves input 
function todoFormSumbitHandler(eventObject) {
  eventObject.preventDefault();
  const inputField = document.querySelector("#todo__input");
  const todoValue = inputField.value;
  showTodoOnTheScreen(todoValue);
  inputField.value = ""
}

//clears input field
function clearForm() {
const inputField = document.querySelector("#todo__input");
inputField.value = "";
}

//event listener for submit
const todoForm = document.getElementById("form");
todoForm.addEventListener("submit", todoFormSumbitHandler);


//event listener for clear
const clearButton = document.querySelector("#Clear");
clearButton.addEventListener("click", clearForm)
