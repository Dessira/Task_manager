// Js script containing todolist functions
list_container = document.querySelector('[data_lists]')

const new_list = form

all_tasks = [{id: 1, name: 'name'},{id: 2, name: 'child'}]

function render() {
	clearElement(list_container)
	all_tasks.forEach(list => {
		const list_elem = document.createElement('li')
		list_elem.dataset.listId = list.id
		list_elem.classList.add('list_item')
		list_elem.innerText = list.name
		list_container.appendChild(list_elem)
		
	});
}
function clearElement(element){
	while (element.firstChild) {
		element.removeChild(element.firstChild)
	}
}
render()

