const input = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function addTask() {
    const value = input.value;
    if (value === '') {
        alert("You must enter task")
    } else {
        const li = document.createElement('li');
        li.innerHTML = value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    input.value = "";
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
});
