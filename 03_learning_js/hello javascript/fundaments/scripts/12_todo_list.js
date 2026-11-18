const todo_list = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-20-22'
}];

renderTodoList();

function renderTodoList() {
  let to_do_list_HTML = ''; 

  todo_list.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
          todo_list.splice(${index}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>      
    `;
    to_do_list_HTML += html;
  });

  document.querySelector('.js_todo_list').innerHTML = to_do_list_HTML
}

function add_todo() {
  const input_element = document.querySelector('.js_name_input');
  const name = input_element.value; 

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todo_list.push({
    name: name,
    dueDate: dueDate});

  input_element.value = '';

  renderTodoList();
}