
let list = JSON.parse(localStorage.getItem('element')) || [];
let checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) ||0;
let input = document.querySelector('.inname');
let add = document.querySelector('.add');

display();

function display() {
    let li = '';
    list.forEach((string, index) => {
        li += `
        <div class="box-container">
        <input type="checkbox" class="checkbox"
          ${checkboxStates[index] ? 'checked' : ''}
         onclick="toggleCheckbox(${index})">
        </div>
        <div class="namedisplay ${checkboxStates[index] ? 'strike-through' : ''}">${string}</div>
        <button class="delete" onclick="deletefun(${index})">Delete</button>
        `;
    });
    document.querySelector('.lidisplay').innerHTML = li;
    storage();
}

add.addEventListener('click', () => {
    addfun();
});

function addfun() {
    list.push(input.value);
    checkboxStates.push(false);
    input.value = '';
    storage();
    display();
}

function deletefun(index) {
    list.splice(index, 1);
    checkboxStates.splice(index, 1);
    storage();
    display();
}

function toggleCheckbox(index) {
    checkboxStates[index] = !checkboxStates[index]; 
    display();
    storage();
}

function storage() {
    localStorage.setItem('element', JSON.stringify(list));
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}

