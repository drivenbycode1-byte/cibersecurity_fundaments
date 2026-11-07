const todo_list = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let to_do_list_HTML = ''; //variable para guardar el rsultado y usar acumulator pattern

  for (let i = 0; i < todo_list.length; i++) {
    const to_do = todo_list[i]
    const html = `<p>${to_do}</p>`
    to_do_list_HTML += html;
  }

  console.log(to_do_list_HTML)

  document.querySelector('.js_todo_list').innerHTML = to_do_list_HTML
}

function add_todo() {
  const input_element = document.querySelector('.js_name_input'); // Estamos convirtiendo el elemento input y lo convertimos en JS
  const name = input_element.value; //El elemento obtenido en js lo guardamos como valor en una constante

  todo_list.push(name);
  console.log(todo_list);

  input_element.value = '';

  renderTodoList();
}