function addItem() {
    var inputValue = document.getElementById("todo-input").value;

    if (inputValue === '') {
        alert('Enter a valid todo..!');
        return;
    }

    // Creating items
    var container = document.createElement('div');
    container.classList.add('item');

    var todoText = document.createElement('p');
    todoText.textContent = inputValue;
    var buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<img src="https://www.svgrepo.com/show/31676/delete-button.svg" alt="D">';

    // Delete the list event listener
    deleteButton.addEventListener('click', function () {
        container.remove();
    });


    var updateButton = document.createElement('button');
    updateButton.classList.add('update');
    updateButton.innerHTML = '<img src="https://www.svgrepo.com/show/77150/refresh-button.svg" alt="U">';

    // Update list event listener
    updateButton.addEventListener('click', function () {
        document.getElementById("todo-input").value = todoText.textContent;
        var btn = document.getElementById('add-button');
        btn.innerHTML = 'Update';
        btn.removeEventListener("click", addItem);

        // Add new event listener for updating
        btn.addEventListener('click', function updateItem() {
            todoText.textContent = document.getElementById("todo-input").value;
            document.getElementById('add-button').innerHTML = 'Add';
            document.getElementById("todo-input").value = '';
            btn.removeEventListener("click", updateItem);
            btn.addEventListener("click", addItem);
        });

    });

    // Appending to the respective divs
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(updateButton);

    container.appendChild(todoText);
    container.appendChild(buttonsDiv);

    var listContainer = document.getElementById('list-container');
    listContainer.appendChild(container);

    // After adding task, removing the text content of the input
    document.getElementById("todo-input").value = '';
}

document.getElementById('add-button').addEventListener('click', addItem);
