function createNewItem(item) {
    const items = document.querySelector('#item-list');

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-xmark';

    button.appendChild(deleteIcon);
    li.appendChild(button);
    items.appendChild(li);
}

createNewItem('Oranges');