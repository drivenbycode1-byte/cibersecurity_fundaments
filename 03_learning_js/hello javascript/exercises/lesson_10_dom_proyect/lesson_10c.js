function handle_cost_key_down(event) {
    if (event.key === 'Enter') {
        calculate_total();
    }
}

function calculate_total() {
    const input_element = document.querySelector('.js_cost_input');
    let cost = Number(input_element.value);

    const total_cost_element = document.querySelector('.js_total_cost');

    if (cost < 0) {
        total_cost_element.innerHTML = 'Error: cost cannot be less than 0';
        total_cost_element.style.color = 'red';
        return;
    }

    if (cost < 40) {
        cost = cost + 10;
    }

    total_cost_element.style.color = 'black'; 
    total_cost_element.innerHTML = `$${cost}`;
}

function subscribe() {
    let button_element = document.querySelector('.js_subcribe_button');

    if(button_element.innerHTML === 'Subscribe') {  
        button_element.innerHTML = 'Subscribed';
        button_element.classList.add('is_subscribe') 
    } else {                                       
        button_element.innerHTML = 'Subscribe';
        button_element.classList.remove('is_subscribe')
    }
}
