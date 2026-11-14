const todo_list = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-20-22'
}];

renderTodoList();

function renderTodoList() {
  let to_do_list_HTML = ''; //variable para guardar el rsultado y usar acumulator pattern

  for (let i = 0; i < todo_list.length; i++) {
    const to_do_object = todo_list[i];
    //const name = to_do_object.name;
    //const dueDate = to_do_object.dueDate;
    const { name, dueDate } = to_do_object;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
          todo_list.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>      
    `;
    to_do_list_HTML += html;
  }

  document.querySelector('.js_todo_list').innerHTML = to_do_list_HTML
}

function add_todo() {
  const input_element = document.querySelector('.js_name_input'); // Estamos convirtiendo el elemento input y lo convertimos en JS
  const name = input_element.value; //El elemento obtenido en js lo guardamos como valor en una constante

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todo_list.push({
    name: name,
    dueDate: dueDate});

  input_element.value = '';

  renderTodoList();
}