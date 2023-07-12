// 1. Ко всем элементам, имеющим класс "dropdown-item" 
// добавить еще один класс "super-dropdown", 
// необходимо использовать методы forEach и querySelectorAll 
// и свойство classList у элементов.

const addClass = document.querySelectorAll('.dropdown-item');
addClass.forEach(el => el.classList.add('super-dropdown'))

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary",
// если он присутствует у этого элемента, либо добавить, 
// если такого класса у элемента не было.

const btnToggle = document.querySelectorAll('.btn');
btnToggle.forEach(el => {
    el.classList.toggle('btn-secondary');
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, 
// у которого присутствует класс "menu".

const menuRemove = document.querySelectorAll('.menu');
menuRemove.forEach(el => {
    if (el.classList.contains('dropdown-menu')) {
        el.classList.remove('dropdown-menu');
    }
})

// 4. Используя метод insertAdjacentHTML добавьте после div
// 'a с классом "dropdown" следующую разметку: `<a href="#">link</a>`

const addLinkDropdown = document.querySelector('div.dropdown');
addLinkDropdown.insertAdjacentHTML('afterend', `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const replacementId = document.getElementById("dropdownMenuButton");
replacementId.id = 'superDropdown';
console.log(replacementId)

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
// атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const addDataAtribut = document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]')
addDataAtribut.forEach(element => {
    element.dataset.add = '3'
})

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const removeTypeAtribut = document.querySelector('.dropdown-toggle')
removeTypeAtribut.removeAttribute('type')