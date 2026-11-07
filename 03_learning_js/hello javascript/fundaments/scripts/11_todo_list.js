const todo_list = [];

function add_todo() {
  const input_element = document.querySelector('.js_name_input'); // Estamos convirtiendo el elemento input y lo convertimos en JS
  const name = input_element.value; //El elemento obtenido en js lo guardamos como valor en una constante

  todo_list.push(name);
  console.log(todo_list);

  input_element.value = '';
}