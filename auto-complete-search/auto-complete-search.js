const searchInput = document.getElementById('search');
const userCardContainer = document.querySelector('.user-cards');

let users = []
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => {
        users = data;
    })

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filterResult = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    )
    updateUI(filterResult);
})

function updateUI(users) {
    userCardContainer.innerHTML = ''
    users.forEach(user => {
            const card = document.createElement('div');
            card.innerHTML = `
            <div>${user.name}</div>
            <div>${user.email}</div>
        `;
            userCardContainer.appendChild(card);
        }
    )
}