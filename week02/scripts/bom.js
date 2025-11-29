const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

button.addEventListener('click', () {
    code to run here
})
if(input.value.tim() !== ''){
code to run here
}
deleteButton.addEventListener('cick', function () {
    list.removeChild(li);
    input.focus();
})
input.value = '';
input.focus();