const todo_list =
  JSON.parse(localStorage.getItem('todo_list')) || [];

renderTodoList();

function renderTodoList() {
  let to_do_list_HTML = ''; 

  for (let i = 0; i < todo_list.length; i++) {
    const to_do_object = todo_list[i];
    const { name, dueDate } = to_do_object;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
          todo_list.splice(${i}, 1);
          localStorage.setItem('todo_list', JSON.stringify(todo_list)); 
          renderTodoList();
        " class="delete-todo-button">Delete</button>      
    `;
    to_do_list_HTML += html;
  }

  document.querySelector('.js_todo_list').innerHTML = to_do_list_HTML
}

function add_todo() {
  const input_element = document.querySelector('.js_name_input'); 
  const name = input_element.value; 

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todo_list.push({
    name: name,
    dueDate: dueDate
  });

  localStorage.setItem('todo_list', JSON.stringify(todo_list));  // guardar la tarea nueva

  input_element.value = '';

  renderTodoList();
}