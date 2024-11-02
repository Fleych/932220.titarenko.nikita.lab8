function add_line() {
    let line = document.createElement('div');
    line.classList.add('line');

    let input_1 = document.createElement('input');
    input_1.classList.add('input_1');
    line.appendChild(input_1);

    let input_2 = document.createElement('input');
    input_2.classList.add('input_2');
    line.appendChild(input_2);
    
    let up = document.createElement('button');
    up.innerHTML = '&#8593;';
    up.onclick = function() {
        top_line = line.previousElementSibling;
        if (top_line) {
            line.parentNode.insertBefore(line, top_line);
        }
    }
    line.appendChild(up);

    let down = document.createElement('button');
    down.innerHTML = '&#8595;';
    down.onclick = function() {
        bottom_line = line.nextElementSibling;
        if (bottom_line) {
            line.parentNode.insertBefore(bottom_line, line);
        }
    }
    line.appendChild(down);

    let remove_line = document.createElement('button');
    remove_line.innerHTML = 'x';
    remove_line.onclick = function() {
        line.remove();
    }
    line.appendChild(remove_line);

    table.appendChild(line);
}

function save() {
    saved_table = '{';
    lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
        saved_table += ('"' + line.querySelector('.input_1').value + '":"' + line.querySelector('.input_2').value + '"');
        if (index !== lines.length - 1) {
            saved_table += ',';
        }
    });
    saved_table += '}';

    saved.innerText = saved_table;
}

add_line();